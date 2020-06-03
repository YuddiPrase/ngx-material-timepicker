import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxMaterialTimepickerHoursFace } from '../timepicker-hours-face/ngx-material-timepicker-hours-face';
import { disableHours } from '../../utils/timepicker-time.utils';
var NgxMaterialTimepicker24HoursFaceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxMaterialTimepicker24HoursFaceComponent, _super);
    function NgxMaterialTimepicker24HoursFaceComponent() {
        return _super.call(this, 24) || this;
    }
    NgxMaterialTimepicker24HoursFaceComponent.prototype.ngAfterContentInit = function () {
        this.hoursList = disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    };
    NgxMaterialTimepicker24HoursFaceComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-24-hours-face',
            template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgxMaterialTimepicker24HoursFaceComponent);
    return NgxMaterialTimepicker24HoursFaceComponent;
}(NgxMaterialTimepickerHoursFace));
export { NgxMaterialTimepicker24HoursFaceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItMjQtaG91cnMtZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXItMjQtaG91cnMtZmFjZS9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci0yNC1ob3Vycy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUWpFO0lBQStELHFFQUE4QjtJQUV6RjtlQUNJLGtCQUFNLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxzRUFBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFaUSx5Q0FBeUM7UUFOckQsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVDQUF1QztZQUNqRCx5U0FBbUU7WUFDbkUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQzs7T0FFVyx5Q0FBeUMsQ0FhckQ7SUFBRCxnREFBQztDQUFBLEFBYkQsQ0FBK0QsOEJBQThCLEdBYTVGO1NBYlkseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VySG91cnNGYWNlIH0gZnJvbSAnLi4vdGltZXBpY2tlci1ob3Vycy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWhvdXJzLWZhY2UnO1xuaW1wb3J0IHsgZGlzYWJsZUhvdXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZXBpY2tlci10aW1lLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci0yNC1ob3Vycy1mYWNlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLTI0LWhvdXJzLWZhY2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyMjRIb3Vyc0ZhY2VDb21wb25lbnQgZXh0ZW5kcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJIb3Vyc0ZhY2UgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigyNCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLmhvdXJzTGlzdCA9IGRpc2FibGVIb3Vycyh0aGlzLmhvdXJzTGlzdCwge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4VGltZSxcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19