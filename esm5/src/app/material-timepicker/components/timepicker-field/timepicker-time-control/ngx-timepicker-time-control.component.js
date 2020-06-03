import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isDigit } from '../../../utils/timepicker.utils';
import { TimeUnit } from '../../../models/time-unit.enum';
import { TimeParserPipe } from '../../../pipes/time-parser.pipe';
var NgxTimepickerTimeControlComponent = /** @class */ (function () {
    function NgxTimepickerTimeControlComponent(timeParser) {
        this.timeParser = timeParser;
        this.timeChanged = new EventEmitter();
    }
    NgxTimepickerTimeControlComponent.prototype.ngOnChanges = function (changes) {
        var timeChanges = changes['time'];
        var isTimeNotProvided = timeChanges && timeChanges.isFirstChange() && !this.isDefaultTimeSet;
        if (isTimeNotProvided) {
            this.time = null;
        }
    };
    NgxTimepickerTimeControlComponent.prototype.changeTime = function (event) {
        if (!isDigit(event)) {
            event.preventDefault();
        }
        var char = String.fromCharCode(event.keyCode);
        var time = concatTime(String(this.time), char);
        this.changeTimeIfValid(time);
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
    };
    NgxTimepickerTimeControlComponent.prototype.increase = function () {
        if (!this.disabled) {
            var nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            this.timeChanged.emit(nextTime);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.decrease = function () {
        if (!this.disabled) {
            var previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            this.timeChanged.emit(previousTime);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onFocus = function () {
        this.isFocused = true;
        this.previousTime = this.time;
    };
    NgxTimepickerTimeControlComponent.prototype.onBlur = function () {
        this.isFocused = false;
        if (this.previousTime !== this.time) {
            this.changeTimeIfValid(+this.time);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onModelChange = function (value) {
        this.time = +this.timeParser.transform(value, this.timeUnit);
    };
    NgxTimepickerTimeControlComponent.prototype.changeTimeIfValid = function (value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                var timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "time", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "min", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "max", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxTimepickerTimeControlComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxTimepickerTimeControlComponent.prototype, "timeUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NgxTimepickerTimeControlComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NgxTimepickerTimeControlComponent.prototype, "isDefaultTimeSet", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxTimepickerTimeControlComponent.prototype, "timeChanged", void 0);
    NgxTimepickerTimeControlComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-timepicker-time-control',
            template: "<div class=\"ngx-timepicker-control\" [ngClass]=\"{'ngx-timepicker-control--active': isFocused}\">\n    <!--suppress HtmlFormInputWithoutLabel -->\n    <input class=\"ngx-timepicker-control__input\"\n           maxlength=\"2\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [placeholder]=\"placeholder\"\n           [disabled]=\"disabled\"\n           (keypress)=\"changeTime($event)\"\n           (focus)=\"onFocus()\"\n           (blur)=\"onBlur()\">\n    <div class=\"ngx-timepicker-control__arrows\">\n            <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"increase()\">\n                &#9650;\n            </span>\n        <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"decrease()\">\n                &#9660;\n            </span>\n    </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [TimeParserPipe],
            styles: [".ngx-timepicker-control{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input:disabled{background-color:transparent}.ngx-timepicker-control__arrows{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow:hover{color:rgba(0,0,0,.9)}"]
        }),
        tslib_1.__metadata("design:paramtypes", [TimeParserPipe])
    ], NgxTimepickerTimeControlComponent);
    return NgxTimepickerTimeControlComponent;
}());
export { NgxTimepickerTimeControlComponent };
function concatTime(currentTime, nextTime) {
    var isNumber = /\d/.test(nextTime);
    if (isNumber) {
        var time = currentTime + nextTime;
        return +time;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItdGltZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC90aW1lcGlja2VyLXRpbWUtY29udHJvbC9uZ3gtdGltZXBpY2tlci10aW1lLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVVqRTtJQWdCSSwyQ0FBb0IsVUFBMEI7UUFBMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFOcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT25ELENBQUM7SUFHRCx1REFBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQU0saUJBQWlCLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUUvRixJQUFJLGlCQUFpQixFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELHNEQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsS0FBSyxDQUFDLGNBQWMs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UixLQUFLLEVBQUU7O2tFQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7O2tFQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7OzBFQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7dUVBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzt1RUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7OytFQUEyQjtJQUV6QjtRQUFULE1BQU0sRUFBRTs7MEVBQTBDO0lBVjFDLGlDQUFpQztRQVI3QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLGs2QkFBMkQ7WUFFM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDOztTQUM5QixDQUFDO2lEQWtCa0MsY0FBYztPQWhCckMsaUNBQWlDLENBeUc3QztJQUFELHdDQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F6R1ksaUNBQWlDO0FBMkc5QyxTQUFTLFVBQVUsQ0FBQyxXQUFtQixFQUFFLFFBQWdCO0lBQ3JELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFckMsSUFBSSxRQUFRLEVBQUU7UUFDVixJQUFNLElBQUksR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDaEI7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzRGlnaXQgfSBmcm9tICcuLi8uLi8uLi91dGlscy90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IFRpbWVQYXJzZXJQaXBlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvdGltZS1wYXJzZXIucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXRpbWVwaWNrZXItdGltZS1jb250cm9sJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRpbWVwaWNrZXItdGltZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtdGltZXBpY2tlci10aW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtUaW1lUGFyc2VyUGlwZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hUaW1lcGlja2VyVGltZUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgdGltZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGltZVVuaXQ6IFRpbWVVbml0O1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGlzRGVmYXVsdFRpbWVTZXQ6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgdGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIGlzRm9jdXNlZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcHJldmlvdXNUaW1lOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVQYXJzZXI6IFRpbWVQYXJzZXJQaXBlKSB7XG4gICAgfVxuXG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRpbWVDaGFuZ2VzID0gY2hhbmdlc1sndGltZSddO1xuICAgICAgICBjb25zdCBpc1RpbWVOb3RQcm92aWRlZCA9IHRpbWVDaGFuZ2VzICYmIHRpbWVDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSAmJiAhdGhpcy5pc0RlZmF1bHRUaW1lU2V0O1xuXG4gICAgICAgIGlmIChpc1RpbWVOb3RQcm92aWRlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRpbWUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIWlzRGlnaXQoZXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgICAgICBjb25zdCB0aW1lID0gY29uY2F0VGltZShTdHJpbmcodGhpcy50aW1lKSwgY2hhcik7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lSWZWYWxpZCh0aW1lKTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZWFzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JlYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZWFzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFRpbWUgPSArdGhpcy50aW1lICsgMTtcblxuICAgICAgICAgICAgaWYgKG5leHRUaW1lID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICBuZXh0VGltZSA9IHRoaXMubWluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpbWVDaGFuZ2VkLmVtaXQobmV4dFRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVhc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzVGltZSA9ICt0aGlzLnRpbWUgLSAxO1xuXG4gICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSB0aGlzLm1heDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlZC5lbWl0KHByZXZpb3VzVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGhpcy50aW1lO1xuICAgIH1cblxuICAgIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c1RpbWUgIT09IHRoaXMudGltZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaW1lSWZWYWxpZCgrdGhpcy50aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWUgPSArdGhpcy50aW1lUGFyc2VyLnRyYW5zZm9ybSh2YWx1ZSwgdGhpcy50aW1lVW5pdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaW1lSWZWYWxpZCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudGltZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gK3RpbWVTdHJpbmdbdGltZVN0cmluZy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMubWluKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5taW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGltZUNoYW5nZWQuZW1pdCh0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXRUaW1lKGN1cnJlbnRUaW1lOiBzdHJpbmcsIG5leHRUaW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGlzTnVtYmVyID0gL1xcZC8udGVzdChuZXh0VGltZSk7XG5cbiAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lICsgbmV4dFRpbWU7XG4gICAgICAgIHJldHVybiArdGltZTtcbiAgICB9XG59XG5cbiJdfQ==