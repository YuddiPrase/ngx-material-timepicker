import * as tslib_1 from "tslib";
/* tslint:disable:triple-equals */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { isDigit } from '../../utils/timepicker.utils';
import { TimeParserPipe } from '../../pipes/time-parser.pipe';
let NgxMaterialTimepickerDialControlComponent = class NgxMaterialTimepickerDialControlComponent {
    constructor(timeParserPipe) {
        this.timeParserPipe = timeParserPipe;
        this.timeUnitChanged = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.focused = new EventEmitter();
        this.unfocused = new EventEmitter();
    }
    get selectedTime() {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }
    }
    saveTimeAndChangeTimeUnit(event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    }
    updateTime() {
        const time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    }
    changeTimeByKeyboard(e) {
        const char = String.fromCharCode(e.keyCode);
        if ((!isDigit(e)) || isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
        if (isDigit(e)) {
            this.changeTimeByArrow(e.keyCode);
        }
    }
    onModelChange(value) {
        this.time = this.timeParserPipe.transform(value, this.timeUnit).toString();
    }
    changeTimeByArrow(keyCode) {
        const ARROW_UP = 38;
        const ARROW_DOWN = 40;
        let time;
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
export { NgxMaterialTimepickerDialControlComponent };
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    const selectedTime = timeList.find(value => value.time === +time);
    return !selectedTime || (selectedTime && selectedTime.disabled);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1kaWFsLWNvbnRyb2wvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0NBQWtDO0FBQ2xDLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFRNUQsSUFBYSx5Q0FBeUMsR0FBdEQsTUFBYSx5Q0FBeUM7SUFpQmxELFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx4QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNoRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUcvQyxDQUFDO0lBRUQsSUFBWSxZQUFZO1FBQ3BCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDtJQUNMLENB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RUFBRSxDQUFDLGNBQWMsQ0FBQzs7S0FDOUIsQ0FBQzs2Q0FrQnNDLGNBQWM7R0FqQnpDLHlDQUF5QyxDQTBFckQ7U0ExRVkseUNBQXlDO0FBNEV0RCxTQUFTLHNCQUFzQixDQUFDLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxRQUF5QjtJQUM1RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJDLElBQUksUUFBUSxFQUFFO1FBQ1YsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUNwQyxPQUFPLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1QztBQUNMLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQVksRUFBRSxRQUF5QjtJQUM5RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp0cmlwbGUtZXF1YWxzICovXG5pbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2xvY2tGYWNlVGltZX0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtUaW1lVW5pdH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7aXNEaWdpdH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci51dGlscyc7XG5pbXBvcnQge1RpbWVQYXJzZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy90aW1lLXBhcnNlci5waXBlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbVGltZVBhcnNlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlckRpYWxDb250cm9sQ29tcG9uZW50IHtcblxuICAgIHByZXZpb3VzVGltZTogbnVtYmVyIHwgc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGltZUxpc3Q6IENsb2NrRmFjZVRpbWVbXTtcbiAgICBASW5wdXQoKSB0aW1lVW5pdDogVGltZVVuaXQ7XG4gICAgQElucHV0KCkgdGltZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGlzRWRpdGFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbWludXRlc0dhcDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQE91dHB1dCgpIHRpbWVVbml0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZVVuaXQ+KCk7XG4gICAgQE91dHB1dCgpIHRpbWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuICAgIEBPdXRwdXQoKSBmb2N1c2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSB1bmZvY3VzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVQYXJzZXJQaXBlOiBUaW1lUGFyc2VyUGlwZSkge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHNlbGVjdGVkVGltZSgpOiBDbG9ja0ZhY2VUaW1lIHtcbiAgICAgICAgaWYgKCEhdGhpcy50aW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lTGlzdC5maW5kKHQgPT4gdC50aW1lID09PSArdGhpcy50aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVUaW1lQW5kQ2hhbmdlVGltZVVuaXQoZXZlbnQ6IEZvY3VzRXZlbnQsIHVuaXQ6IFRpbWVVbml0KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGhpcy50aW1lO1xuICAgICAgICB0aGlzLnRpbWVVbml0Q2hhbmdlZC5uZXh0KHVuaXQpO1xuICAgICAgICB0aGlzLmZvY3VzZWQubmV4dCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnNlbGVjdGVkVGltZTtcbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGltZUNoYW5nZWQubmV4dCh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGltZS50aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGltZUJ5S2V5Ym9hcmQoZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSk7XG5cbiAgICAgICAgaWYgKCghaXNEaWdpdChlKSkgfHwgaXNUaW1lRGlzYWJsZWRUb0NoYW5nZSh0aGlzLnRpbWUsIGNoYXIsIHRoaXMudGltZUxpc3QpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEaWdpdChlKSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaW1lQnlBcnJvdyhlLmtleUNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMudGltZVBhcnNlclBpcGUudHJhbnNmb3JtKHZhbHVlLCB0aGlzLnRpbWVVbml0KS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlVGltZUJ5QXJyb3coa2V5Q29kZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IEFSUk9XX1VQID0gMzg7XG4gICAgICAgIGNvbnN0IEFSUk9XX0RPV04gPSA0MDtcbiAgICAgICAgbGV0IHRpbWU6IHN0cmluZztcblxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gQVJST1dfVVApIHtcbiAgICAgICAgICAgIHRpbWUgPSBTdHJpbmcoK3RoaXMudGltZSArICh0aGlzLm1pbnV0ZXNHYXAgfHwgMSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEFSUk9XX0RPV04pIHtcbiAgICAgICAgICAgIHRpbWUgPSBTdHJpbmcoK3RoaXMudGltZSAtICh0aGlzLm1pbnV0ZXNHYXAgfHwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RpbWVVbmF2YWlsYWJsZSh0aW1lLCB0aGlzLnRpbWVMaXN0KSkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGlzVGltZURpc2FibGVkVG9DaGFuZ2UoY3VycmVudFRpbWU6IHN0cmluZywgbmV4dFRpbWU6IHN0cmluZywgdGltZUxpc3Q6IENsb2NrRmFjZVRpbWVbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzTnVtYmVyID0gL1xcZC8udGVzdChuZXh0VGltZSk7XG5cbiAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lICsgbmV4dFRpbWU7XG4gICAgICAgIHJldHVybiBpc1RpbWVVbmF2YWlsYWJsZSh0aW1lLCB0aW1lTGlzdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1RpbWVVbmF2YWlsYWJsZSh0aW1lOiBzdHJpbmcsIHRpbWVMaXN0OiBDbG9ja0ZhY2VUaW1lW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBzZWxlY3RlZFRpbWUgPSB0aW1lTGlzdC5maW5kKHZhbHVlID0+IHZhbHVlLnRpbWUgPT09ICt0aW1lKTtcbiAgICByZXR1cm4gIXNlbGVjdGVkVGltZSB8fCAoc2VsZWN0ZWRUaW1lICYmIHNlbGVjdGVkVGltZS5kaXNhYmxlZCk7XG59XG4iXX0=