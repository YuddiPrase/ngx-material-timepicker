import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TimePeriod } from '../../../models/time-period.enum';
import { animate, style, transition, trigger } from '@angular/animations';
import { TIME_LOCALE } from '../../../tokens/time-locale.token';
import { Info } from 'luxon';
let NgxTimepickerPeriodSelectorComponent = class NgxTimepickerPeriodSelectorComponent {
    constructor(locale) {
        this.locale = locale;
        this.periodSelected = new EventEmitter();
        this.period = TimePeriod;
        this.meridiems = Info.meridiems({ locale: this.locale });
    }
    set selectedPeriod(period) {
        if (period) {
            const periods = [TimePeriod.AM, TimePeriod.PM];
            this.localizedPeriod = this.meridiems[periods.indexOf(period)];
        }
    }
    open() {
        if (!this.disabled) {
            this.isOpened = true;
        }
    }
    select(period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    }
    backdropClick() {
        this.isOpened = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxTimepickerPeriodSelectorComponent.prototype, "isOpened", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxTimepickerPeriodSelectorComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxTimepickerPeriodSelectorComponent.prototype, "periodSelected", void 0);
NgxTimepickerPeriodSelectorComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-timepicker-period-selector',
        template: "<div class=\"period\">\n    <div class=\"period-control\">\n        <button class=\"period-control__button period__btn--default\"\n                [ngClass]=\"{'period-control__button--disabled': disabled}\"\n                type=\"button\"\n                (click)=\"open()\">\n            <span>{{localizedPeriod}}</span>\n            <span class=\"period-control__arrow\">&#9660;</span>\n        </button>\n    </div>\n    <ul class=\"period-selector\" @scaleInOut *ngIf=\"isOpened\" [timepickerAutofocus]=\"true\">\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.AM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[0]}\">{{meridiems[0]}}</button>\n        </li>\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.PM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[1]}\">{{meridiems[1]}}</button>\n        </li>\n    </ul>\n</div>\n<div class=\"overlay\" (click)=\"backdropClick()\" *ngIf=\"isOpened\"></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('scaleInOut', [
                transition(':enter', [
                    style({ transform: 'scale(0)', opacity: 0 }),
                    animate(200, style({ transform: 'scale(1)', opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(200, style({ transform: 'scale(0)', opacity: 0 }))
                ])
            ])
        ],
        styles: [".period{position:relative}.period__btn--default{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control{position:relative}.period-control__button{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active{color:#00bfff}.period-selector__button:focus{background-color:#eee}.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"]
    }),
    tslib_1.__param(0, Inject(TIME_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [String])
], NgxTimepickerPeriodSelectorComponent);
export { NgxTimepickerPeriodSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC90aW1lcGlja2VyLXBlcmlvZC1zZWxlY3Rvci9uZ3gtdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBb0I3QixJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFvQztJQWtCN0MsWUFBeUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFON0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTFELFdBQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFJbEQsQ0FBQztJQWRELElBQUksY0FBYyxDQUFDLE1BQWtCO1FBQ2pDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQVdELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBa0I7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQTtBQWpDWTtJQUFSLEtBQUssRUFBRTs7c0VBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOztzRUFBbUI7QUFFM0I7SUFEQyxLQUFLLEVBQUU7OzswRUFNUDtBQUVTO0lBQVQsTUFBTSxFQUFFOzs0RUFBaUQ7QUFaakQsb0NBQW9DO0lBbEJoRCxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0NBQWdDO1FBQzFDLDZ2Q0FBNEQ7UUFFNUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsVUFBVSxFQUFFO1lBQ1IsT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDM0QsQ0FBQztnQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNqQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQzNELENBQUM7YUFDTCxDQUFDO1NBQ0w7O0tBQ0osQ0FBQztJQW9CZSxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7O0dBbEJ2QixvQ0FBb0MsQ0FtQ2hEO1NBbkNZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRJTUVfTE9DQUxFIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL3RpbWUtbG9jYWxlLnRva2VuJztcbmltcG9ydCB7IEluZm8gfSBmcm9tICdsdXhvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC10aW1lcGlja2VyLXBlcmlvZC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdzY2FsZUluT3V0JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMX0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgyMDAsIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6IDB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFRpbWVwaWNrZXJQZXJpb2RTZWxlY3RvckNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBpc09wZW5lZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKVxuICAgIHNldCBzZWxlY3RlZFBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpIHtcbiAgICAgICAgaWYgKHBlcmlvZCkge1xuICAgICAgICAgICAgY29uc3QgcGVyaW9kcyA9IFtUaW1lUGVyaW9kLkFNLCBUaW1lUGVyaW9kLlBNXTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxpemVkUGVyaW9kID0gdGhpcy5tZXJpZGllbXNbcGVyaW9kcy5pbmRleE9mKHBlcmlvZCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIHBlcmlvZFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUaW1lUGVyaW9kPigpO1xuXG4gICAgcGVyaW9kID0gVGltZVBlcmlvZDtcbiAgICBtZXJpZGllbXMgPSBJbmZvLm1lcmlkaWVtcyh7bG9jYWxlOiB0aGlzLmxvY2FsZX0pO1xuICAgIGxvY2FsaXplZFBlcmlvZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChUSU1FX0xPQ0FMRSkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIH1cblxuICAgIG9wZW4oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3QocGVyaW9kOiBUaW1lUGVyaW9kKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGVyaW9kU2VsZWN0ZWQubmV4dChwZXJpb2QpO1xuICAgICAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmFja2Ryb3BDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==