import * as tslib_1 from "tslib";
/* tslint:disable:triple-equals */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { isDigit } from '../../utils/timepicker.utils';
import { TimeParserPipe } from '../../pipes/time-parser.pipe';
var NgxMaterialTimepickerDialControlComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialControlComponent(timeParserPipe) {
        this.timeParserPipe = timeParserPipe;
        this.timeUnitChanged = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.focused = new EventEmitter();
        this.unfocused = new EventEmitter();
    }
    Object.defineProperty(NgxMaterialTimepickerDialControlComponent.prototype, "selectedTime", {
        get: function () {
            var _this = this;
            if (!!this.time) {
                return this.timeList.find(function (t) { return t.time === +_this.time; });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerDialControlComponent.prototype.saveTimeAndChangeTimeUnit = function (event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    };
    NgxMaterialTimepickerDialControlComponent.prototype.updateTime = function () {
        var time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.changeTimeByKeyboard = function (e) {
        var char = String.fromCharCode(e.keyCode);
        if ((!isDigit(e)) || isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
        if (isDigit(e)) {
            this.changeTimeByArrow(e.keyCode);
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.onModelChange = function (value) {
        this.time = this.timeParserPipe.transform(value, this.timeUnit).toString();
    };
    NgxMaterialTimepickerDialControlComponent.prototype.changeTimeByArrow = function (keyCode) {
        var ARROW_UP = 38;
        var ARROW_DOWN = 40;
        var time;
        if (keyCode === ARROW_UP) {
            time = String(+this.time + (this.minutesGap || 1));
        }
        else if (keyCode === ARROW_DOWN) {
            time = String(+this.time - (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeList", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "time", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isActive", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "minutesGap", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnitChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeChanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "focused", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerDialControlComponent.prototype, "unfocused", void 0);
    NgxMaterialTimepickerDialControlComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-dial-control',
            template: "<!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n<input class=\"timepicker-dial__control timepicker-dial__item\"\n       [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n       [ngModel]=\"time | timeLocalizer: timeUnit\"\n       (ngModelChange)=\"time = $event\"\n       [disabled]=\"disabled\"\n       (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n       readonly [timepickerAutofocus]=\"isActive\"\n       *ngIf=\"!isEditable;else editableTemplate\">\n\n<ng-template #editableTemplate>\n    <!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n    <input class=\"timepicker-dial__control timepicker-dial__item timepicker-dial__control_editable\"\n           [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [disabled]=\"disabled\"\n           (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n           [timepickerAutofocus]=\"isActive\" (keypress)=\"changeTimeByKeyboard($event)\">\n</ng-template>\n",
            providers: [TimeParserPipe],
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:right}.timepicker-dial__control_editable:focus{color:#00bfff;background-color:#fff;outline:#00bfff}@supports (color:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{color:var(--dial-editable-active-color)}}@supports (background-color:var(--dial-editable-background-color)){.timepicker-dial__control_editable:focus{background-color:var(--dial-editable-background-color)}}@supports (outline:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{outline:var(--dial-editable-active-color)}}.timepicker-dial__control:disabled{cursor:default}"]
        }),
        tslib_1.__metadata("design:paramtypes", [TimeParserPipe])
    ], NgxMaterialTimepickerDialControlComponent);
    return NgxMaterialTimepickerDialControlComponent;
}());
export { NgxMaterialTimepickerDialControlComponent };
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    var isNumber = /\d/.test(nextTime);
    if (isNumber) {
        var time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    var selectedTime = timeList.find(function (value) { return value.time === +time; });
    return !selectedTime || (selectedTime && selectedTime.disabled);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1kaWFsLWNvbnRyb2wvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0NBQWtDO0FBQ2xDLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFRNUQ7SUFpQkksbURBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx4QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNoRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUcvQyxDQUFDO0lBRUQsc0JBQVksbUVBQVk7YUFBeEI7WUFBQSxpQkFJQztZQUhHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDekQ7UUFDTCxD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Q0FBc0M7WUFDaEQsZ3FDQUFrRTtZQUVsRSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7O1NBQzlCLENBQUM7aURBa0JzQyxjQUFjO09BakJ6Qyx5Q0FBeUMsQ0EwRXJEO0lBQUQsZ0RBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFFWSx5Q0FBeUM7QUE0RXRELFNBQVMsc0JBQXNCLENBQUMsV0FBbUIsRUFBRSxRQUFnQixFQUFFLFFBQXlCO0lBQzVGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFckMsSUFBSSxRQUFRLEVBQUU7UUFDVixJQUFNLElBQUksR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzVDO0FBQ0wsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLFFBQXlCO0lBQzlELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDbEUsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOnRyaXBsZS1lcXVhbHMgKi9cbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG9ja0ZhY2VUaW1lfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQge1RpbWVVbml0fSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHtpc0RpZ2l0fSBmcm9tICcuLi8uLi91dGlscy90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7VGltZVBhcnNlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3RpbWUtcGFyc2VyLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLWRpYWwtY29udHJvbCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtUaW1lUGFyc2VyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRGlhbENvbnRyb2xDb21wb25lbnQge1xuXG4gICAgcHJldmlvdXNUaW1lOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aW1lTGlzdDogQ2xvY2tGYWNlVGltZVtdO1xuICAgIEBJbnB1dCgpIHRpbWVVbml0OiBUaW1lVW5pdDtcbiAgICBASW5wdXQoKSB0aW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaXNFZGl0YWJsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBtaW51dGVzR2FwOiBudW1iZXI7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgdGltZVVuaXRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUaW1lVW5pdD4oKTtcbiAgICBAT3V0cHV0KCkgdGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENsb2NrRmFjZVRpbWU+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHVuZm9jdXNlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVBhcnNlclBpcGU6IFRpbWVQYXJzZXJQaXBlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRUaW1lKCk6IENsb2NrRmFjZVRpbWUge1xuICAgICAgICBpZiAoISF0aGlzLnRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVMaXN0LmZpbmQodCA9PiB0LnRpbWUgPT09ICt0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVRpbWVBbmRDaGFuZ2VUaW1lVW5pdChldmVudDogRm9jdXNFdmVudCwgdW5pdDogVGltZVVuaXQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZVVuaXRDaGFuZ2VkLm5leHQodW5pdCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZC5uZXh0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGltZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuc2VsZWN0ZWRUaW1lO1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlZC5uZXh0KHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aW1lLnRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUaW1lQnlLZXlib2FyZChlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcblxuICAgICAgICBpZiAoKCFpc0RpZ2l0KGUpKSB8fCBpc1RpbWVEaXNhYmxlZFRvQ2hhbmdlKHRoaXMudGltZSwgY2hhciwgdGhpcy50aW1lTGlzdCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RpZ2l0KGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRpbWVCeUFycm93KGUua2V5Q29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy50aW1lUGFyc2VyUGlwZS50cmFuc2Zvcm0odmFsdWUsIHRoaXMudGltZVVuaXQpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaW1lQnlBcnJvdyhrZXlDb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgQVJST1dfVVAgPSAzODtcbiAgICAgICAgY29uc3QgQVJST1dfRE9XTiA9IDQwO1xuICAgICAgICBsZXQgdGltZTogc3RyaW5nO1xuXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBBUlJPV19VUCkge1xuICAgICAgICAgICAgdGltZSA9IFN0cmluZygrdGhpcy50aW1lICsgKHRoaXMubWludXRlc0dhcCB8fCAxKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQVJST1dfRE9XTikge1xuICAgICAgICAgICAgdGltZSA9IFN0cmluZygrdGhpcy50aW1lIC0gKHRoaXMubWludXRlc0dhcCB8fCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVGltZVVuYXZhaWxhYmxlKHRpbWUsIHRoaXMudGltZUxpc3QpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaXNUaW1lRGlzYWJsZWRUb0NoYW5nZShjdXJyZW50VGltZTogc3RyaW5nLCBuZXh0VGltZTogc3RyaW5nLCB0aW1lTGlzdDogQ2xvY2tGYWNlVGltZVtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSAvXFxkLy50ZXN0KG5leHRUaW1lKTtcblxuICAgIGlmIChpc051bWJlcikge1xuICAgICAgICBjb25zdCB0aW1lID0gY3VycmVudFRpbWUgKyBuZXh0VGltZTtcbiAgICAgICAgcmV0dXJuIGlzVGltZVVuYXZhaWxhYmxlKHRpbWUsIHRpbWVMaXN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzVGltZVVuYXZhaWxhYmxlKHRpbWU6IHN0cmluZywgdGltZUxpc3Q6IENsb2NrRmFjZVRpbWVbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVGltZSA9IHRpbWVMaXN0LmZpbmQodmFsdWUgPT4gdmFsdWUudGltZSA9PT0gK3RpbWUpO1xuICAgIHJldHVybiAhc2VsZWN0ZWRUaW1lIHx8IChzZWxlY3RlZFRpbWUgJiYgc2VsZWN0ZWRUaW1lLmRpc2FibGVkKTtcbn1cbiJdfQ==