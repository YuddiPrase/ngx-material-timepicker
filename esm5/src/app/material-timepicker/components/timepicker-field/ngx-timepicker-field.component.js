import * as tslib_1 from "tslib";
import { Component, EventEmitter, Inject, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxMaterialTimepickerService } from '../../services/ngx-material-timepicker.service';
import { Subject } from 'rxjs';
import { getHours, getMinutes } from '../../utils/timepicker-time.utils';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimeAdapter } from '../../services/time-adapter';
import { TIME_LOCALE } from '../../tokens/time-locale.token';
var NgxTimepickerFieldComponent = /** @class */ (function () {
    function NgxTimepickerFieldComponent(timepickerService, locale) {
        this.timepickerService = timepickerService;
        this.locale = locale;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this.timeChanged = new EventEmitter();
        this._format = 12;
        this.unsubscribe$ = new Subject();
        this.onChange = function () {
        };
    }
    NgxTimepickerFieldComponent_1 = NgxTimepickerFieldComponent;
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
            this.minHour = this._format === 12 ? 1 : 0;
            this.maxHour = this._format === 12 ? 12 : 23;
            this.hoursList = getHours(this._format);
            var isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
            if (isDynamicallyChanged) {
                this.defaultTime = this.timepickerTime;
            }
            this.previousFormat = this._format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "defaultTime", {
        get: function () {
            return this._defaultTime;
        },
        set: function (val) {
            var time = TimeAdapter.formatTime(val, { locale: this.locale, format: this._format });
            this.timepickerService.setDefaultTimeIfAvailable(time, null, null, this._format);
            this._defaultTime = time;
            this.timepickerTime = time;
            this.isDefaultTime = !!time;
        },
        enumerable: true,
        configurable: true
    });
    NgxTimepickerFieldComponent.prototype.ngOnInit = function () {
        this.period$ = this.timepickerService.selectedPeriod;
        this.hour$ = this.timepickerService.selectedHour;
        this.minute$ = this.timepickerService.selectedMinute;
        this.hoursList = getHours(this._format);
        this.minutesList = getMinutes();
    };
    NgxTimepickerFieldComponent.prototype.writeValue = function (val) {
        if (val) {
            this.defaultTime = val;
        }
        else {
            this.resetTime();
        }
    };
    NgxTimepickerFieldComponent.prototype.registerOnTouched = function (fn) {
    };
    NgxTimepickerFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgxTimepickerFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgxTimepickerFieldComponent.prototype.changeHour = function (hour) {
        this.timepickerService.hour = this.hoursList.find(function (h) { return h.time === hour; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changeMinute = function (minute) {
        this.timepickerService.minute = this.minutesList.find(function (m) { return m.time === minute; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changePeriod = function (period) {
        this.timepickerService.period = period;
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.onTimeSet = function (time) {
        this.defaultTime = time;
        this.emitLocalTimeChange(time);
    };
    NgxTimepickerFieldComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NgxTimepickerFieldComponent.prototype.changeTime = function () {
        var time = this.timepickerService.getFullTime(this._format);
        this.timepickerTime = time;
        this.emitLocalTimeChange(time);
    };
    NgxTimepickerFieldComponent.prototype.resetTime = function () {
        this.timepickerService.hour = { angle: 0, time: null };
        this.timepickerService.minute = { angle: 0, time: null };
    };
    NgxTimepickerFieldComponent.prototype.emitLocalTimeChange = function (time) {
        var localTime = TimeAdapter.toLocaleTimeString(time, { format: this.format, locale: this.locale });
        this.onChange(localTime);
        this.timeChanged.emit(localTime);
    };
    var NgxTimepickerFieldComponent_1;
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
    return NgxTimepickerFieldComponent;
}());
export { NgxTimepickerFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvY29tcG9uZW50cy90aW1lcGlja2VyLWZpZWxkL25neC10aW1lcGlja2VyLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUYsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBZTdEO0lBbUVJLHFDQUFvQixpQkFBK0MsRUFDMUIsTUFBYztRQURuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUE5RHZELFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQU1YLGdCQUFXLEdBQXFCLE9BQU8sQ0FBQztRQXNDdkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzNDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFN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QUVwRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQTRCO2dCQUM1QjtvQkFDSSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsNkJBQTJCO29CQUN4QyxLQUFLLEVBQUUsSUFBSTtpQkFDZDthQUNKOztTQUNKLENBQUM7UUFxRWUsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lEQURPLDRCQUE0QjtPQW5FMUQsMkJBQTJCLENBOEl2QztJQUFELGtDQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0E5SVksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNaW51dGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci10aW1lLnV0aWxzJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRoZW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUaW1lQWRhcHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBUSU1FX0xPQ0FMRSB9IGZyb20gJy4uLy4uL3Rva2Vucy90aW1lLWxvY2FsZS50b2tlbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXRpbWVwaWNrZXItZmllbGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGltZXBpY2tlci1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50LFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIHBlcmlvZCQ6IE9ic2VydmFibGU8VGltZVBlcmlvZD47XG4gICAgaG91ciQ6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT47XG4gICAgbWludXRlJDogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPjtcblxuICAgIG1pbkhvdXIgPSAxO1xuICAgIG1heEhvdXIgPSAxMjtcblxuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG4gICAgdGltZXBpY2tlclRpbWU6IHN0cmluZztcbiAgICBpc0RlZmF1bHRUaW1lOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlSWNvbjogVGVtcGxhdGVSZWY8SFRNTE9iamVjdEVsZW1lbnQ+O1xuICAgIEBJbnB1dCgpIGJ1dHRvbkFsaWduOiAncmlnaHQnIHwgJ2xlZnQnID0gJ3JpZ2h0JztcbiAgICBASW5wdXQoKSBjbG9ja1RoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZTtcbiAgICBASW5wdXQoKSBjb250cm9sT25seTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjYW5jZWxCdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoKSBjb25maXJtQnRuVG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBmb3JtYXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZSA9PT0gMjQgPyAyNCA6IDEyO1xuICAgICAgICB0aGlzLm1pbkhvdXIgPSB0aGlzLl9mb3JtYXQgPT09IDEyID8gMSA6IDA7XG4gICAgICAgIHRoaXMubWF4SG91ciA9IHRoaXMuX2Zvcm1hdCA9PT0gMTIgPyAxMiA6IDIzO1xuICAgICAgICB0aGlzLmhvdXJzTGlzdCA9IGdldEhvdXJzKHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgIGNvbnN0IGlzRHluYW1pY2FsbHlDaGFuZ2VkID0gdmFsdWUgJiYgKHRoaXMucHJldmlvdXNGb3JtYXQgJiYgdGhpcy5wcmV2aW91c0Zvcm1hdCAhPT0gdGhpcy5fZm9ybWF0KTtcblxuICAgICAgICBpZiAoaXNEeW5hbWljYWxseUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWUgPSB0aGlzLnRpbWVwaWNrZXJUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNGb3JtYXQgPSB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1hdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZGVmYXVsdFRpbWUodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodmFsLCB7bG9jYWxlOiB0aGlzLmxvY2FsZSwgZm9ybWF0OiB0aGlzLl9mb3JtYXR9KTtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5zZXREZWZhdWx0VGltZUlmQXZhaWxhYmxlKHRpbWUsIG51bGwsIG51bGwsIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0VGltZSA9ICEhdGltZTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdFRpbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRUaW1lO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFRpbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb3JtYXQgPSAxMjtcbiAgICBwcml2YXRlIHByZXZpb3VzRm9ybWF0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGhvdXJzTGlzdDogQ2xvY2tGYWNlVGltZVtdO1xuICAgIHByaXZhdGUgbWludXRlc0xpc3Q6IENsb2NrRmFjZVRpbWVbXTtcblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZXBpY2tlclNlcnZpY2U6IE5neE1hdGVyaWFsVGltZXBpY2tlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQEluamVjdChUSU1FX0xPQ0FMRSkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBlcmlvZCQgPSB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnNlbGVjdGVkUGVyaW9kO1xuICAgICAgICB0aGlzLmhvdXIkID0gdGhpcy50aW1lcGlja2VyU2VydmljZS5zZWxlY3RlZEhvdXI7XG4gICAgICAgIHRoaXMubWludXRlJCA9IHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRNaW51dGU7XG5cbiAgICAgICAgdGhpcy5ob3Vyc0xpc3QgPSBnZXRIb3Vycyh0aGlzLl9mb3JtYXQpO1xuICAgICAgICB0aGlzLm1pbnV0ZXNMaXN0ID0gZ2V0TWludXRlcygpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGltZSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgY2hhbmdlSG91cihob3VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5ob3VyID0gdGhpcy5ob3Vyc0xpc3QuZmluZChoID0+IGgudGltZSA9PT0gaG91cik7XG4gICAgICAgIHRoaXMuY2hhbmdlVGltZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZU1pbnV0ZShtaW51dGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLm1pbnV0ZSA9IHRoaXMubWludXRlc0xpc3QuZmluZChtID0+IG0udGltZSA9PT0gbWludXRlKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGVyaW9kKHBlcmlvZDogVGltZVBlcmlvZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJTZXJ2aWNlLnBlcmlvZCA9IHBlcmlvZDtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lKCk7XG4gICAgfVxuXG4gICAgb25UaW1lU2V0KHRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5lbWl0TG9jYWxUaW1lQ2hhbmdlKHRpbWUpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaW1lKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy50aW1lcGlja2VyU2VydmljZS5nZXRGdWxsVGltZSh0aGlzLl9mb3JtYXQpO1xuICAgICAgICB0aGlzLnRpbWVwaWNrZXJUaW1lID0gdGltZTtcblxuICAgICAgICB0aGlzLmVtaXRMb2NhbFRpbWVDaGFuZ2UodGltZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFRpbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UuaG91ciA9IHthbmdsZTogMCwgdGltZTogbnVsbH07XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UubWludXRlID0ge2FuZ2xlOiAwLCB0aW1lOiBudWxsfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtaXRMb2NhbFRpbWVDaGFuZ2UodGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IFRpbWVBZGFwdGVyLnRvTG9jYWxlVGltZVN0cmluZyh0aW1lLCB7Zm9ybWF0OiB0aGlzLmZvcm1hdCwgbG9jYWxlOiB0aGlzLmxvY2FsZX0pO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UobG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQ2hhbmdlZC5lbWl0KGxvY2FsVGltZSk7XG4gICAgfVxufVxuIl19