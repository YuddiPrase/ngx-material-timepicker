import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { DateTime } from 'luxon';
import { disableMinutes, getMinutes } from '../../utils/timepicker-time.utils';
var NgxMaterialTimepickerMinutesFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerMinutesFaceComponent() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    NgxMaterialTimepickerMinutesFaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            var minutes = getMinutes(this.minutesGap);
            this.minutesList = disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedMinute", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "period", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DateTime)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DateTime)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "maxTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minutesGap", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minuteChange", void 0);
    NgxMaterialTimepickerMinutesFaceComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-minutes-face',
            template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
        })
    ], NgxMaterialTimepickerMinutesFaceComponent);
    return NgxMaterialTimepickerMinutesFaceComponent;
}());
export { NgxMaterialTimepickerMinutesFaceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPL0U7SUFKQTtRQU1JLGdCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBVVYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQWEvRCxDQUFDO0lBWEcsK0RBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDckQsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDMUQsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQXBCUTtRQUFSLEtBQUssRUFBRTs7cUZBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFOzttRkFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OzZFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTswQ0FBVSxRQUFROzhFQUFDO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzBDQUFVLFFBQVE7OEVBQUM7SUFDbEI7UUFBUixLQUFLLEVBQUU7OzZFQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztpRkFBb0I7SUFFbEI7UUFBVCxNQUFNLEVBQUU7O21GQUFrRDtJQWJsRCx5Q0FBeUM7UUFKckQsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNDQUFzQztZQUNoRCx3U0FBb0U7U0FDdkUsQ0FBQztPQUNXLHlDQUF5QyxDQTBCckQ7SUFBRCxnREFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb2NrRmFjZVRpbWUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xvY2stZmFjZS10aW1lLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXVuaXQuZW51bSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5pbXBvcnQgeyBkaXNhYmxlTWludXRlcywgZ2V0TWludXRlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVwaWNrZXItdGltZS51dGlscyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1taW51dGVzLWZhY2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1taW51dGVzLWZhY2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlck1pbnV0ZXNGYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIG1pbnV0ZXNMaXN0OiBDbG9ja0ZhY2VUaW1lW10gPSBbXTtcbiAgICB0aW1lVW5pdCA9IFRpbWVVbml0O1xuXG4gICAgQElucHV0KCkgc2VsZWN0ZWRNaW51dGU6IENsb2NrRmFjZVRpbWU7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRIb3VyOiBudW1iZXI7XG4gICAgQElucHV0KCkgcGVyaW9kOiBUaW1lUGVyaW9kO1xuICAgIEBJbnB1dCgpIG1pblRpbWU6IERhdGVUaW1lO1xuICAgIEBJbnB1dCgpIG1heFRpbWU6IERhdGVUaW1lO1xuICAgIEBJbnB1dCgpIGZvcm1hdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1pbnV0ZXNHYXA6IG51bWJlcjtcblxuICAgIEBPdXRwdXQoKSBtaW51dGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENsb2NrRmFjZVRpbWU+KCk7XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydwZXJpb2QnXSAmJiBjaGFuZ2VzWydwZXJpb2QnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBnZXRNaW51dGVzKHRoaXMubWludXRlc0dhcCk7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXNMaXN0ID0gZGlzYWJsZU1pbnV0ZXMobWludXRlcywgdGhpcy5zZWxlY3RlZEhvdXIsIHtcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMubWluVGltZSxcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXMubWF4VGltZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIHBlcmlvZDogdGhpcy5wZXJpb2RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=