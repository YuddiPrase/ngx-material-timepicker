import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { DateTime } from 'luxon';
import { disableHours, disableMinutes } from '../../utils/timepicker-time.utils';
var NgxMaterialTimepickerPeriodComponent = /** @class */ (function () {
    function NgxMaterialTimepickerPeriodComponent() {
        this.timePeriod = TimePeriod;
        this.isPeriodAvailable = true;
        this.periodChanged = new EventEmitter();
    }
    NgxMaterialTimepickerPeriodComponent.prototype.changePeriod = function (period) {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    };
    NgxMaterialTimepickerPeriodComponent.prototype.animationDone = function () {
        this.isPeriodAvailable = true;
    };
    NgxMaterialTimepickerPeriodComponent.prototype.isSwitchPeriodAvailable = function (period) {
        var time = this.getDisabledTimeByPeriod(period);
        return !time.every(function (t) { return t.disabled; });
    };
    NgxMaterialTimepickerPeriodComponent.prototype.getDisabledTimeByPeriod = function (period) {
        switch (this.activeTimeUnit) {
            case TimeUnit.HOUR:
                return disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            case TimeUnit.MINUTE:
                return disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            default:
                throw new Error('no such TimeUnit');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedPeriod", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "activeTimeUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "hours", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minutes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DateTime)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DateTime)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "maxTime", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "meridiems", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerPeriodComponent.prototype, "periodChanged", void 0);
    NgxMaterialTimepickerPeriodComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-period',
            template: "<div class=\"timepicker-period\">\n\t\t\t<button class=\"timepicker-dial__item timepicker-period__btn\"\n                  [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.AM}\"\n                  (click)=\"changePeriod(timePeriod.AM)\"\n                  type=\"button\">{{meridiems[0]}}</button>\n    <button class=\"timepicker-dial__item timepicker-period__btn\"\n          [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.PM}\"\n          (click)=\"changePeriod(timePeriod.PM)\"\n          type=\"button\">{{meridiems[1]}}</button>\n    <div class=\"timepicker-period__warning\" [@scaleInOut] (@scaleInOut.done)=\"animationDone()\" *ngIf=\"!isPeriodAvailable\">\n        <p>Current time would be invalid in this period.</p>\n    </div>\n</div>\n",
            animations: [
                trigger('scaleInOut', [
                    transition(':enter', [
                        style({ transform: 'scale(0)' }),
                        animate('.2s', style({ transform: 'scale(1)' })),
                        sequence([
                            animate('3s', style({ opacity: 1 })),
                            animate('.3s', style({ opacity: 0 }))
                        ])
                    ])
                ])
            ],
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn,.timepicker-period__warning>p{font-family:var(--primary-font-family)}}"]
        })
    ], NgxMaterialTimepickerPeriodComponent);
    return NgxMaterialTimepickerPeriodComponent;
}());
export { NgxMaterialTimepickerPeriodComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItcGVyaW9kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1wZXJpb2Qvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItcGVyaW9kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBbUJqRjtJQWpCQTtRQW1CSSxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQVlmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQXNDN0QsQ0FBQztJQXBDRywyREFBWSxHQUFaLFVBQWEsTUFBa0I7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRCw0REFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sc0VBQXVCLEdBQS9CLFVBQWdDLE1BQWtCO1FBQzlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLHNFQUF1QixHQUEvQixVQUFnQyxNQUFrQjtRQUM5QyxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDZCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUM1QixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixNQUFNLFFBQUE7aUJBQ1QsQ0FBQyxDQUFDO1lBQ1AsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDaEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3BELEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO29CQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLE1BQU0sUUFBQTtpQkFDVCxDQUFDLENBQUM7WUFDUDtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBL0NRO1FBQVIsS0FBSyxFQUFFOztnRkFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7O3dFQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztnRkFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7O3VFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTs7eUVBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzBDQUFVLFFBQVE7eUVBQUM7SUFDbEI7UUFBUixLQUFLLEVBQUU7MENBQVUsUUFBUTt5RUFBQztJQUNsQjtRQUFSLEtBQUssRUFBRTs7OEVBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFOzsyRUFBcUI7SUFFbkI7UUFBVCxNQUFNLEVBQUU7OytFQUFnRDtJQWZoRCxvQ0FBb0M7UUFqQmhELFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsNnlCQUE0RDtZQUU1RCxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO3dCQUM5QyxRQUFRLENBQUM7NEJBQ0wsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzs0QkFDbEMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzt5QkFDdEMsQ0FBQztxQkFDTCxDQUFDO2lCQUNMLENBQUM7YUFDTDs7U0FDSixDQUFDO09BQ1csb0NBQW9DLENBcURoRDtJQUFELDJDQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGltZS1wZXJpb2QuZW51bSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXVuaXQuZW51bSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc2VxdWVuY2UsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcbmltcG9ydCB7IGRpc2FibGVIb3VycywgZGlzYWJsZU1pbnV0ZXMgfSBmcm9tICcuLi8uLi91dGlscy90aW1lcGlja2VyLXRpbWUudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLXBlcmlvZCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1wZXJpb2QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1wZXJpb2QuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3NjYWxlSW5PdXQnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDApJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJy4ycycsIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgxKSd9KSksXG4gICAgICAgICAgICAgICAgc2VxdWVuY2UoW1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCczcycsIHN0eWxlKHtvcGFjaXR5OiAxfSkpLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCcuM3MnLCBzdHlsZSh7b3BhY2l0eTogMH0pKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyUGVyaW9kQ29tcG9uZW50IHtcblxuICAgIHRpbWVQZXJpb2QgPSBUaW1lUGVyaW9kO1xuICAgIGlzUGVyaW9kQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkUGVyaW9kOiBUaW1lUGVyaW9kO1xuICAgIEBJbnB1dCgpIGZvcm1hdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGFjdGl2ZVRpbWVVbml0OiBUaW1lVW5pdDtcbiAgICBASW5wdXQoKSBob3VyczogQ2xvY2tGYWNlVGltZVtdO1xuICAgIEBJbnB1dCgpIG1pbnV0ZXM6IENsb2NrRmFjZVRpbWVbXTtcbiAgICBASW5wdXQoKSBtaW5UaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBtYXhUaW1lOiBEYXRlVGltZTtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEhvdXI6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtZXJpZGllbXM6IHN0cmluZ1tdO1xuXG4gICAgQE91dHB1dCgpIHBlcmlvZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWVQZXJpb2Q+KCk7XG5cbiAgICBjaGFuZ2VQZXJpb2QocGVyaW9kOiBUaW1lUGVyaW9kKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNQZXJpb2RBdmFpbGFibGUgPSB0aGlzLmlzU3dpdGNoUGVyaW9kQXZhaWxhYmxlKHBlcmlvZCk7XG4gICAgICAgIGlmICh0aGlzLmlzUGVyaW9kQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlvZENoYW5nZWQubmV4dChwZXJpb2QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1BlcmlvZEF2YWlsYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1N3aXRjaFBlcmlvZEF2YWlsYWJsZShwZXJpb2Q6IFRpbWVQZXJpb2QpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMuZ2V0RGlzYWJsZWRUaW1lQnlQZXJpb2QocGVyaW9kKTtcbiAgICAgICAgcmV0dXJuICF0aW1lLmV2ZXJ5KHQgPT4gdC5kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREaXNhYmxlZFRpbWVCeVBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpOiBDbG9ja0ZhY2VUaW1lW10ge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlVGltZVVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgVGltZVVuaXQuSE9VUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzYWJsZUhvdXJzKHRoaXMuaG91cnMsIHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICBwZXJpb2RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgVGltZVVuaXQuTUlOVVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNhYmxlTWludXRlcyh0aGlzLm1pbnV0ZXMsICt0aGlzLnNlbGVjdGVkSG91ciwge1xuICAgICAgICAgICAgICAgICAgICBtaW46IHRoaXMubWluVGltZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHN1Y2ggVGltZVVuaXQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==