import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
var CLOCK_HAND_STYLES = {
    small: {
        height: '75px',
        top: 'calc(50% - 75px)'
    },
    large: {
        height: '103px',
        top: 'calc(50% - 103px)'
    }
};
var NgxMaterialTimepickerFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerFaceComponent() {
        this.timeUnit = TimeUnit;
        this.innerClockFaceSize = 85;
        this.timeChange = new EventEmitter();
        this.timeSelected = new EventEmitter();
    }
    NgxMaterialTimepickerFaceComponent.prototype.ngAfterViewInit = function () {
        this.setClockHandPosition();
        this.addTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var faceTimeChanges = changes['faceTime'];
        var selectedTimeChanges = changes['selectedTime'];
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(function (time) { return time.time === _this.selectedTime.time; });
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this.setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () { return _this.selectAvailableTime(); });
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.trackByTime = function (_, time) {
        return time.time;
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMousedown = function (e) {
        e.preventDefault();
        this.isStarted = true;
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectTime = function (e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        var clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        var centerX = clockFaceCords.left + clockFaceCords.width / 2;
        var centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        var arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        var circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        var isInnerClockChosen = this.format && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        var angleStep = this.unit === TimeUnit.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        var roundedAngle = roundAngle(circleAngle, angleStep);
        var angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
        var selectedTime = this.faceTime.find(function (val) { return val.angle === angle; });
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this.isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMouseup = function (e) {
        e.preventDefault();
        this.isStarted = false;
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnDestroy = function () {
        this.removeTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.addTouchEvents = function () {
        this.touchStartHandler = this.onMousedown.bind(this);
        this.touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.addEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.removeTouchEvents = function () {
        this.clockFace.nativeElement.removeEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.removeEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.setClockHandPosition = function () {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this.decreaseClockHand();
            }
            else {
                this.increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = "rotate(" + this.selectedTime.angle + "deg)";
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectAvailableTime = function () {
        var _this = this;
        var currentTime = this.faceTime.find(function (time) { return _this.selectedTime.time === time.time; });
        this.isClockFaceDisabled = this.faceTime.every(function (time) { return time.disabled; });
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            var availableTime = this.faceTime.find(function (time) { return !time.disabled; });
            this.timeChange.next(availableTime);
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.isInnerClockFace = function (x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    };
    NgxMaterialTimepickerFaceComponent.prototype.decreaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    };
    NgxMaterialTimepickerFaceComponent.prototype.increaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NgxMaterialTimepickerFaceComponent.prototype, "faceTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectedTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "unit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerFaceComponent.prototype, "minutesGap", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeSelected", void 0);
    tslib_1.__decorate([
        ViewChild('clockFace', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockFace", void 0);
    tslib_1.__decorate([
        ViewChild('clockHand', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockHand", void 0);
    tslib_1.__decorate([
        HostListener('mousedown', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMousedown", null);
    tslib_1.__decorate([
        HostListener('click', ['$event']),
        HostListener('touchmove', ['$event.changedTouches[0]']),
        HostListener('touchend', ['$event.changedTouches[0]']),
        HostListener('mousemove', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectTime", null);
    tslib_1.__decorate([
        HostListener('mouseup', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMouseup", null);
    NgxMaterialTimepickerFaceComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-face',
            template: "<div class=\"clock-face\" #clockFace>\n    <div *ngIf=\"unit !== timeUnit.MINUTE;else minutesFace\" class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime | slice: 0 : 12; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}\n            </span>\n        </div>\n        <div class=\"clock-face__inner\" *ngIf=\"faceTime.length > 12\"\n             [style.top]=\"'calc(50% - ' + innerClockFaceSize + 'px)'\">\n            <div class=\"clock-face__number clock-face__number--inner\"\n                 [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n                 [style.height.px]=\"innerClockFaceSize\"\n                 *ngFor=\"let time of faceTime | slice: 12 : 24; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime?.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}</span>\n            </div>\n        </div>\n    </div>\n\n    <span class=\"clock-face__clock-hand\" [ngClass]=\"{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}\"\n          #clockHand [hidden]=\"isClockFaceDisabled\"></span>\n</div>\n<ng-template #minutesFace>\n    <div class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime; trackBy: trackByTime\">\n\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n          [ngClass]=\"{'active': time.time | activeMinute: selectedTime?.time:minutesGap:isClockFaceDisabled,\n           'disabled': time.disabled}\">\n\t{{time.time | minutesFormatter: minutesGap | timeLocalizer: timeUnit.MINUTE}}</span>\n        </div>\n    </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face{background-color:var(--clock-face-background-color)}}.clock-face__inner{position:absolute}.clock-face__container{margin-left:-2px}.clock-face__number{position:absolute;-webkit-transform-origin:0 100%;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer{height:calc(290px / 2 - 20px)}.clock-face__number--outer>span{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer>span{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner>span{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner>span{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number>span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number>span{font-family:var(--primary-font-family)}}.clock-face__number>span.active{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number>span.active{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number>span.disabled{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number>span.disabled{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand{height:103px;width:2px;-webkit-transform-origin:0 100%;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand{background-color:var(--clock-hand-color)}}.clock-face__clock-hand:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face{width:225px;height:225px;padding:5px}.clock-face__number--outer{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute:before{top:0}}"]
        })
    ], NgxMaterialTimepickerFaceComponent);
    return NgxMaterialTimepickerFaceComponent;
}());
export { NgxMaterialTimepickerFaceComponent };
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXItZmFjZS9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELElBQU0saUJBQWlCLEdBQUc7SUFDdEIsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLE9BQU87UUFDZixHQUFHLEVBQUUsbUJBQW1CO0tBQzNCO0NBQ0osQ0FBQztBQVFGO0lBTkE7UUFRSSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBR3BCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQVFkLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUE2SXhELENBQUM7SUFwSUcsNERBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0RBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWdCQztRQWZHLElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFNLG1CQUFt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QUVELFNBQVMsaUJBQWlCLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLFlBQW9CO0lBQ3pGLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsYUFBYTtRQUNqQyxPQUFPLEdBQUcsR0FBRyxZQUFZLENBQUM7S0FDN0I7U0FBTSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLGNBQWM7UUFDeEMsT0FBTyxHQUFHLEdBQUcsWUFBWSxDQUFDO0tBQzdCO1NBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxhQUFhO1FBQ3ZDLE9BQU8sR0FBRyxHQUFHLFlBQVksQ0FBQztLQUM3QjtTQUFNLEVBQUMsWUFBWTtRQUNoQixPQUFPLFlBQVksQ0FBQztLQUN2QjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb2NrRmFjZVRpbWUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXVuaXQuZW51bSc7XG5cbmNvbnN0IENMT0NLX0hBTkRfU1RZTEVTID0ge1xuICAgIHNtYWxsOiB7XG4gICAgICAgIGhlaWdodDogJzc1cHgnLFxuICAgICAgICB0b3A6ICdjYWxjKDUwJSAtIDc1cHgpJ1xuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAzcHgnLFxuICAgICAgICB0b3A6ICdjYWxjKDUwJSAtIDEwM3B4KSdcbiAgICB9XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLWZhY2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRmFjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG5cbiAgICBpc0Nsb2NrRmFjZURpc2FibGVkOiBib29sZWFuO1xuICAgIGlubmVyQ2xvY2tGYWNlU2l6ZSA9IDg1O1xuXG4gICAgQElucHV0KCkgZmFjZVRpbWU6IENsb2NrRmFjZVRpbWVbXTtcbiAgICBASW5wdXQoKSBzZWxlY3RlZFRpbWU6IENsb2NrRmFjZVRpbWU7XG4gICAgQElucHV0KCkgdW5pdDogVGltZVVuaXQ7XG4gICAgQElucHV0KCkgZm9ybWF0OiBudW1iZXI7XG4gICAgQElucHV0KCkgbWludXRlc0dhcDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIHRpbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENsb2NrRmFjZVRpbWU+KCk7XG4gICAgQE91dHB1dCgpIHRpbWVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnY2xvY2tGYWNlJywge3N0YXRpYzogdHJ1ZX0pIGNsb2NrRmFjZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjbG9ja0hhbmQnLCB7c3RhdGljOiB0cnVlfSkgY2xvY2tIYW5kOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpc1N0YXJ0ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0SGFuZGxlcjogKCkgPT4gYW55O1xuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyOiAoKSA9PiBhbnk7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xvY2tIYW5kUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5hZGRUb3VjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZmFjZVRpbWVDaGFuZ2VzID0gY2hhbmdlc1snZmFjZVRpbWUnXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaW1lQ2hhbmdlcyA9IGNoYW5nZXNbJ3NlbGVjdGVkVGltZSddO1xuXG4gICAgICAgIGlmICgoZmFjZVRpbWVDaGFuZ2VzICYmIGZhY2VUaW1lQ2hhbmdlcy5jdXJyZW50VmFsdWUpXG4gICAgICAgICAgICAmJiAoc2VsZWN0ZWRUaW1lQ2hhbmdlcyAmJiBzZWxlY3RlZFRpbWVDaGFuZ2VzLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIC8qIFNldCB0aW1lIGFjY29yZGluZyB0byBwYXNzZWQgYW4gaW5wdXQgdmFsdWUgKi9cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lID0gdGhpcy5mYWNlVGltZS5maW5kKHRpbWUgPT4gdGltZS50aW1lID09PSB0aGlzLnNlbGVjdGVkVGltZS50aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWRUaW1lQ2hhbmdlcyAmJiBzZWxlY3RlZFRpbWVDaGFuZ2VzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDbG9ja0hhbmRQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWNlVGltZUNoYW5nZXMgJiYgZmFjZVRpbWVDaGFuZ2VzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gVG8gYXZvaWQgYW4gZXJyb3IgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGVjdEF2YWlsYWJsZVRpbWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHRyYWNrQnlUaW1lKF8sIHRpbWU6IENsb2NrRmFjZVRpbWUpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGltZS50aW1lO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZWRvd24oZTogYW55KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudC5jaGFuZ2VkVG91Y2hlc1swXSddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0nXSlcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIHNlbGVjdFRpbWUoZTogYW55KTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCAmJiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZS50eXBlICE9PSAnY2xpY2snKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb2NrRmFjZUNvcmRzID0gdGhpcy5jbG9ja0ZhY2UubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAvKiBHZXQgeDAgYW5kIHkwIG9mIHRoZSBjaXJjbGUgKi9cbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGNsb2NrRmFjZUNvcmRzLmxlZnQgKyBjbG9ja0ZhY2VDb3Jkcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBjbG9ja0ZhY2VDb3Jkcy50b3AgKyBjbG9ja0ZhY2VDb3Jkcy5oZWlnaHQgLyAyO1xuICAgICAgICAvKiBDb3VudGluZyB0aGUgYXJjdGFuZ2VudCBhbmQgY29udmVydCBpdCB0byBmcm9tIHJhZGlhbiB0byBkZWcgKi9cbiAgICAgICAgY29uc3QgYXJjdGFuZ2VudCA9IE1hdGguYXRhbihNYXRoLmFicyhlLmNsaWVudFggLSBjZW50ZXJYKSAvIE1hdGguYWJzKGUuY2xpZW50WSAtIGNlbnRlclkpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIC8qIEdldCBhbmdsZSBhY2NvcmRpbmcgdG8gcXVhZHJhbnQgKi9cbiAgICAgICAgY29uc3QgY2lyY2xlQW5nbGUgPSBjb3VudEFuZ2xlQnlDb3JkcyhjZW50ZXJYLCBjZW50ZXJZLCBlLmNsaWVudFgsIGUuY2xpZW50WSwgYXJjdGFuZ2VudCk7XG4gICAgICAgIC8qIENoZWNrIGlmIHNlbGVjdGVkIHRpbWUgZnJvbSB0aGUgaW5uZXIgY2xvY2sgZmFjZSAoMjQgaG91cnMgZm9ybWF0IG9ubHkpICovXG4gICAgICAgIGNvbnN0IGlzSW5uZXJDbG9ja0Nob3NlbiA9IHRoaXMuZm9ybWF0ICYmIHRoaXMuaXNJbm5lckNsb2NrRmFjZShjZW50ZXJYLCBjZW50ZXJZLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIC8qIFJvdW5kIGFuZ2xlIGFjY29yZGluZyB0byBhbmdsZSBzdGVwICovXG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IHRoaXMudW5pdCA9PT0gVGltZVVuaXQuTUlOVVRFID8gKDYgKiAodGhpcy5taW51dGVzR2FwIHx8IDEpKSA6IDMwO1xuICAgICAgICBjb25zdCByb3VuZGVkQW5nbGUgPSByb3VuZEFuZ2xlKGNpcmNsZUFuZ2xlLCBhbmdsZVN0ZXApO1xuICAgICAgICBjb25zdCBhbmdsZSA9IChyb3VuZGVkQW5nbGUgfHwgMzYwKSArIChpc0lubmVyQ2xvY2tDaG9zZW4gPyAzNjAgOiAwKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFRpbWUgPSB0aGlzLmZhY2VUaW1lLmZpbmQodmFsID0+IHZhbC5hbmdsZSA9PT0gYW5nbGUpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFRpbWUgJiYgIXNlbGVjdGVkVGltZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlLm5leHQoc2VsZWN0ZWRUaW1lKTtcblxuICAgICAgICAgICAgLyogVG8gbGV0IGtub3cgd2hldGhlciB1c2VyIGVuZGVkIGludGVyYWN0aW9uIHdpdGggY2xvY2sgZmFjZSAqL1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNlbGVjdGVkLm5leHQoc2VsZWN0ZWRUaW1lLnRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNldXAoZTogYW55KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVUb3VjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG91Y2hFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydEhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG91Y2hFbmRIYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNsb2NrRmFjZS5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5jbG9ja0ZhY2UubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVRvdWNoRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb2NrRmFjZS5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5jbG9ja0ZhY2UubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENsb2NrSGFuZFBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWUudGltZSA+IDEyIHx8IHRoaXMuc2VsZWN0ZWRUaW1lLnRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JlYXNlQ2xvY2tIYW5kKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VDbG9ja0hhbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvY2tIYW5kLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3RoaXMuc2VsZWN0ZWRUaW1lLmFuZ2xlfWRlZylgO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0QXZhaWxhYmxlVGltZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmZhY2VUaW1lLmZpbmQodGltZSA9PiB0aGlzLnNlbGVjdGVkVGltZS50aW1lID09PSB0aW1lLnRpbWUpO1xuICAgICAgICB0aGlzLmlzQ2xvY2tGYWNlRGlzYWJsZWQgPSB0aGlzLmZhY2VUaW1lLmV2ZXJ5KHRpbWUgPT4gdGltZS5kaXNhYmxlZCk7XG5cbiAgICAgICAgaWYgKChjdXJyZW50VGltZSAmJiBjdXJyZW50VGltZS5kaXNhYmxlZCkgJiYgIXRoaXMuaXNDbG9ja0ZhY2VEaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZSA9IHRoaXMuZmFjZVRpbWUuZmluZCh0aW1lID0+ICF0aW1lLmRpc2FibGVkKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlLm5leHQoYXZhaWxhYmxlVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSW5uZXJDbG9ja0ZhY2UoeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgLyogRGV0ZWN0IHdoZXRoZXIgdGltZSBmcm9tIHRoZSBpbm5lciBjbG9jayBmYWNlIG9yIG5vdCAoMjQgZm9ybWF0IG9ubHkpICovXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeCAtIHgwLCAyKSArIE1hdGgucG93KHkgLSB5MCwgMikpIDwgdGhpcy5pbm5lckNsb2NrRmFjZVNpemU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWNyZWFzZUNsb2NrSGFuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbG9ja0hhbmQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBDTE9DS19IQU5EX1NUWUxFUy5zbWFsbC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2xvY2tIYW5kLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gQ0xPQ0tfSEFORF9TVFlMRVMuc21hbGwudG9wO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5jcmVhc2VDbG9ja0hhbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xvY2tIYW5kLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gQ0xPQ0tfSEFORF9TVFlMRVMubGFyZ2UuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNsb2NrSGFuZC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IENMT0NLX0hBTkRfU1RZTEVTLmxhcmdlLnRvcDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdW5kQW5nbGUoYW5nbGU6IG51bWJlciwgc3RlcDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhbmdsZSAvIHN0ZXApICogc3RlcDtcbn1cblxuZnVuY3Rpb24gY291bnRBbmdsZUJ5Q29yZHMoeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGN1cnJlbnRBbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoeSA+IHkwICYmIHggPj0geDApIHsvLyBJSSBxdWFydGVyXG4gICAgICAgIHJldHVybiAxODAgLSBjdXJyZW50QW5nbGU7XG4gICAgfSBlbHNlIGlmICh5ID4geTAgJiYgeCA8IHgwKSB7Ly8gSUlJIHF1YXJ0ZXJcbiAgICAgICAgcmV0dXJuIDE4MCArIGN1cnJlbnRBbmdsZTtcbiAgICB9IGVsc2UgaWYgKHkgPCB5MCAmJiB4IDwgeDApIHsvLyBJViBxdWFydGVyXG4gICAgICAgIHJldHVybiAzNjAgLSBjdXJyZW50QW5nbGU7XG4gICAgfSBlbHNlIHsvLyBJIHF1YXJ0ZXJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRBbmdsZTtcbiAgICB9XG59XG4iXX0=