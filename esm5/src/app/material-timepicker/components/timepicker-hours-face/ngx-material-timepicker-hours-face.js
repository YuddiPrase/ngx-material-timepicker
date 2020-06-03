import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { DateTime } from 'luxon';
import { getHours } from '../../utils/timepicker-time.utils';
var NgxMaterialTimepickerHoursFace = /** @class */ (function () {
    function NgxMaterialTimepickerHoursFace(format) {
        this.hourChange = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.hoursList = [];
        this.hoursList = getHours(format);
    }
    NgxMaterialTimepickerHoursFace.prototype.onTimeSelected = function (time) {
        this.hourSelected.next(time);
    };
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
    return NgxMaterialTimepickerHoursFace;
}());
export { NgxMaterialTimepickerHoursFace };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItaG91cnMtZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1ob3Vycy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWhvdXJzLWZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRWpDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc3RDtJQVlJLHdDQUFzQixNQUFjO1FBTDFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFcEQsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVEQUFjLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7O3dFQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTswQ0FBVSxRQUFRO21FQUFDO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzBDQUFVLFFBQVE7bUVBQUM7SUFDbEI7UUFBUixLQUFLLEVBQUU7O2tFQUFnQjtJQUVkO1FBQVQsTUFBTSxFQUFFOztzRUFBZ0Q7SUFDL0M7UUFBVCxNQUFNLEVBQUU7O3dFQUEyQztJQVd4RCxxQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0SG91cnMgfSBmcm9tICcuLi8uLi91dGlscy90aW1lcGlja2VyLXRpbWUudXRpbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJIb3Vyc0ZhY2Uge1xuXG4gICAgQElucHV0KCkgc2VsZWN0ZWRIb3VyOiBDbG9ja0ZhY2VUaW1lO1xuICAgIEBJbnB1dCgpIG1pblRpbWU6IERhdGVUaW1lO1xuICAgIEBJbnB1dCgpIG1heFRpbWU6IERhdGVUaW1lO1xuICAgIEBJbnB1dCgpIGZvcm1hdDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIGhvdXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENsb2NrRmFjZVRpbWU+KCk7XG4gICAgQE91dHB1dCgpIGhvdXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgaG91cnNMaXN0OiBDbG9ja0ZhY2VUaW1lW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihmb3JtYXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhvdXJzTGlzdCA9IGdldEhvdXJzKGZvcm1hdCk7XG4gICAgfVxuXG4gICAgb25UaW1lU2VsZWN0ZWQodGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG91clNlbGVjdGVkLm5leHQodGltZSk7XG4gICAgfVxufVxuIl19