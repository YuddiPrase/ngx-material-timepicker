import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, TemplateRef } from '@angular/core';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import { DateTime, Info } from 'luxon';
import { disableHours, disableMinutes, getHours, getMinutes } from '../../utils/timepicker-time.utils';
import { TIME_LOCALE } from '../../tokens/time-locale.token';
let NgxMaterialTimepickerDialComponent = class NgxMaterialTimepickerDialComponent {
    constructor(locale) {
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.meridiems = Info.meridiems({ locale: this.locale });
        this.periodChanged = new EventEmitter();
        this.timeUnitChanged = new EventEmitter();
        this.hourChanged = new EventEmitter();
        this.minuteChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            const hours = getHours(this.format);
            this.hours = disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            const minutes = getMinutes(this.minutesGap);
            this.minutes = disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
    changeTimeUnit(unit) {
        this.timeUnitChanged.next(unit);
    }
    changePeriod(period) {
        this.periodChanged.next(period);
    }
    changeHour(hour) {
        this.hourChanged.next(hour);
    }
    changeMinute(minute) {
        this.minuteChanged.next(minute);
    }
    showHint() {
        this.isHintVisible = true;
    }
    hideHint() {
        this.isHintVisible = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxMaterialTimepickerDialComponent.prototype, "editableHintTmpl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "hour", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "minute", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NgxMaterialTimepickerDialComponent.prototype, "period", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "activeTimeUnit", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DateTime)
], NgxMaterialTimepickerDialComponent.prototype, "minTime", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DateTime)
], NgxMaterialTimepickerDialComponent.prototype, "maxTime", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerDialComponent.prototype, "isEditable", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "minutesGap", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerDialComponent.prototype, "hoursOnly", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "periodChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "timeUnitChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "hourChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "minuteChanged", void 0);
NgxMaterialTimepickerDialComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-material-timepicker-dial',
        template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  [disabled]=\"hoursOnly\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        [meridiems]=\"meridiems\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
    }),
    tslib_1.__param(0, Inject(TIME_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [String])
], NgxMaterialTimepickerDialComponent);
export { NgxMaterialTimepickerDialComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXItZGlhbC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFRN0QsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUEyQjNDLFlBQXlDLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBekJ2RCxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSXBCLGNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBZ0J4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDL0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDaEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUc1RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZO2VBQ2hELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFO2dCQUM3QixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDdEIsQ0FBQyxDQUFDO1NBQ047UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWTtlQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNwRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQy9DLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBYztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWtCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBbUI7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFxQjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztDQUNKLENBQUE7QUFwRVk7SUFBUixLQUFLLEVBQUU7c0NBQW1CLFdBQVc7NEVBQU87QUFDcEM7SUFBUixLQUFLLEVBQUU7O2dFQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs7a0VBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOztrRUFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7a0VBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzswRUFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7c0NBQVUsUUFBUTttRUFBQztBQUNsQjtJQUFSLEtBQUssRUFBRTtzQ0FBVSxRQUFRO21FQUFDO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOztzRUFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O3NFQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7cUVBQW9CO0FBRWxCO0lBQVQsTUFBTSxFQUFFOzt5RUFBZ0Q7QUFDL0M7SUFBVCxNQUFNLEVBQUU7OzJFQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTs7dUVBQWlEO0FBQ2hEO0lBQVQsTUFBTSxFQUFFOzt5RUFBbUQ7QUF6Qm5ELGtDQUFrQztJQU45QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLDgwRkFBMEQ7UUFFMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7SUE0QmUsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztHQTNCdkIsa0NBQWtDLENBOEU5QztTQTlFWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS1wZXJpb2QuZW51bSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXVuaXQuZW51bSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF0ZVRpbWUsIEluZm8gfSBmcm9tICdsdXhvbic7XG5pbXBvcnQgeyBkaXNhYmxlSG91cnMsIGRpc2FibGVNaW51dGVzLCBnZXRIb3VycywgZ2V0TWludXRlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVwaWNrZXItdGltZS51dGlscyc7XG5pbXBvcnQgeyBUSU1FX0xPQ0FMRSB9IGZyb20gJy4uLy4uL3Rva2Vucy90aW1lLWxvY2FsZS50b2tlbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlckRpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgdGltZVVuaXQgPSBUaW1lVW5pdDtcblxuICAgIGhvdXJzOiBDbG9ja0ZhY2VUaW1lW107XG4gICAgbWludXRlczogQ2xvY2tGYWNlVGltZVtdO1xuICAgIG1lcmlkaWVtcyA9IEluZm8ubWVyaWRpZW1zKHtsb2NhbGU6IHRoaXMubG9jYWxlfSk7XG5cbiAgICBpc0hpbnRWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZWRpdGFibGVIaW50VG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG4gICAgQElucHV0KCkgaG91cjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1pbnV0ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvcm1hdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBlcmlvZDogVGltZVBlcmlvZDtcbiAgICBASW5wdXQoKSBhY3RpdmVUaW1lVW5pdDogVGltZVVuaXQ7XG4gICAgQElucHV0KCkgbWluVGltZTogRGF0ZVRpbWU7XG4gICAgQElucHV0KCkgbWF4VGltZTogRGF0ZVRpbWU7XG4gICAgQElucHV0KCkgaXNFZGl0YWJsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBtaW51dGVzR2FwOiBudW1iZXI7XG4gICAgQElucHV0KCkgaG91cnNPbmx5OiBib29sZWFuO1xuXG4gICAgQE91dHB1dCgpIHBlcmlvZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWVQZXJpb2Q+KCk7XG4gICAgQE91dHB1dCgpIHRpbWVVbml0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZVVuaXQ+KCk7XG4gICAgQE91dHB1dCgpIGhvdXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuICAgIEBPdXRwdXQoKSBtaW51dGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChUSU1FX0xPQ0FMRSkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3BlcmlvZCddICYmIGNoYW5nZXNbJ3BlcmlvZCddLmN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgfHwgY2hhbmdlc1snZm9ybWF0J10gJiYgY2hhbmdlc1snZm9ybWF0J10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGdldEhvdXJzKHRoaXMuZm9ybWF0KTtcblxuICAgICAgICAgICAgdGhpcy5ob3VycyA9IGRpc2FibGVIb3Vycyhob3Vycywge1xuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5taW5UaW1lLFxuICAgICAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ3BlcmlvZCddICYmIGNoYW5nZXNbJ3BlcmlvZCddLmN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgfHwgY2hhbmdlc1snaG91ciddICYmIGNoYW5nZXNbJ2hvdXInXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBnZXRNaW51dGVzKHRoaXMubWludXRlc0dhcCk7XG5cbiAgICAgICAgICAgIHRoaXMubWludXRlcyA9IGRpc2FibGVNaW51dGVzKG1pbnV0ZXMsICt0aGlzLmhvdXIsIHtcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMubWluVGltZSxcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXMubWF4VGltZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIHBlcmlvZDogdGhpcy5wZXJpb2RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGltZVVuaXQodW5pdDogVGltZVVuaXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lVW5pdENoYW5nZWQubmV4dCh1bml0KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQZXJpb2QocGVyaW9kOiBUaW1lUGVyaW9kKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGVyaW9kQ2hhbmdlZC5uZXh0KHBlcmlvZCk7XG4gICAgfVxuXG4gICAgY2hhbmdlSG91cihob3VyOiBDbG9ja0ZhY2VUaW1lKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG91ckNoYW5nZWQubmV4dChob3VyKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VNaW51dGUobWludXRlOiBDbG9ja0ZhY2VUaW1lKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWludXRlQ2hhbmdlZC5uZXh0KG1pbnV0ZSk7XG4gICAgfVxuXG4gICAgc2hvd0hpbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNIaW50VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZUhpbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNIaW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==