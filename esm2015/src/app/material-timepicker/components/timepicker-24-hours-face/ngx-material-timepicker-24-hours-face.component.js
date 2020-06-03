import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMaterialTimepickerHoursFace } from '../timepicker-hours-face/ngx-material-timepicker-hours-face';
import { disableHours } from '../../utils/timepicker-time.utils';
let NgxMaterialTimepicker24HoursFaceComponent = class NgxMaterialTimepicker24HoursFaceComponent extends NgxMaterialTimepickerHoursFace {
    constructor() {
        super(24);
    }
    ngAfterContentInit() {
        this.hoursList = disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
};
NgxMaterialTimepicker24HoursFaceComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-material-timepicker-24-hours-face',
        template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NgxMaterialTimepicker24HoursFaceComponent);
export { NgxMaterialTimepicker24HoursFaceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItMjQtaG91cnMtZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXItMjQtaG91cnMtZmFjZS9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci0yNC1ob3Vycy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUWpFLElBQWEseUNBQXlDLEdBQXRELE1BQWEseUNBQTBDLFNBQVEsOEJBQThCO0lBRXpGO1FBQ0ksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUE7QUFiWSx5Q0FBeUM7SUFOckQsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHVDQUF1QztRQUNqRCx5U0FBbUU7UUFDbkUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDbEQsQ0FBQzs7R0FFVyx5Q0FBeUMsQ0FhckQ7U0FiWSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJIb3Vyc0ZhY2UgfSBmcm9tICcuLi90aW1lcGlja2VyLWhvdXJzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItaG91cnMtZmFjZSc7XG5pbXBvcnQgeyBkaXNhYmxlSG91cnMgfSBmcm9tICcuLi8uLi91dGlscy90aW1lcGlja2VyLXRpbWUudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLTI0LWhvdXJzLWZhY2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItMjQtaG91cnMtZmFjZS5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXIyNEhvdXJzRmFjZUNvbXBvbmVudCBleHRlbmRzIE5neE1hdGVyaWFsVGltZXBpY2tlckhvdXJzRmFjZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKDI0KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuaG91cnNMaXN0ID0gZGlzYWJsZUhvdXJzKHRoaXMuaG91cnNMaXN0LCB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluVGltZSxcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=