import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { NgxMaterialTimepickerComponent } from '../ngx-material-timepicker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeAdapter } from '../services/time-adapter';
import { TIME_LOCALE } from '../tokens/time-locale.token';
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line
    useExisting: forwardRef(() => TimepickerDirective),
    multi: true
};
let TimepickerDirective = class TimepickerDirective {
    constructor(elementRef, locale) {
        this.elementRef = elementRef;
        this.locale = locale;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = () => {
        };
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.value = this._value;
            this._timepicker.updateTime(this._value);
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set min(value) {
        if (typeof value === 'string') {
            this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._min = value;
    }
    get min() {
        return this._min;
    }
    set max(value) {
        if (typeof value === 'string') {
            this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get max() {
        return this._max;
    }
    set timepicker(picker) {
        this.registerTimepicker(picker);
    }
    set value(value) {
        if (!value) {
            this._value = '';
            this.updateInputValue();
            return;
        }
        const time = TimeAdapter.formatTime(value, { locale: this.locale, format: this.format });
        const isAvailable = TimeAdapter.isTimeAvailable(time, this._min, this._max, 'minutes', this._timepicker.minutesGap, this._format);
        if (isAvailable) {
            this._value = time;
            this.updateInputValue();
            return;
        }
        console.warn('Selected time doesn\'t match min or max value');
    }
    get value() {
        if (!this._value) {
            return '';
        }
        return TimeAdapter.toLocaleTimeString(this._value, { format: this.format, locale: this.locale });
    }
    get element() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    set defaultTime(time) {
        this._timepicker.defaultTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
    }
    updateValue(value) {
        this.value = value;
        this.onChange(value);
    }
    ngOnChanges(changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    }
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }
    writeValue(value) {
        this.value = value;
        if (value) {
            this.defaultTime = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnDestroy() {
        this.timepickerSubscriptions.forEach(s => s.unsubscribe());
    }
    registerTimepicker(picker) {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe((time) => {
                this.value = time;
                this.onChange(this.value);
                this.onTouched();
            }));
            this.timepickerSubscriptions.push(this._timepicker.closed.subscribe(() => this.defaultTime = this._value));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    }
    updateInputValue() {
        this.elementRef.nativeElement.value = this.value;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], TimepickerDirective.prototype, "format", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TimepickerDirective.prototype, "min", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TimepickerDirective.prototype, "max", null);
tslib_1.__decorate([
    Input('ngxTimepicker'),
    tslib_1.__metadata("design:type", NgxMaterialTimepickerComponent),
    tslib_1.__metadata("design:paramtypes", [NgxMaterialTimepickerComponent])
], TimepickerDirective.prototype, "timepicker", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], TimepickerDirective.prototype, "value", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], TimepickerDirective.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], TimepickerDirective.prototype, "disableClick", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TimepickerDirective.prototype, "onClick", null);
TimepickerDirective = tslib_1.__decorate([
    Directive({
        selector: '[ngxTimepicker]',
        providers: [VALUE_ACCESSOR],
        host: {
            '[disabled]': 'disabled',
            '(change)': 'updateValue($event.target.value)',
            '(blur)': 'onTouched()',
        },
    }),
    tslib_1.__param(1, Inject(TIME_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [ElementRef, String])
], TimepickerDirective);
export { TimepickerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvZGlyZWN0aXZlcy9uZ3gtdGltZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsTUFBTSxjQUFjLEdBQUc7SUFDbkIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFXRixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQXVHNUIsWUFBb0IsVUFBc0IsRUFDRCxNQUFjO1FBRG5DLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEYvQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBdUViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFLWiw0QkFBdUIsR0FBbUIsRUFBRSxDQUFDO1FBR3JELGNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDakIsQ0FBQyxDQUFBO1FBRU8sYUFBUSxHQUF5QixHQUFHLEVBQUU7UUFDOUMsQ0FBQyxDQUFBO0lBSUQsQ0FBQztJ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U0FDaEY7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdEO2dCQUM1RCx3RUFBd0UsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyRCxDQUFDO0NBRUosQ0FBQTtBQS9LRztJQURDLEtBQUssRUFBRTs7O2lEQVVQO0FBU0Q7SUFEQyxLQUFLLEVBQUU7Ozs4Q0FPUDtBQVNEO0lBREMsS0FBSyxFQUFFOzs7OENBT1A7QUFTRDtJQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7c0NBQ0EsOEJBQThCOzZDQUE5Qiw4QkFBOEI7cURBRXBEO0FBS0Q7SUFEQyxLQUFLLEVBQUU7OztnREF1QlA7QUFXUTtJQUFSLEtBQUssRUFBRTs7cURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzt5REFBdUI7QUFtQy9CO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2tEQU1qQztBQXBJUSxtQkFBbUI7SUFUL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDM0IsSUFBSSxFQUFFO1lBQ0YsWUFBWSxFQUFFLFVBQVU7WUFDeEIsVUFBVSxFQUFFLGtDQUFrQztZQUM5QyxRQUFRLEVBQUUsYUFBYTtTQUMxQjtLQUNKLENBQUM7SUF5R2UsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQURBLFVBQVU7R0F2R2pDLG1CQUFtQixDQWtML0I7U0FsTFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaW1lQWRhcHRlciB9IGZyb20gJy4uL3NlcnZpY2VzL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcbmltcG9ydCB7IFRJTUVfTE9DQUxFIH0gZnJvbSAnLi4vdG9rZW5zL3RpbWUtbG9jYWxlLnRva2VuJztcblxuY29uc3QgVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZXBpY2tlckRpcmVjdGl2ZSksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFRpbWVwaWNrZXJdJyxcbiAgICBwcm92aWRlcnM6IFtWQUxVRV9BQ0NFU1NPUl0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgICAgICcoY2hhbmdlKSc6ICd1cGRhdGVWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgZm9ybWF0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUgPT09IDI0ID8gMjQgOiAxMjtcbiAgICAgICAgY29uc3QgaXNEeW5hbWljYWxseUNoYW5nZWQgPSB2YWx1ZSAmJiAodGhpcy5wcmV2aW91c0Zvcm1hdCAmJiB0aGlzLnByZXZpb3VzRm9ybWF0ICE9PSB0aGlzLl9mb3JtYXQpO1xuXG4gICAgICAgIGlmIChpc0R5bmFtaWNhbGx5Q2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fdGltZXBpY2tlci51cGRhdGVUaW1lKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzRm9ybWF0ID0gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGdldCBmb3JtYXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mb3JtYXQgPSAxMjtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG1pbih2YWx1ZTogc3RyaW5nIHwgRGF0ZVRpbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuX21pbiA9IFRpbWVBZGFwdGVyLnBhcnNlVGltZSh2YWx1ZSwge2xvY2FsZTogdGhpcy5sb2NhbGUsIGZvcm1hdDogdGhpcy5mb3JtYXR9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbWluKCk6IHN0cmluZyB8IERhdGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW46IHN0cmluZyB8IERhdGVUaW1lO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbWF4KHZhbHVlOiBzdHJpbmcgfCBEYXRlVGltZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fbWF4ID0gVGltZUFkYXB0ZXIucGFyc2VUaW1lKHZhbHVlLCB7bG9jYWxlOiB0aGlzLmxvY2FsZSwgZm9ybWF0OiB0aGlzLmZvcm1hdH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBtYXgoKTogc3RyaW5nIHwgRGF0ZVRpbWUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cblxuICAgIHByaXZhdGUgX21heDogc3RyaW5nIHwgRGF0ZVRpbWU7XG5cbiAgICBASW5wdXQoJ25neFRpbWVwaWNrZXInKVxuICAgIHNldCB0aW1lcGlja2VyKHBpY2tlcjogTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJUaW1lcGlja2VyKHBpY2tlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdGltZXBpY2tlcjogTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodmFsdWUsIHtsb2NhbGU6IHRoaXMubG9jYWxlLCBmb3JtYXQ6IHRoaXMuZm9ybWF0fSk7XG4gICAgICAgIGNvbnN0IGlzQXZhaWxhYmxlID0gVGltZUFkYXB0ZXIuaXNUaW1lQXZhaWxhYmxlKFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIDxEYXRlVGltZT50aGlzLl9taW4sXG4gICAgICAgICAgICA8RGF0ZVRpbWU+dGhpcy5fbWF4LFxuICAgICAgICAgICAgJ21pbnV0ZXMnLFxuICAgICAgICAgICAgdGhpcy5fdGltZXBpY2tlci5taW51dGVzR2FwLFxuICAgICAgICAgICAgdGhpcy5fZm9ybWF0XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdGVkIHRpbWUgZG9lc25cXCd0IG1hdGNoIG1pbiBvciBtYXggdmFsdWUnKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUaW1lQWRhcHRlci50b0xvY2FsZVRpbWVTdHJpbmcodGhpcy5fdmFsdWUsIHtmb3JtYXQ6IHRoaXMuZm9ybWF0LCBsb2NhbGU6IHRoaXMubG9jYWxlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsdWUgPSAnJztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGRpc2FibGVDbGljazogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgdGltZXBpY2tlclN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBwcmV2aW91c0Zvcm1hdDogbnVtYmVyO1xuXG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBASW5qZWN0KFRJTUVfTE9DQUxFKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgZ2V0IGVsZW1lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldCBkZWZhdWx0VGltZSh0aW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGltZXBpY2tlci5kZWZhdWx0VGltZSA9IFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodGltZSwge2xvY2FsZTogdGhpcy5sb2NhbGUsIGZvcm1hdDogdGhpcy5mb3JtYXR9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1sndmFsdWUnXSAmJiBjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGltZSA9IGNoYW5nZXNbJ3ZhbHVlJ10uY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5fdGltZXBpY2tlci5vcGVuKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGltZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJUaW1lcGlja2VyKHBpY2tlcjogTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChwaWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXIgPSBwaWNrZXI7XG4gICAgICAgICAgICB0aGlzLl90aW1lcGlja2VyLnJlZ2lzdGVySW5wdXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRpbWVwaWNrZXJTdWJzY3JpcHRpb25zLnB1c2godGhpcy5fdGltZXBpY2tlci50aW1lU2V0LnN1YnNjcmliZSgodGltZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRpbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy50aW1lcGlja2VyU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXIuY2xvc2VkLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRlZmF1bHRUaW1lID0gdGhpcy5fdmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50IGlzIG5vdCBkZWZpbmVkLicgK1xuICAgICAgICAgICAgICAgICcgUGxlYXNlIG1ha2Ugc3VyZSB5b3UgcGFzc2VkIHRoZSB0aW1lcGlja2VyIHRvIG5neFRpbWVwaWNrZXIgZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUlucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbn1cblxuIl19