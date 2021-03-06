import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TimePeriod } from '../../../models/time-period.enum';
import { animate, style, transition, trigger } from '@angular/animations';
import { TIME_LOCALE } from '../../../tokens/time-locale.token';
import { Info } from 'luxon';
var NgxTimepickerPeriodSelectorComponent = /** @class */ (function () {
    function NgxTimepickerPeriodSelectorComponent(locale) {
        this.locale = locale;
        this.periodSelected = new EventEmitter();
        this.period = TimePeriod;
        this.meridiems = Info.meridiems({ locale: this.locale });
    }
    Object.defineProperty(NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", {
        set: function (period) {
            if (period) {
                var periods = [TimePeriod.AM, TimePeriod.PM];
                this.localizedPeriod = this.meridiems[periods.indexOf(period)];
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxTimepickerPeriodSelectorComponent.prototype.open = function () {
        if (!this.disabled) {
            this.isOpened = true;
        }
    };
    NgxTimepickerPeriodSelectorComponent.prototype.select = function (period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    };
    NgxTimepickerPeriodSelectorComponent.prototype.backdropClick = function () {
        this.isOpened = false;
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
    return NgxTimepickerPeriodSelectorComponent;
}());
export { NgxTimepickerPeriodSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC90aW1lcGlja2VyLXBlcmlvZC1zZWxlY3Rvci9uZ3gtdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBb0I3QjtJQWtCSSw4Q0FBeUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFON0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTFELFdBQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFJbEQsQ0FBQztJQWRELHNCQUFJLGdFQUFjO2FBQWxCLFVBQW1CLE1BQWtCO1lBQ2pDLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQU0sT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbEU7UUFDTCxDQUFDOzs7T0FBQTtJQVdELG1EQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxxREFBTSxHQUFOLFVBQU8sTUFBa0I7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELDREQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBaENRO1FBQVIsS0FBSyxFQUFFOzswRUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7OzBFQUFtQjtJQUUzQjtRQURDLEtBQUssRUFBRTs7OzhFQU1QO0lBRVM7UUFBVCxNQUFNLEVBQUU7O2dGQUFpRDtJQVpqRCxvQ0FBb0M7UUFsQmhELFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsNnZDQUE0RDtZQUU1RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7d0JBQzFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztxQkFDM0QsQ0FBQztvQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO3dCQUNqQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQzNELENBQUM7aUJBQ0wsQ0FBQzthQUNMOztTQUNKLENBQUM7UUFvQmUsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztPQWxCdkIsb0NBQW9DLENBbUNoRDtJQUFELDJDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FuQ1ksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdGltZS1wZXJpb2QuZW51bSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVElNRV9MT0NBTEUgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvdGltZS1sb2NhbGUudG9rZW4nO1xuaW1wb3J0IHsgSW5mbyB9IGZyb20gJ2x1eG9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3InLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3NjYWxlSW5PdXQnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoMjAwLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAxfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogMH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4VGltZXBpY2tlclBlcmlvZFNlbGVjdG9yQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGlzT3BlbmVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IHNlbGVjdGVkUGVyaW9kKHBlcmlvZDogVGltZVBlcmlvZCkge1xuICAgICAgICBpZiAocGVyaW9kKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJpb2RzID0gW1RpbWVQZXJpb2QuQU0sIFRpbWVQZXJpb2QuUE1dO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGl6ZWRQZXJpb2QgPSB0aGlzLm1lcmlkaWVtc1twZXJpb2RzLmluZGV4T2YocGVyaW9kKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgcGVyaW9kU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWVQZXJpb2Q+KCk7XG5cbiAgICBwZXJpb2QgPSBUaW1lUGVyaW9kO1xuICAgIG1lcmlkaWVtcyA9IEluZm8ubWVyaWRpZW1zKHtsb2NhbGU6IHRoaXMubG9jYWxlfSk7XG4gICAgbG9jYWxpemVkUGVyaW9kOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFRJTUVfTE9DQUxFKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdChwZXJpb2Q6IFRpbWVQZXJpb2QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wZXJpb2RTZWxlY3RlZC5uZXh0KHBlcmlvZCk7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBiYWNrZHJvcENsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgfVxufVxuIl19