import * as tslib_1 from "tslib";
import { Component, HostListener, Inject, Input } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgxMaterialTimepickerService } from '../../services/ngx-material-timepicker.service';
import { Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { TimeAdapter } from '../../services/time-adapter';
import { NgxMaterialTimepickerEventService } from '../../services/ngx-material-timepicker-event.service';
import { TIME_LOCALE } from '../../tokens/time-locale.token';
export var AnimationState;
(function (AnimationState) {
    AnimationState["ENTER"] = "enter";
    AnimationState["LEAVE"] = "leave";
})(AnimationState || (AnimationState = {}));
let NgxMaterialTimepickerContainerComponent = class NgxMaterialTimepickerContainerComponent {
    constructor(timepickerService, eventService, locale) {
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.unsubscribe = new Subject();
    }
    set defaultTime(time) {
        this.setDefaultTime(time);
    }
    onKeydown(e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    }
    ngOnInit() {
        this.animationState = !this.disableAnimation && AnimationState.ENTER;
        this.defineTime();
        this.selectedHour = this.timepickerService.selectedHour
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.selectedMinute = this.timepickerService.selectedMinute
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.selectedPeriod = this.timepickerService.selectedPeriod
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.timepickerBaseRef.timeUpdated.pipe(takeUntil(this.unsubscribe))
            .subscribe(this.setDefaultTime.bind(this));
    }
    onHourChange(hour) {
        this.timepickerService.hour = hour;
        this.onTimeChange();
    }
    onHourSelected(hour) {
        if (!this.hoursOnly) {
            this.changeTimeUnit(TimeUnit.MINUTE);
        }
        this.timepickerBaseRef.hourSelected.next(hour);
    }
    onMinuteChange(minute) {
        this.timepickerService.minute = minute;
        this.onTimeChange();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.onTimeChange();
    }
    changeTimeUnit(unit) {
        this.activeTimeUnit = unit;
    }
    setTime() {
        this.timepickerBaseRef.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    }
    close() {
        if (this.disableAnimation) {
            this.timepickerBaseRef.close();
            return;
        }
        this.animationState = AnimationState.LEAVE;
    }
    animationDone(event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.timepickerBaseRef.close();
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    setDefaultTime(time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, this.minTime, this.maxTime, this.format, this.minutesGap);
    }
    defineTime() {
        const minTime = this.minTime;
        if (minTime && !this.time) {
            const time = TimeAdapter.fromDateTimeToString(minTime, this.format);
            this.setDefaultTime(time);
        }
    }
    onTimeChange() {
        const time = TimeAdapter.toLocaleTimeString(this.timepickerService.getFullTime(this.format), {
            locale: this.locale,
            format: this.format
        });
        this.timepickerBaseRef.timeChanged.emit(time);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], NgxMaterialTimepickerContainerComponent.prototype, "defaultTime", null);
tslib_1.__decorate([
    HostListener('keydown', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgxMaterialTimepickerContainerComponent.prototype, "onKeydown", null);
NgxMaterialTimepickerContainerComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-material-timepicker-container',
        template: "<div class=\"timepicker-backdrop-overlay\" [overlay]=\"preventOverlayClick\"\n     [ngClass]=\"{'timepicker-backdrop-overlay--transparent': appendToInput}\"></div>\n<div class=\"timepicker-overlay\">\n    <ngx-material-timepicker-content [appendToInput]=\"appendToInput\"\n                                     [inputElement]=\"inputElement\"\n                                     [ngxMaterialTimepickerTheme]=\"theme\">\n        <div class=\"timepicker\"\n             [@timepicker]=\"animationState\"\n             (@timepicker.done)=\"animationDone($event)\"\n             [ngClass]=\"timepickerClass\">\n            <header class=\"timepicker__header\">\n                <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"(selectedHour | async)?.time\"\n                                              [minute]=\"(selectedMinute | async)?.time\"\n                                              [period]=\"selectedPeriod | async\"\n                                              [activeTimeUnit]=\"activeTimeUnit\"\n                                              [minTime]=\"minTime\"\n                                              [maxTime]=\"maxTime\"\n                                              [isEditable]=\"enableKeyboardInput\"\n                                              [editableHintTmpl]=\"editableHintTmpl\"\n                                              [minutesGap]=\"minutesGap\"\n                                              [hoursOnly]=\"hoursOnly\"\n                                              (periodChanged)=\"changePeriod($event)\"\n                                              (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                              (hourChanged)=\"onHourChange($event)\"\n                                              (minuteChanged)=\"onMinuteChange($event)\"\n                ></ngx-material-timepicker-dial>\n            </header>\n            <div class=\"timepicker__main-content\">\n                <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                    <div *ngSwitchCase=\"timeUnit.HOUR\">\n                        <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                               (hourChange)=\"onHourChange($event)\"\n                                                               [selectedHour]=\"selectedHour | async\"\n                                                               [minTime]=\"minTime\"\n                                                               [maxTime]=\"maxTime\"\n                                                               [format]=\"format\"\n                                                               (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                        <ng-template #ampmHours>\n                            <ngx-material-timepicker-12-hours-face\n                                (hourChange)=\"onHourChange($event)\"\n                                [selectedHour]=\"selectedHour | async\"\n                                [period]=\"selectedPeriod | async\"\n                                [minTime]=\"minTime\"\n                                [maxTime]=\"maxTime\"\n                                (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                        </ng-template>\n                    </div>\n                    <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                          [selectedMinute]=\"selectedMinute | async\"\n                                                          [selectedHour]=\"(selectedHour | async)?.time\"\n                                                          [minTime]=\"minTime\"\n                                                          [maxTime]=\"maxTime\"\n                                                          [format]=\"format\"\n                                                          [period]=\"selectedPeriod | async\"\n                                                          [minutesGap]=\"minutesGap\"\n                                                          (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n                </div>\n                <div class=\"timepicker__actions\">\n                    <div (click)=\"close()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                    </div>\n                    <div (click)=\"setTime()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ngx-material-timepicker-content>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
        animations: [
            trigger('timepicker', [
                transition(`* => ${AnimationState.ENTER}`, [
                    style({ transform: 'translateY(-30%)' }),
                    animate('0.2s ease-out', style({ transform: 'translateY(0)' }))
                ]),
                transition(`${AnimationState.ENTER} => ${AnimationState.LEAVE}`, [
                    style({ transform: 'translateY(0)', opacity: 1 }),
                    animate('0.2s ease-out', style({ transform: 'translateY(-30%)', opacity: 0 }))
                ])
            ])
        ],
        providers: [NgxMaterialTimepickerService],
        styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:#c3101e;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:#c3101e;--dial-editable-active-color:#c3101e;--dial-editable-background-color:#fff;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:#c3101e}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-backdrop-overlay--transparent{background-color:transparent}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
    }),
    tslib_1.__param(2, Inject(TIME_LOCALE)),
    tslib_1.__metadata("design:paramtypes", [NgxMaterialTimepickerService,
        NgxMaterialTimepickerEventService, String])
], NgxMaterialTimepickerContainerComponent);
export { NgxMaterialTimepickerContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBR3ZHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE1BQU0sQ0FBTixJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDdEIsaUNBQWUsQ0FBQTtJQUNmLGlDQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCO0FBb0JELElBQWEsdUNBQXVDLEdBQXBELE1BQWEsdUNBQXVDO0lBeUNoRCxZQUFvQixpQkFBK0MsRUFD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NUMsQ0FBQztJQTRDZSxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7NkNBRk8sNEJBQTRCO1FBQ2pDLGlDQUFpQztHQTFDMUQsdUNBQXVDLENBa0puRDtTQWxKWSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZVJlcGxheSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHsgVGltZXBpY2tlclJlZiB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lcGlja2VyLXJlZi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy90aW1lcGlja2VyLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSB9IGZyb20gJy4uLy4uL21vZGVscy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10aGVtZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVElNRV9MT0NBTEUgfSBmcm9tICcuLi8uLi90b2tlbnMvdGltZS1sb2NhbGUudG9rZW4nO1xuXG5leHBvcnQgZW51bSBBbmltYXRpb25TdGF0ZSB7XG4gICAgRU5URVIgPSAnZW50ZXInLFxuICAgIExFQVZFID0gJ2xlYXZlJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCd0aW1lcGlja2VyJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbihgKiA9PiAke0FuaW1hdGlvblN0YXRlLkVOVEVSfWAsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMzAlKSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjJzIGVhc2Utb3V0Jywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oYCR7QW5pbWF0aW9uU3RhdGUuRU5URVJ9ID0+ICR7QW5pbWF0aW9uU3RhdGUuTEVBVkV9YCwgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMX0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuMnMgZWFzZS1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMzAlKScsIG9wYWNpdHk6IDB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVGltZXBpY2tlckNvbmZpZyB7XG5cbiAgICBzZWxlY3RlZEhvdXI6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT47XG4gICAgc2VsZWN0ZWRNaW51dGU6IE9ic2VydmFibGU8Q2xvY2tGYWNlVGltZT47XG4gICAgc2VsZWN0ZWRQZXJpb2Q6IE9ic2VydmFibGU8VGltZVBlcmlvZD47XG5cbiAgICB0aW1lVW5pdCA9IFRpbWVVbml0O1xuICAgIGFjdGl2ZVRpbWVVbml0ID0gVGltZVVuaXQuSE9VUjtcblxuICAgIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTtcblxuICAgIGNhbmNlbEJ0blRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIGVkaXRhYmxlSGludFRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIGNvbmZpcm1CdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBpbnB1dEVsZW1lbnQ6IGFueTtcblxuICAgIGVuYWJsZUtleWJvYXJkSW5wdXQ6IGJvb2xlYW47XG4gICAgcHJldmVudE92ZXJsYXlDbGljazogYm9vbGVhbjtcbiAgICBkaXNhYmxlQW5pbWF0aW9uOiBib29sZWFuO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIGFwcGVuZFRvSW5wdXQ6IGJvb2xlYW47XG4gICAgaG91cnNPbmx5OiBib29sZWFuO1xuXG4gICAgZm9ybWF0OiBudW1iZXI7XG4gICAgbWludXRlc0dhcDogbnVtYmVyO1xuXG4gICAgbWluVGltZTogRGF0ZVRpbWU7XG4gICAgbWF4VGltZTogRGF0ZVRpbWU7XG4gICAgdGltZTogc3RyaW5nO1xuXG4gICAgdGltZXBpY2tlckNsYXNzOiBzdHJpbmc7XG4gICAgdGhlbWU6IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lO1xuICAgIHRpbWVwaWNrZXJCYXNlUmVmOiBUaW1lcGlja2VyUmVmO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgZGVmYXVsdFRpbWUodGltZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFRpbWUodGltZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVwaWNrZXJTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQEluamVjdChUSU1FX0xPQ0FMRSkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5ZG93bihlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudFNlcnZpY2UuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gIXRoaXMuZGlzYWJsZUFuaW1hdGlvbiAmJiBBbmltYXRpb25TdGF0ZS5FTlRFUjtcblxuICAgICAgICB0aGlzLmRlZmluZVRpbWUoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRIb3VyXG4gICAgICAgICAgICAucGlwZShzaGFyZVJlcGxheSh7YnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWV9KSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE1pbnV0ZSA9IHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2VsZWN0ZWRNaW51dGVcbiAgICAgICAgICAgIC5waXBlKHNoYXJlUmVwbGF5KHtidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZX0pKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUGVyaW9kID0gdGhpcy50aW1lcGlja2VyU2VydmljZS5zZWxlY3RlZFBlcmlvZFxuICAgICAgICAgICAgLnBpcGUoc2hhcmVSZXBsYXkoe2J1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlfSkpO1xuXG4gICAgICAgIHRoaXMudGltZXBpY2tlckJhc2VSZWYudGltZVVwZGF0ZWQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2V0RGVmYXVsdFRpbWUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25Ib3VyQ2hhbmdlKGhvdXI6IENsb2NrRmFjZVRpbWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5ob3VyID0gaG91cjtcbiAgICAgICAgdGhpcy5vblRpbWVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBvbkhvdXJTZWxlY3RlZChob3VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdXJzT25seSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaW1lVW5pdChUaW1lVW5pdC5NSU5VVEUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXBpY2tlckJhc2VSZWYuaG91clNlbGVjdGVkLm5leHQoaG91cik7XG4gICAgfVxuXG4gICAgb25NaW51dGVDaGFuZ2UobWludXRlOiBDbG9ja0ZhY2VUaW1lKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2UubWludXRlID0gbWludXRlO1xuICAgICAgICB0aGlzLm9uVGltZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVBlcmlvZChwZXJpb2Q6IFRpbWVQZXJpb2QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyU2VydmljZS5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMub25UaW1lQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGltZVVuaXQodW5pdDogVGltZVVuaXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUaW1lVW5pdCA9IHVuaXQ7XG4gICAgfVxuXG4gICAgc2V0VGltZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyQmFzZVJlZi50aW1lU2V0Lm5leHQodGhpcy50aW1lcGlja2VyU2VydmljZS5nZXRGdWxsVGltZSh0aGlzLmZvcm1hdCkpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGltZXBpY2tlckJhc2VSZWYuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBBbmltYXRpb25TdGF0ZS5MRUFWRTtcbiAgICB9XG5cbiAgICBhbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gQW5pbWF0aW9uU3RhdGUuTEVBVkUpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXBpY2tlckJhc2VSZWYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdFRpbWUodGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlclNlcnZpY2Uuc2V0RGVmYXVsdFRpbWVJZkF2YWlsYWJsZShcbiAgICAgICAgICAgIHRpbWUsIHRoaXMubWluVGltZSwgdGhpcy5tYXhUaW1lLCB0aGlzLmZvcm1hdCwgdGhpcy5taW51dGVzR2FwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmluZVRpbWUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1pblRpbWUgPSB0aGlzLm1pblRpbWU7XG5cbiAgICAgICAgaWYgKG1pblRpbWUgJiYgIXRoaXMudGltZSkge1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IFRpbWVBZGFwdGVyLmZyb21EYXRlVGltZVRvU3RyaW5nKG1pblRpbWUsIHRoaXMuZm9ybWF0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0VGltZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25UaW1lQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lID0gVGltZUFkYXB0ZXIudG9Mb2NhbGVUaW1lU3RyaW5nKHRoaXMudGltZXBpY2tlclNlcnZpY2UuZ2V0RnVsbFRpbWUodGhpcy5mb3JtYXQpLCB7XG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRpbWVwaWNrZXJCYXNlUmVmLnRpbWVDaGFuZ2VkLmVtaXQodGltZSk7XG4gICAgfVxuXG59XG4iXX0=