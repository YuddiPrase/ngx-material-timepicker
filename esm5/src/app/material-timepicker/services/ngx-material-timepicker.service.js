import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimePeriod } from '../models/time-period.enum';
import { TimeAdapter } from './time-adapter';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
var DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
var DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
var NgxMaterialTimepickerService = /** @class */ (function () {
    function NgxMaterialTimepickerService() {
        this.hourSubject = new BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new BehaviorSubject(TimePeriod.AM);
    }
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "hour", {
        set: function (hour) {
            this.hourSubject.next(hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedHour", {
        get: function () {
            return this.hourSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "minute", {
        set: function (minute) {
            this.minuteSubject.next(minute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedMinute", {
        get: function () {
            return this.minuteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "period", {
        set: function (period) {
            var isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
            if (isPeriodValid) {
                this.periodSubject.next(period);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedPeriod", {
        get: function () {
            return this.periodSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerService.prototype.setDefaultTimeIfAvailable = function (time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NgxMaterialTimepickerService.prototype.getFullTime = function (format) {
        var hour = this.hourSubject.getValue().time;
        var minute = this.minuteSubject.getValue().time;
        var period = format === 12 ? this.periodSubject.getValue() : '';
        var time = (hour + ":" + minute + " " + period).trim();
        return TimeAdapter.formatTime(time, { format: format });
    };
    NgxMaterialTimepickerService.prototype.setDefaultTime = function (time, format) {
        var defaultTime = TimeAdapter.parseTime(time, { format: format }).toJSDate();
        if (DateTime.fromJSDate(defaultTime).isValid) {
            var period = time.substr(time.length - 2).toUpperCase();
            var hour = defaultTime.getHours();
            this.hour = tslib_1.__assign({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = tslib_1.__assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    };
    NgxMaterialTimepickerService.prototype.resetTime = function () {
        this.hour = tslib_1.__assign({}, DEFAULT_HOUR);
        this.minute = tslib_1.__assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    };
    NgxMaterialTimepickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
    NgxMaterialTimepickerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerService);
    return NgxMaterialTimepickerService;
}());
export { NgxMaterialTimepickerService };
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case TimePeriod.AM:
            return hour === 0 ? 12 : hour;
        case TimePeriod.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBR2pDLElBQU0sWUFBWSxHQUFrQjtJQUNoQyxJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQUNGLElBQU0sY0FBYyxHQUFrQjtJQUNsQyxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQUtGO0lBSEE7UUFLWSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFnQixZQUFZLENBQUMsQ0FBQztRQUMvRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFnQixjQUFjLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFhLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQXlFMUU7SUF0RUcsc0JBQUksOENBQUk7YUFBUixVQUFTLElBQW1CO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFF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RXRDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sZ0RBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSx3QkFBTyxZQUFZLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSx3QkFBTyxjQUFjLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7SUE1RVEsNEJBQTRCO1FBSHhDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyw0QkFBNEIsQ0E2RXhDO3VDQWpHRDtDQWlHQyxBQTdFRCxJQTZFQztTQTdFWSw0QkFBNEI7QUErRXpDOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsTUFBa0I7SUFDeEQsUUFBUSxNQUFNLEVBQUU7UUFDWixLQUFLLFVBQVUsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsQyxLQUFLLFVBQVUsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEM7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcblxuXG5jb25zdCBERUZBVUxUX0hPVVI6IENsb2NrRmFjZVRpbWUgPSB7XG4gICAgdGltZTogMTIsXG4gICAgYW5nbGU6IDM2MFxufTtcbmNvbnN0IERFRkFVTFRfTUlOVVRFOiBDbG9ja0ZhY2VUaW1lID0ge1xuICAgIHRpbWU6IDAsXG4gICAgYW5nbGU6IDM2MFxufTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaG91clN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENsb2NrRmFjZVRpbWU+KERFRkFVTFRfSE9VUik7XG4gICAgcHJpdmF0ZSBtaW51dGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDbG9ja0ZhY2VUaW1lPihERUZBVUxUX01JTlVURSk7XG4gICAgcHJpdmF0ZSBwZXJpb2RTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUaW1lUGVyaW9kPihUaW1lUGVyaW9kLkFNKTtcblxuXG4gICAgc2V0IGhvdXIoaG91cjogQ2xvY2tGYWNlVGltZSkge1xuICAgICAgICB0aGlzLmhvdXJTdWJqZWN0Lm5leHQoaG91cik7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSG91cigpOiBPYnNlcnZhYmxlPENsb2NrRmFjZVRpbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91clN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IG1pbnV0ZShtaW51dGU6IENsb2NrRmFjZVRpbWUpIHtcbiAgICAgICAgdGhpcy5taW51dGVTdWJqZWN0Lm5leHQobWludXRlKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNaW51dGUoKTogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpIHtcbiAgICAgICAgY29uc3QgaXNQZXJpb2RWYWxpZCA9IChwZXJpb2QgPT09IFRpbWVQZXJpb2QuQU0pIHx8IChwZXJpb2QgPT09IFRpbWVQZXJpb2QuUE0pO1xuXG4gICAgICAgIGlmIChpc1BlcmlvZFZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlvZFN1YmplY3QubmV4dChwZXJpb2QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkUGVyaW9kKCk6IE9ic2VydmFibGU8VGltZVBlcmlvZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJpb2RTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuXG4gICAgc2V0RGVmYXVsdFRpbWVJZkF2YWlsYWJsZSh0aW1lOiBzdHJpbmcsIG1pbjogRGF0ZVRpbWUsIG1heDogRGF0ZVRpbWUsIGZvcm1hdDogbnVtYmVyLCBtaW51dGVzR2FwPzogbnVtYmVyKSB7XG4gICAgICAgIC8qIFdvcmthcm91bmQgdG8gZG91YmxlIGVycm9yIG1lc3NhZ2UqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFRpbWVBZGFwdGVyLmlzVGltZUF2YWlsYWJsZSh0aW1lLCBtaW4sIG1heCwgJ21pbnV0ZXMnLCBtaW51dGVzR2FwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFRpbWUodGltZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZ1bGxUaW1lKGZvcm1hdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaG91ciA9IHRoaXMuaG91clN1YmplY3QuZ2V0VmFsdWUoKS50aW1lO1xuICAgICAgICBjb25zdCBtaW51dGUgPSB0aGlzLm1pbnV0ZVN1YmplY3QuZ2V0VmFsdWUoKS50aW1lO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBmb3JtYXQgPT09IDEyID8gdGhpcy5wZXJpb2RTdWJqZWN0LmdldFZhbHVlKCkgOiAnJztcbiAgICAgICAgY29uc3QgdGltZSA9IGAke2hvdXJ9OiR7bWludXRlfSAke3BlcmlvZH1gLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gVGltZUFkYXB0ZXIuZm9ybWF0VGltZSh0aW1lLCB7Zm9ybWF0fSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0VGltZSh0aW1lOiBzdHJpbmcsIGZvcm1hdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUaW1lID0gVGltZUFkYXB0ZXIucGFyc2VUaW1lKHRpbWUsIHtmb3JtYXR9KS50b0pTRGF0ZSgpO1xuXG4gICAgICAgIGlmIChEYXRlVGltZS5mcm9tSlNEYXRlKGRlZmF1bHRUaW1lKS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJpb2QgPSB0aW1lLnN1YnN0cih0aW1lLmxlbmd0aCAtIDIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gZGVmYXVsdFRpbWUuZ2V0SG91cnMoKTtcblxuICAgICAgICAgICAgdGhpcy5ob3VyID0gey4uLkRFRkFVTFRfSE9VUiwgdGltZTogZm9ybWF0SG91ckJ5UGVyaW9kKGhvdXIsIHBlcmlvZCBhcyBUaW1lUGVyaW9kKX07XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IHsuLi5ERUZBVUxUX01JTlVURSwgdGltZTogZGVmYXVsdFRpbWUuZ2V0TWludXRlcygpfTtcbiAgICAgICAgICAgIHRoaXMucGVyaW9kID0gcGVyaW9kIGFzIFRpbWVQZXJpb2Q7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0VGltZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3VyID0gey4uLkRFRkFVTFRfSE9VUn07XG4gICAgICAgIHRoaXMubWludXRlID0gey4uLkRFRkFVTFRfTUlOVVRFfTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBUaW1lUGVyaW9kLkFNO1xuICAgIH1cbn1cblxuLyoqKlxuICogIEZvcm1hdCBob3VyIGluIDI0aG91cnMgZm9ybWF0IHRvIG1lcmlkaWFuIChBTSBvciBQTSkgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdEhvdXJCeVBlcmlvZChob3VyOiBudW1iZXIsIHBlcmlvZDogVGltZVBlcmlvZCk6IG51bWJlciB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgICAgY2FzZSBUaW1lUGVyaW9kLkFNOlxuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPT09IDAgPyAxMiA6IGhvdXI7XG4gICAgICAgIGNhc2UgVGltZVBlcmlvZC5QTTpcbiAgICAgICAgICAgIHJldHVybiBob3VyID09PSAxMiA/IDEyIDogaG91ciAtIDEyO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuIl19