import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimePeriod } from '../models/time-period.enum';
import { TimeAdapter } from './time-adapter';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
const DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
const DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
let NgxMaterialTimepickerService = class NgxMaterialTimepickerService {
    constructor() {
        this.hourSubject = new BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new BehaviorSubject(TimePeriod.AM);
    }
    set hour(hour) {
        this.hourSubject.next(hour);
    }
    get selectedHour() {
        return this.hourSubject.asObservable();
    }
    set minute(minute) {
        this.minuteSubject.next(minute);
    }
    get selectedMinute() {
        return this.minuteSubject.asObservable();
    }
    set period(period) {
        const isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
        if (isPeriodValid) {
            this.periodSubject.next(period);
        }
    }
    get selectedPeriod() {
        return this.periodSubject.asObservable();
    }
    setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    getFullTime(format) {
        const hour = this.hourSubject.getValue().time;
        const minute = this.minuteSubject.getValue().time;
        const period = format === 12 ? this.periodSubject.getValue() : '';
        const time = `${hour}:${minute} ${period}`.trim();
        return TimeAdapter.formatTime(time, { format });
    }
    setDefaultTime(time, format) {
        const defaultTime = TimeAdapter.parseTime(time, { format }).toJSDate();
        if (DateTime.fromJSDate(defaultTime).isValid) {
            const period = time.substr(time.length - 2).toUpperCase();
            const hour = defaultTime.getHours();
            this.hour = Object.assign({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = Object.assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    }
    resetTime() {
        this.hour = Object.assign({}, DEFAULT_HOUR);
        this.minute = Object.assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    }
};
NgxMaterialTimepickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
NgxMaterialTimepickerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxMaterialTimepickerService);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBR2pDLE1BQU0sWUFBWSxHQUFrQjtJQUNoQyxJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQUNGLE1BQU0sY0FBYyxHQUFrQjtJQUNsQyxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQUtGLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBSHpDO1FBS1ksZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsWUFBWSxDQUFDLENBQUM7UUFDL0Qsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsY0FBYyxDQUFDLENBQUM7UUFDbkUsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBYSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7S0F5RTFFO0lBdEVHLElBQUksSUFBSSxDQUFDLElBQW1CO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMs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QU8sWUFBWSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0scUJBQU8sY0FBYyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDSixDQUFBOztBQTdFWSw0QkFBNEI7SUFIeEMsVUFBVSxDQUFDO1FBQ1IsVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FBQztHQUNXLDRCQUE0QixDQTZFeEM7U0E3RVksNEJBQTRCO0FBK0V6Qzs7R0FFRztBQUNILFNBQVMsa0JBQWtCLENBQUMsSUFBWSxFQUFFLE1BQWtCO0lBQ3hELFFBQVEsTUFBTSxFQUFFO1FBQ1osS0FBSyxVQUFVLENBQUMsRUFBRTtZQUNkLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEMsS0FBSyxVQUFVLENBQUMsRUFBRTtZQUNkLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hDO1lBQ0ksT0FBTyxJQUFJLENBQUM7S0FDbkI7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xvY2tGYWNlVGltZSB9IGZyb20gJy4uL21vZGVscy9jbG9jay1mYWNlLXRpbWUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IFRpbWVBZGFwdGVyIH0gZnJvbSAnLi90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cblxuY29uc3QgREVGQVVMVF9IT1VSOiBDbG9ja0ZhY2VUaW1lID0ge1xuICAgIHRpbWU6IDEyLFxuICAgIGFuZ2xlOiAzNjBcbn07XG5jb25zdCBERUZBVUxUX01JTlVURTogQ2xvY2tGYWNlVGltZSA9IHtcbiAgICB0aW1lOiAwLFxuICAgIGFuZ2xlOiAzNjBcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGhvdXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDbG9ja0ZhY2VUaW1lPihERUZBVUxUX0hPVVIpO1xuICAgIHByaXZhdGUgbWludXRlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2xvY2tGYWNlVGltZT4oREVGQVVMVF9NSU5VVEUpO1xuICAgIHByaXZhdGUgcGVyaW9kU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGltZVBlcmlvZD4oVGltZVBlcmlvZC5BTSk7XG5cblxuICAgIHNldCBob3VyKGhvdXI6IENsb2NrRmFjZVRpbWUpIHtcbiAgICAgICAgdGhpcy5ob3VyU3ViamVjdC5uZXh0KGhvdXIpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEhvdXIoKTogT2JzZXJ2YWJsZTxDbG9ja0ZhY2VUaW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBtaW51dGUobWludXRlOiBDbG9ja0ZhY2VUaW1lKSB7XG4gICAgICAgIHRoaXMubWludXRlU3ViamVjdC5uZXh0KG1pbnV0ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTWludXRlKCk6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5taW51dGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBwZXJpb2QocGVyaW9kOiBUaW1lUGVyaW9kKSB7XG4gICAgICAgIGNvbnN0IGlzUGVyaW9kVmFsaWQgPSAocGVyaW9kID09PSBUaW1lUGVyaW9kLkFNKSB8fCAocGVyaW9kID09PSBUaW1lUGVyaW9kLlBNKTtcblxuICAgICAgICBpZiAoaXNQZXJpb2RWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5wZXJpb2RTdWJqZWN0Lm5leHQocGVyaW9kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFBlcmlvZCgpOiBPYnNlcnZhYmxlPFRpbWVQZXJpb2Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyaW9kU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cblxuICAgIHNldERlZmF1bHRUaW1lSWZBdmFpbGFibGUodGltZTogc3RyaW5nLCBtaW46IERhdGVUaW1lLCBtYXg6IERhdGVUaW1lLCBmb3JtYXQ6IG51bWJlciwgbWludXRlc0dhcD86IG51bWJlcikge1xuICAgICAgICAvKiBXb3JrYXJvdW5kIHRvIGRvdWJsZSBlcnJvciBtZXNzYWdlKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChUaW1lQWRhcHRlci5pc1RpbWVBdmFpbGFibGUodGltZSwgbWluLCBtYXgsICdtaW51dGVzJywgbWludXRlc0dhcCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERlZmF1bHRUaW1lKHRpbWUsIGZvcm1hdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGdWxsVGltZShmb3JtYXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhvdXIgPSB0aGlzLmhvdXJTdWJqZWN0LmdldFZhbHVlKCkudGltZTtcbiAgICAgICAgY29uc3QgbWludXRlID0gdGhpcy5taW51dGVTdWJqZWN0LmdldFZhbHVlKCkudGltZTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gZm9ybWF0ID09PSAxMiA/IHRoaXMucGVyaW9kU3ViamVjdC5nZXRWYWx1ZSgpIDogJyc7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBgJHtob3VyfToke21pbnV0ZX0gJHtwZXJpb2R9YC50cmltKCk7XG5cbiAgICAgICAgcmV0dXJuIFRpbWVBZGFwdGVyLmZvcm1hdFRpbWUodGltZSwge2Zvcm1hdH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdFRpbWUodGltZTogc3RyaW5nLCBmb3JtYXQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VGltZSA9IFRpbWVBZGFwdGVyLnBhcnNlVGltZSh0aW1lLCB7Zm9ybWF0fSkudG9KU0RhdGUoKTtcblxuICAgICAgICBpZiAoRGF0ZVRpbWUuZnJvbUpTRGF0ZShkZWZhdWx0VGltZSkuaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3QgcGVyaW9kID0gdGltZS5zdWJzdHIodGltZS5sZW5ndGggLSAyKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGRlZmF1bHRUaW1lLmdldEhvdXJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaG91ciA9IHsuLi5ERUZBVUxUX0hPVVIsIHRpbWU6IGZvcm1hdEhvdXJCeVBlcmlvZChob3VyLCBwZXJpb2QgYXMgVGltZVBlcmlvZCl9O1xuICAgICAgICAgICAgdGhpcy5taW51dGUgPSB7Li4uREVGQVVMVF9NSU5VVEUsIHRpbWU6IGRlZmF1bHRUaW1lLmdldE1pbnV0ZXMoKX07XG4gICAgICAgICAgICB0aGlzLnBlcmlvZCA9IHBlcmlvZCBhcyBUaW1lUGVyaW9kO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFRpbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG91ciA9IHsuLi5ERUZBVUxUX0hPVVJ9O1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IHsuLi5ERUZBVUxUX01JTlVURX07XG4gICAgICAgIHRoaXMucGVyaW9kID0gVGltZVBlcmlvZC5BTTtcbiAgICB9XG59XG5cbi8qKipcbiAqICBGb3JtYXQgaG91ciBpbiAyNGhvdXJzIGZvcm1hdCB0byBtZXJpZGlhbiAoQU0gb3IgUE0pIGZvcm1hdFxuICovXG5mdW5jdGlvbiBmb3JtYXRIb3VyQnlQZXJpb2QoaG91cjogbnVtYmVyLCBwZXJpb2Q6IFRpbWVQZXJpb2QpOiBudW1iZXIge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgIGNhc2UgVGltZVBlcmlvZC5BTTpcbiAgICAgICAgICAgIHJldHVybiBob3VyID09PSAwID8gMTIgOiBob3VyO1xuICAgICAgICBjYXNlIFRpbWVQZXJpb2QuUE06XG4gICAgICAgICAgICByZXR1cm4gaG91ciA9PT0gMTIgPyAxMiA6IGhvdXIgLSAxMjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbn1cbiJdfQ==