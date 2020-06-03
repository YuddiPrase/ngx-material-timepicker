import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isDigit } from '../../../utils/timepicker.utils';
import { TimeUnit } from '../../../models/time-unit.enum';
import { TimeParserPipe } from '../../../pipes/time-parser.pipe';
let NgxTimepickerTimeControlComponent = class NgxTimepickerTimeControlComponent {
    constructor(timeParser) {
        this.timeParser = timeParser;
        this.timeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        const timeChanges = changes['time'];
        const isTimeNotProvided = timeChanges && timeChanges.isFirstChange() && !this.isDefaultTimeSet;
        if (isTimeNotProvided) {
            this.time = null;
        }
    }
    changeTime(event) {
        if (!isDigit(event)) {
            event.preventDefault();
        }
        const char = String.fromCharCode(event.keyCode);
        const time = concatTime(String(this.time), char);
        this.changeTimeIfValid(time);
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
    }
    increase() {
        if (!this.disabled) {
            let nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            this.timeChanged.emit(nextTime);
        }
    }
    decrease() {
        if (!this.disabled) {
            let previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            this.timeChanged.emit(previousTime);
        }
    }
    onFocus() {
        this.isFocused = true;
        this.previousTime = this.time;
    }
    onBlur() {
        this.isFocused = false;
        if (this.previousTime !== this.time) {
            this.changeTimeIfValid(+this.time);
        }
    }
    onModelChange(value) {
        this.time = +this.timeParser.transform(value, this.timeUnit);
    }
    changeTimeIfValid(value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                const timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
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
export { NgxTimepickerTimeControlComponent };
function concatTime(currentTime, nextTime) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return +time;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItdGltZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC90aW1lcGlja2VyLXRpbWUtY29udHJvbC9uZ3gtdGltZXBpY2tlci10aW1lLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVVqRSxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQWdCMUMsWUFBb0IsVUFBMEI7UUFBMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFOcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT25ELENBQUM7SUFHRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0saUJBQWlCLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUUvRixJQUFJLGlCQUFpQixFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFD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QUU7OzhEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7OzhEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7O3NFQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7bUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzttRUFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7OzJFQUEyQjtBQUV6QjtJQUFULE1BQU0sRUFBRTs7c0VBQTBDO0FBVjFDLGlDQUFpQztJQVI3QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLGs2QkFBMkQ7UUFFM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDOztLQUM5QixDQUFDOzZDQWtCa0MsY0FBYztHQWhCckMsaUNBQWlDLENBeUc3QztTQXpHWSxpQ0FBaUM7QUEyRzlDLFNBQVMsVUFBVSxDQUFDLFdBQW1CLEVBQUUsUUFBZ0I7SUFDckQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVyQyxJQUFJLFFBQVEsRUFBRTtRQUNWLE1BQU0sSUFBSSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQztLQUNoQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNEaWdpdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpbWVwaWNrZXIudXRpbHMnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgVGltZVBhcnNlclBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy90aW1lLXBhcnNlci5waXBlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdGltZXBpY2tlci10aW1lLWNvbnRyb2wnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGltZXBpY2tlci10aW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC10aW1lcGlja2VyLXRpbWUtY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1RpbWVQYXJzZXJQaXBlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRpbWVwaWNrZXJUaW1lQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSB0aW1lOiBudW1iZXI7XG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gICAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aW1lVW5pdDogVGltZVVuaXQ7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaXNEZWZhdWx0VGltZVNldDogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgaXNGb2N1c2VkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBwcmV2aW91c1RpbWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVBhcnNlcjogVGltZVBhcnNlclBpcGUpIHtcbiAgICB9XG5cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGltZUNoYW5nZXMgPSBjaGFuZ2VzWyd0aW1lJ107XG4gICAgICAgIGNvbnN0IGlzVGltZU5vdFByb3ZpZGVkID0gdGltZUNoYW5nZXMgJiYgdGltZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpICYmICF0aGlzLmlzRGVmYXVsdFRpbWVTZXQ7XG5cbiAgICAgICAgaWYgKGlzVGltZU5vdFByb3ZpZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGltZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICghaXNEaWdpdChldmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBjb25jYXRUaW1lKFN0cmluZyh0aGlzLnRpbWUpLCBjaGFyKTtcblxuICAgICAgICB0aGlzLmNoYW5nZVRpbWVJZlZhbGlkKHRpbWUpO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlYXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGxldCBuZXh0VGltZSA9ICt0aGlzLnRpbWUgKyAxO1xuXG4gICAgICAgICAgICBpZiAobmV4dFRpbWUgPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgIG5leHRUaW1lID0gdGhpcy5taW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGltZUNoYW5nZWQuZW1pdChuZXh0VGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNyZWFzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNUaW1lID0gK3RoaXMudGltZSAtIDE7XG5cbiAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbWUgPCB0aGlzLm1pbikge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IHRoaXMubWF4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpbWVDaGFuZ2VkLmVtaXQocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLnRpbWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzVGltZSAhPT0gdGhpcy50aW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRpbWVJZlZhbGlkKCt0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZSA9ICt0aGlzLnRpbWVQYXJzZXIudHJhbnNmb3JtKHZhbHVlLCB0aGlzLnRpbWVVbml0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVRpbWVJZlZhbGlkKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSArdGltZVN0cmluZ1t0aW1lU3RyaW5nLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlZC5lbWl0KHRoaXMudGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbmNhdFRpbWUoY3VycmVudFRpbWU6IHN0cmluZywgbmV4dFRpbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSAvXFxkLy50ZXN0KG5leHRUaW1lKTtcblxuICAgIGlmIChpc051bWJlcikge1xuICAgICAgICBjb25zdCB0aW1lID0gY3VycmVudFRpbWUgKyBuZXh0VGltZTtcbiAgICAgICAgcmV0dXJuICt0aW1lO1xuICAgIH1cbn1cblxuIl19