import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { DateTime } from 'luxon';
import { getHours } from '../../utils/timepicker-time.utils';
export class NgxMaterialTimepickerHoursFace {
    constructor(format) {
        this.hourChange = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.hoursList = [];
        this.hoursList = getHours(format);
    }
    onTimeSelected(time) {
        this.hourSelected.next(time);
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "selectedHour", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DateTime)
], NgxMaterialTimepickerHoursFace.prototype, "minTime", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DateTime)
], NgxMaterialTimepickerHoursFace.prototype, "maxTime", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], NgxMaterialTimepickerHoursFace.prototype, "format", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "hourChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "hourSelected", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItaG91cnMtZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1ob3Vycy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWhvdXJzLWZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRWpDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc3RCxNQUFNLE9BQU8sOEJBQThCO0lBWXZDLFlBQXNCLE1BQWM7UUFMMUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRCxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBakJZO0lBQVIsS0FBSyxFQUFFOztvRUFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7c0NBQVUsUUFBUTsrREFBQztBQUNsQjtJQUFSLEtBQUssRUFBRTtzQ0FBVSxRQUFROytEQUFDO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzs4REFBZ0I7QUFFZDtJQUFULE1BQU0sRUFBRTs7a0VBQWdEO0FBQy9DO0lBQVQsTUFBTSxFQUFFOztvRUFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgQ2xvY2tGYWNlVGltZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbG9jay1mYWNlLXRpbWUuaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldEhvdXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci10aW1lLnV0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VySG91cnNGYWNlIHtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkSG91cjogQ2xvY2tGYWNlVGltZTtcbiAgICBASW5wdXQoKSBtaW5UaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBtYXhUaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBmb3JtYXQ6IG51bWJlcjtcblxuICAgIEBPdXRwdXQoKSBob3VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuICAgIEBPdXRwdXQoKSBob3VyU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIGhvdXJzTGlzdDogQ2xvY2tGYWNlVGltZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZm9ybWF0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ob3Vyc0xpc3QgPSBnZXRIb3Vycyhmb3JtYXQpO1xuICAgIH1cblxuICAgIG9uVGltZVNlbGVjdGVkKHRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmhvdXJTZWxlY3RlZC5uZXh0KHRpbWUpO1xuICAgIH1cbn1cbiJdfQ==