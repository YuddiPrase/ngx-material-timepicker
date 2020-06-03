import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { DateTime } from 'luxon';
import { disableMinutes, getMinutes } from '../../utils/timepicker-time.utils';
let NgxMaterialTimepickerMinutesFaceComponent = class NgxMaterialTimepickerMinutesFaceComponent {
    constructor() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            const minutes = getMinutes(this.minutesGap);
            this.minutesList = disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
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
export { NgxMaterialTimepickerMinutesFaceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPL0UsSUFBYSx5Q0FBeUMsR0FBdEQsTUFBYSx5Q0FBeUM7SUFKdEQ7UUFNSSxnQkFBVyxHQUFvQixFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQVVWLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFhL0QsQ0FBQztJQVhHLFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3JELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzFELEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBckJZO0lBQVIsS0FBSyxFQUFFOztpRkFBK0I7QUFDOUI7SUFBUixLQUFLLEVBQUU7OytFQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs7eUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3NDQUFVLFFBQVE7MEVBQUM7QUFDbEI7SUFBUixLQUFLLEVBQUU7c0NBQVUsUUFBUTswRUFBQztBQUNsQjtJQUFSLEtBQUssRUFBRTs7eUVBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OzZFQUFvQjtBQUVsQjtJQUFULE1BQU0sRUFBRTs7K0VBQWtEO0FBYmxELHlDQUF5QztJQUpyRCxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsc0NBQXNDO1FBQ2hELHdTQUFvRTtLQUN2RSxDQUFDO0dBQ1cseUNBQXlDLENBMEJyRDtTQTFCWSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgZGlzYWJsZU1pbnV0ZXMsIGdldE1pbnV0ZXMgfSBmcm9tICcuLi8uLi91dGlscy90aW1lcGlja2VyLXRpbWUudXRpbHMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNaW51dGVzRmFjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBtaW51dGVzTGlzdDogQ2xvY2tGYWNlVGltZVtdID0gW107XG4gICAgdGltZVVuaXQgPSBUaW1lVW5pdDtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkTWludXRlOiBDbG9ja0ZhY2VUaW1lO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkSG91cjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBlcmlvZDogVGltZVBlcmlvZDtcbiAgICBASW5wdXQoKSBtaW5UaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBtYXhUaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBmb3JtYXQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtaW51dGVzR2FwOiBudW1iZXI7XG5cbiAgICBAT3V0cHV0KCkgbWludXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1sncGVyaW9kJ10gJiYgY2hhbmdlc1sncGVyaW9kJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZ2V0TWludXRlcyh0aGlzLm1pbnV0ZXNHYXApO1xuICAgICAgICAgICAgdGhpcy5taW51dGVzTGlzdCA9IGRpc2FibGVNaW51dGVzKG1pbnV0ZXMsIHRoaXMuc2VsZWN0ZWRIb3VyLCB7XG4gICAgICAgICAgICAgICAgbWluOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFRpbWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19