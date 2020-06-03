import * as tslib_1 from "tslib";
var NgxTimepickerFieldComponent_1;
import { Component, EventEmitter, Inject, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxMaterialTimepickerService } from '../../services/ngx-material-timepicker.service';
import { Subject } from 'rxjs';
import { getHours, getMinutes } from '../../utils/timepicker-time.utils';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimeAdapter } from '../../services/time-adapter';
import { TIME_LOCALE } from '../../tokens/time-locale.token';
let NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = class NgxTimepickerFieldComponent {
    constructor(timepickerService, locale) {
        this.timepickerService = timepickerService;
        this.locale = locale;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this.timeChanged = new EventEmitter();
        this._format = 12;
        this.unsubscribe$ = new Subject();
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        this.minHour = this._format === 12 ? 1 : 0;
        this.maxHour = this._format === 12 ? 12 : 23;
        this.hoursList = getHours(this._format);
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.defaultTime = this.timepickerTime;
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set defaultTime(val) {
        const time = TimeAdapter.formatTime(val, { locale: this.locale, format: this._format });
        this.timepickerService.setDefaultTimeIfAvailable(time, null, null, this._format);
        this._defaultTime = time;
        this.timepickerTime = time;
        this.isDefaultTime = !!time;
    }
    get defaultTime() {
        return this._defaultTime;
    }
    ngOnInit() {
        this.period$ = this.timepickerService.selectedPeriod;
        this.hour$ = this.timepickerService.selectedHour;
        this.minute$ = this.timepickerService.selectedMinute;
        this.hoursList = getHours(this._format);
        this.minutesList = getMinutes();
    }
    writeValue(val) {
        if (val) {
            this.defaultTime = val;
        }
        else {
            this.resetTime();
        }
    }
    registerOnTouched(fn) {
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    changeHour(hour) {
        this.timepickerService.hour = this.hoursList.find(h => h.time === hour);
        this.changeTime();
    }
    changeMinute(minute) {
        this.timepickerService.minute = this.minutesList.find(m => m.time === minute);
        this.changeTime();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.changeTime();
    }
    onTimeSet(time) {
        this.defaultTime = time;
        this.emitLocalTimeChange(time);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    changeTime() {
        const time = this.timepickerService.getFullTime(this._format);
        this.timepickerTime = time;
        this.emitLocalTimeChange(time);
    }
    resetTime() {
        this.timepickerService.hour = { angle: 0, time: null };
        this.timepickerService.minute = { angle: 0, time: null };
    }
    emitLocalTimeChange(time) {
        const localTime = TimeAdapter.toLocaleTimeString(time, { format: this.format, locale: this.locale });
        this.onChange(localTime);
        this.timeChanged.emit(localTime);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxTimepickerFieldComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "toggleIcon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NgxTimepickerFieldComponent.prototype, "buttonAlign", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxTimepickerFieldComponent.prototype, "clockTheme", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxTimepickerFieldComponent.prototype, "controlOnly", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "cancelBtnTmpl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "confirmBtnTmpl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NgxTimepickerFieldComponent.prototype, "format", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], NgxTimepickerFieldComponent.prototype, "defaultTime", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxTimepickerFieldComponent.prototype, "timeChanged", void 0);
NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ngx-timepicker-field',
        template: "<div class=\"ngx-timepicker\" [ngClass]=\"{'ngx-timepicker--disabled': disabled}\">\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--first\"\n        [placeholder]=\"'HH'\"\n        [time]=\"(hour$ | async)?.time\"\n        [min]=\"minHour\"\n        [max]=\"maxHour\"\n        [timeUnit]=\"timeUnit.HOUR\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeHour($event)\"></ngx-timepicker-time-control>\n    <span class=\"ngx-timepicker__time-colon ngx-timepicker__control--second\">:</span>\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--third\"\n        [placeholder]=\"'MM'\"\n        [time]=\"(minute$ | async)?.time\"\n        [min]=\"0\"\n        [max]=\"59\"\n        [timeUnit]=\"timeUnit.MINUTE\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeMinute($event)\"></ngx-timepicker-time-control>\n    <ngx-timepicker-period-selector\n        class=\"ngx-timepicker__control--forth\"\n        [selectedPeriod]=\"period$|async\"\n        [disabled]=\"disabled\"\n        (periodSelected)=\"changePeriod($event)\"\n        *ngIf=\"format !== 24\"></ngx-timepicker-period-selector>\n    <ngx-material-timepicker-toggle\n        class=\"ngx-timepicker__toggle\"\n        *ngIf=\"!controlOnly\"\n        [ngClass]=\"{'ngx-timepicker__toggle--left': buttonAlign === 'left'}\"\n        [for]=\"timepicker\"\n        [disabled]=\"disabled\">\n        <span ngxMaterialTimepickerToggleIcon>\n            <!--suppress HtmlUnknownAttribute -->\n            <ng-container *ngTemplateOutlet=\"toggleIcon || defaultIcon\"></ng-container>\n        </span>\n    </ngx-material-timepicker-toggle>\n</div>\n<ngx-material-timepicker\n    [theme]=\"clockTheme\"\n    [defaultTime]=\"timepickerTime\"\n    [format]=\"format\"\n    [cancelBtnTmpl]=\"cancelBtnTmpl\"\n    [confirmBtnTmpl]=\"confirmBtnTmpl\"\n    (timeSet)=\"onTimeSet($event)\" #timepicker></ngx-material-timepicker>\n\n<ng-template #defaultIcon>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\">\n        <!--suppress CheckEmptyScriptTag -->\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n</ng-template>\n",
        providers: [
            NgxMaterialTimepickerService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: NgxTimepickerFieldComponent_1,
                multi: true
            }
        ],
        styles: [".ngx-timepicker{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon{margin-left:10px}.ngx-timepicker__control--first{order:1}.ngx-timepicker__control--second{order:2}.ngx-timepicker__control--third{order:3}.ngx-timepicker__control--forth,.ngx-timepicker__toggle{order:4}.ngx-timepicker__toggle--left{order:0}"]
    }),
    tslib_1.__param(1, Inject(TIME_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [NgxMaterialTimepickerService, String])
], NgxTimepickerFieldComponent);
export { NgxTimepickerFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvY29tcG9uZW50cy90aW1lcGlja2VyLWZpZWxkL25neC10aW1lcGlja2VyLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWU3RCxJQUFhLDJCQUEyQixtQ0FBeEMsTUFBYSwyQkFBMkI7SUFtRXBDLFlBQW9CLGlCQUErQyxFQUMxQixNQUFjO1FBRG5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBOEI7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTlEdkQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBTVgsZ0JBQVcsR0FBcUIsT0FBTyxDQUFDO1FBc0N2QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENB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Z0JBQ3hDLEtBQUssRUFBRSxJQUFJO2FBQ2Q7U0FDSjs7S0FDSixDQUFDO0lBcUVlLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTs2Q0FETyw0QkFBNEI7R0FuRTFELDJCQUEyQixDQThJdkM7U0E5SVksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNaW51dGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci10aW1lLnV0aWxzJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRoZW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUaW1lQWRhcHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBUSU1FX0xPQ0FMRSB9IGZyb20gJy4uLy4uL3Rva2Vucy90aW1lLWxvY2FsZS50b2tlbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXRpbWVwaWNrZXItZmllbGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGltZXBpY2tlci1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50LFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHBlcmlvZCQ6IE9ic2VydmFibGU8VGltZVBlcmlvZD47XG4gICAgaG91ciQ6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT47XG4gICAgbWludXRlJDogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPjtcblxuICAgIG1pbkhvdXIgPSAxO1xuICAgIG1heEhvdXIgPSAxMjtcblxuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG4gICAgdGltZXBpY2tlclRpbWU6IHN0cmluZztcbiAgICBpc0RlZmF1bHRUaW1lOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlSWNvbjogVGVtcGxhdGVSZWY8SFRNTE9iamVjdEVsZW1lbnQ+O1xuICAgIEBJbnB1dCgpIGJ1dHRvbkFsaWduOiAncmlnaHQnIHwgJ2xlZnQnID0gJ3JpZ2h0JztcbiAgICBASW5wdXQoKSBjbG9ja1RoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZTtcbiAgICBASW5wdXQoKSBjb250cm9sT25seTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjYW5jZWxCdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoKSBjb25maXJtQnRuVG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBmb3JtYXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZSA9PT0gMjQgPyAyNCA6IDEyO1xuICAgICAgICB0aGlzLm1pbkhvdXIgPSB0aGlzLl9mb3JtYXQgPT09IDEyID8gMSA6IDA7XG4gICAgICAgIHRoaXMubWF4SG91ciA9IHRoaXMuX2Zvcm1hdCA9PT0gMTIgPyAxMiA6IDIzO1xuICAgICAgICB0aGlzLmhvdXJzTGlzdCA9IGdldEhvdXJzKHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgIGNvbnN0IGlzRHluYW1pY2FsbHlDaGFuZ2VkID0gdmFsdWUgJiYgKHRoaXMucHJldmlvdXNGb3JtYXQgJiYgdGhpcy5wcmV2aW91c0Zvcm1hdCAhPT0gdGhpcy5fZm9ybWF0KTtcblxuICAgICAgICBpZiAoaXNEeW5hbWljYWxseUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWUgPSB0aGlzLnRpbWVwaWNrZXJUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNGb3JtYXQgPSB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1hdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZGVmYXVsdFRpbWUodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodmFsLCB7bG9jYWxlOiB0aGlzLmxvY2FsZSwgZm9ybWF0OiB0aGlzLl9mb3JtYXR9KTtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5zZXREZWZhdWx0VGltZUlmQXZhaWxhYmxlKHRpbWUsIG51bGwsIG51bGwsIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0VGltZSA9ICEhdGltZTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdFRpbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRUaW1lO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFRpbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb3JtYXQgPSAxMjtcbiAgICBwcml2YXRlIHByZXZpb3VzRm9ybWF0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGhvdXJzTGlzdDogQ2xvY2tGYWNlVGltZVtdO1xuICAgIHByaXZhdGUgbWludXRlc0xpc3Q6IENsb2NrRmFjZVRpbWVbXTtcblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZXBpY2tlclNlcnZpY2U6IE5neE1hdGVyaWFsVGltZXBpY2tlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQEluamVjdChUSU1FX0xPQ0FMRSkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBlcmlvZCQgPSB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnNlbGVjdGVkUGVyaW9kO1xuICAgICAgICB0aGlzLmhvdXIkID0gdGhpcy50aW1lcGlja2VyU2VydmljZS5zZWxlY3RlZEhvdXI7XG4gICAgICAgIHRoaXMubWludXRlJCA9IHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRNaW51dGU7XG5cbiAgICAgICAgdGhpcy5ob3Vyc0xpc3QgPSBnZXRIb3Vycyh0aGlzLl9mb3JtYXQpO1xuICAgICAgICB0aGlzLm1pbnV0ZXNMaXN0ID0gZ2V0TWludXRlcygpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGltZSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgY2hhbmdlSG91cihob3VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5ob3VyID0gdGhpcy5ob3Vyc0xpc3QuZmluZChoID0+IGgudGltZSA9PT0gaG91cik7XG4gICAgICAgIHRoaXMuY2hhbmdlVGltZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZU1pbnV0ZShtaW51dGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLm1pbnV0ZSA9IHRoaXMubWludXRlc0xpc3QuZmluZChtID0+IG0udGltZSA9PT0gbWludXRlKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGVyaW9kKHBlcmlvZDogVGltZVBlcmlvZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnBlcmlvZCA9IHBlcmlvZDtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lKCk7XG4gICAgfVxuXG4gICAgb25UaW1lU2V0KHRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5lbWl0TG9jYWxUaW1lQ2hhbmdlKHRpbWUpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaW1lKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy50aW1lcGlja2VyU2VydmljZS5nZXRGdWxsVGltZSh0aGlzLl9mb3JtYXQpO1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJUaW1lID0gdGltZTtcblxuICAgICAgICB0aGlzLmVtaXRMb2NhbFRpbWVDaGFuZ2UodGltZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFRpbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UuaG91ciA9IHthbmdsZTogMCwgdGltZTogbnVsbH07XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UubWludXRlID0ge2FuZ2xlOiAwLCB0aW1lOiBudWxsfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtaXRMb2NhbFRpbWVDaGFuZ2UodGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IFRpbWVBZGFwdGVyLnRvTG9jYWxlVGltZVN0cmluZyh0aW1lLCB7Zm9ybWF0OiB0aGlzLmZvcm1hdCwgbG9jYWxlOiB0aGlzLmxvY2FsZX0pO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UobG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQ2hhbmdlZC5lbWl0KGxvY2FsVGltZSk7XG4gICAgfVxufVxuIl19