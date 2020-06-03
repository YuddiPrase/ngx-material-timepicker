import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgxMaterialTimepickerEventService } from './services/ngx-material-timepicker-event.service';
import { filter, takeUntil } from 'rxjs/operators';
import { DomService } from './services/dom.service';
import { NgxMaterialTimepickerContainerComponent } from './components/ngx-material-timepicker-container/ngx-material-timepicker-container.component';
const ESCAPE = 27;
let NgxMaterialTimepickerComponent = class NgxMaterialTimepickerComponent {
    constructor(eventService, domService) {
        this.eventService = eventService;
        this.domService = domService;
        this.timeUpdated = new Subject();
        this.isEsc = true;
        this.hoursOnly = false;
        this.timeSet = new EventEmitter();
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.unsubscribe = new Subject();
    }
    /**
     * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
     */
    set ngxMaterialTimepickerTheme(theme) {
        console.warn(`'ngxMaterialTimepickerTheme' is deprecated. Use 'theme' instead`);
        this._ngxMaterialTimepickerTheme = theme;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
    }
    get format() {
        return this.timepickerInput ? this.timepickerInput.format : this._format;
    }
    set minutesGap(gap) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }
    get minutesGap() {
        return this._minutesGap;
    }
    get minTime() {
        return this.timepickerInput && this.timepickerInput.min;
    }
    get maxTime() {
        return this.timepickerInput && this.timepickerInput.max;
    }
    get disabled() {
        return this.timepickerInput && this.timepickerInput.disabled;
    }
    get time() {
        return this.timepickerInput && this.timepickerInput.value;
    }
    get inputElement() {
        return this.timepickerInput && this.timepickerInput.element;
    }
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    }
    open() {
        this.domService.appendTimepickerToBody(NgxMaterialTimepickerContainerComponent, {
            timepickerBaseRef: this,
            time: this.time,
            defaultTime: this.defaultTime,
            maxTime: this.maxTime,
            minTime: this.minTime,
            format: this.format,
            minutesGap: this.minutesGap,
            disableAnimation: this.disableAnimation,
            cancelBtnTmpl: this.cancelBtnTmpl,
            confirmBtnTmpl: this.confirmBtnTmpl,
            editableHintTmpl: this.editableHintTmpl,
            disabled: this.disabled,
            enableKeyboardInput: this.enableKeyboardInput,
            preventOverlayClick: this.preventOverlayClick,
            appendToInput: this.appendToInput,
            hoursOnly: this.hoursOnly,
            theme: this.theme || this._ngxMaterialTimepickerTheme,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement
        });
        this.opened.next();
        this.subscribeToEvents();
    }
    close() {
        this.domService.destroyTimepicker();
        this.closed.next();
        this.unsubscribeFromEvents();
    }
    updateTime(time) {
        this.timeUpdated.next(time);
    }
    subscribeToEvents() {
        merge(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(filter(e => e.keyCode === ESCAPE && this.isEsc)))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => this.close());
    }
    unsubscribeFromEvents() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "cancelBtnTmpl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "editableHintTmpl", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "confirmBtnTmpl", void 0);
tslib_1.__decorate([
    Input('ESC'),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "isEsc", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "enableKeyboardInput", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "preventOverlayClick", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "disableAnimation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "appendToInput", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "hoursOnly", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NgxMaterialTimepickerComponent.prototype, "defaultTime", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NgxMaterialTimepickerComponent.prototype, "timepickerClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "theme", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NgxMaterialTimepickerComponent.prototype, "format", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NgxMaterialTimepickerComponent.prototype, "minutesGap", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "timeSet", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "opened", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "closed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "hourSelected", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "timeChanged", void 0);
NgxMaterialTimepickerComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-material-timepicker',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [NgxMaterialTimepickerEventService,
        DomService])
], NgxMaterialTimepickerComponent);
export { NgxMaterialTimepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQ0gsdUNBQXVDLEVBQzFDLE1BQU0sNEZBQTRGLENBQUM7QUFJcEcsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBTWxCLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBMkR2QyxZQUFvQixZQUErQyxFQUMvQyxVQUFzQjtRQUR0QixpQkFBWSxHQUFaLFlBQVksQ0FBbUM7UUFDL0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTFEMUMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBS3RCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFLbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQW1DakIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU0zQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFJcEMsQ0FBQztJQTdDRDs7T0FFRztJQUVILElBQUksMEJBQTBCLENBQUMsS0FBaUM7UUFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUdELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM3RSxDQUFDO0lBR0QsSUFBSSxVQUFVLENBQUMsR0FBVztRQUN0QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQWtCRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFnQixDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFnQixDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE1BQU0sS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsdUNBQXVDLEVBQUU7WUFDNUUsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQzdDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsMkJBQTJCO1lBQ3JELGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8saUJBQWlCO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8scUJBQXFCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBQ0osQ0FBQTtBQXpJWTtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsV0FBVztxRUFBTztBQUNqQztJQUFSLEtBQUssRUFBRTtzQ0FBbUIsV0FBVzt3RUFBTztBQUNwQztJQUFSLEtBQUssRUFBRTtzQ0FBaUIsV0FBVztzRUFBTztBQUM3QjtJQUFiLEtBQUssQ0FBQyxLQUFLLENBQUM7OzZEQUFjO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzsyRUFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7OzJFQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTs7d0VBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFOztxRUFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7O2lFQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7bUVBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOzt1RUFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7OzZEQUFtQztBQUszQztJQURDLEtBQUssRUFBRTs7O2dGQUlQO0FBR0Q7SUFEQyxLQUFLLEVBQUU7Ozs0REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzs7Z0VBT1A7QUFNUztJQUFULE1BQU0sRUFBRTs7K0RBQXNDO0FBQ3JDO0lBQVQsTUFBTSxFQUFFOzs4REFBbUM7QUFDbEM7SUFBVCxNQUFNLEVBQUU7OzhEQUFtQztBQUNsQztJQUFULE1BQU0sRUFBRTs7b0VBQTJDO0FBQzFDO0lBQVQsTUFBTSxFQUFFOzttRUFBMEM7QUFuRDFDLDhCQUE4QjtJQUoxQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSxFQUFFO0tBQ2YsQ0FBQzs2Q0E0RG9DLGlDQUFpQztRQUNuQyxVQUFVO0dBNURqQyw4QkFBOEIsQ0E2STFDO1NBN0lZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlckV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LXRpbWVwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgRG9tU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG9tLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lci9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVwaWNrZXJSZWYgfSBmcm9tICcuL21vZGVscy90aW1lcGlja2VyLXJlZi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUgfSBmcm9tICcuL21vZGVscy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10aGVtZS5pbnRlcmZhY2UnO1xuXG5jb25zdCBFU0NBUEUgPSAyNztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcicsXG4gICAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBUaW1lcGlja2VyUmVmIHtcblxuICAgIHRpbWVVcGRhdGVkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgQElucHV0KCkgY2FuY2VsQnRuVG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG4gICAgQElucHV0KCkgZWRpdGFibGVIaW50VG1wbDogVGVtcGxhdGVSZWY8Tm9kZT47XG4gICAgQElucHV0KCkgY29uZmlybUJ0blRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIEBJbnB1dCgnRVNDJykgaXNFc2MgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGVuYWJsZUtleWJvYXJkSW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHJldmVudE92ZXJsYXlDbGljazogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBkaXNhYmxlQW5pbWF0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvSW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaG91cnNPbmx5ID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGVmYXVsdFRpbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aW1lcGlja2VyQ2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aGVtZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWU7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgdmVyc2lvbiA1LjEuMS4gV2lsbCBiZSBkZWxldGVkIG9uIHZlcnNpb24gNi4wLjAuIFVzZSBASW5wdXQoKSB0aGVtZSBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUodGhlbWU6IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJ25neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lJyBpcyBkZXByZWNhdGVkLiBVc2UgJ3RoZW1lJyBpbnN0ZWFkYCk7XG4gICAgICAgIHRoaXMuX25neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lID0gdGhlbWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgZm9ybWF0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUgPT09IDI0ID8gMjQgOiAxMjtcbiAgICB9XG5cbiAgICBnZXQgZm9ybWF0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCA/IHRoaXMudGltZXBpY2tlcklucHV0LmZvcm1hdCA6IHRoaXMuX2Zvcm1hdDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtaW51dGVzR2FwKGdhcDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChnYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdhcCA9IE1hdGguZmxvb3IoZ2FwKTtcbiAgICAgICAgdGhpcy5fbWludXRlc0dhcCA9IGdhcCA8PSA1OSA/IGdhcCA6IDE7XG4gICAgfVxuXG4gICAgZ2V0IG1pbnV0ZXNHYXAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbnV0ZXNHYXA7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIHRpbWVTZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIGhvdXJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHJpdmF0ZSBfbWludXRlc0dhcDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Zvcm1hdDogbnVtYmVyO1xuICAgIHByaXZhdGUgX25neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZTtcbiAgICBwcml2YXRlIHRpbWVwaWNrZXJJbnB1dDogVGltZXBpY2tlckRpcmVjdGl2ZTtcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IG1pblRpbWUoKTogRGF0ZVRpbWUge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgKHRoaXMudGltZXBpY2tlcklucHV0Lm1pbiBhcyBEYXRlVGltZSk7XG4gICAgfVxuXG4gICAgZ2V0IG1heFRpbWUoKTogRGF0ZVRpbWUge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgKHRoaXMudGltZXBpY2tlcklucHV0Lm1heCBhcyBEYXRlVGltZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgJiYgdGhpcy50aW1lcGlja2VySW5wdXQuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmIHRoaXMudGltZXBpY2tlcklucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpbnB1dEVsZW1lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmIHRoaXMudGltZXBpY2tlcklucHV0LmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyB0aW1lcGlja2VyLlxuICAgICAqIGlucHV0IC0gVGhlIHRpbWVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIHRpbWVwaWNrZXJcbiAgICAgKi9cbiAgICByZWdpc3RlcklucHV0KGlucHV0OiBUaW1lcGlja2VyRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVwaWNrZXJJbnB1dCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0EgVGltZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lcGlja2VySW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBvcGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvbVNlcnZpY2UuYXBwZW5kVGltZXBpY2tlclRvQm9keShOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIHRpbWVwaWNrZXJCYXNlUmVmOiB0aGlzLFxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgICAgICAgZGVmYXVsdFRpbWU6IHRoaXMuZGVmYXVsdFRpbWUsXG4gICAgICAgICAgICBtYXhUaW1lOiB0aGlzLm1heFRpbWUsXG4gICAgICAgICAgICBtaW5UaW1lOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgbWludXRlc0dhcDogdGhpcy5taW51dGVzR2FwLFxuICAgICAgICAgICAgZGlzYWJsZUFuaW1hdGlvbjogdGhpcy5kaXNhYmxlQW5pbWF0aW9uLFxuICAgICAgICAgICAgY2FuY2VsQnRuVG1wbDogdGhpcy5jYW5jZWxCdG5UbXBsLFxuICAgICAgICAgICAgY29uZmlybUJ0blRtcGw6IHRoaXMuY29uZmlybUJ0blRtcGwsXG4gICAgICAgICAgICBlZGl0YWJsZUhpbnRUbXBsOiB0aGlzLmVkaXRhYmxlSGludFRtcGwsXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIGVuYWJsZUtleWJvYXJkSW5wdXQ6IHRoaXMuZW5hYmxlS2V5Ym9hcmRJbnB1dCxcbiAgICAgICAgICAgIHByZXZlbnRPdmVybGF5Q2xpY2s6IHRoaXMucHJldmVudE92ZXJsYXlDbGljayxcbiAgICAgICAgICAgIGFwcGVuZFRvSW5wdXQ6IHRoaXMuYXBwZW5kVG9JbnB1dCxcbiAgICAgICAgICAgIGhvdXJzT25seTogdGhpcy5ob3Vyc09ubHksXG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSB8fCB0aGlzLl9uZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSxcbiAgICAgICAgICAgIHRpbWVwaWNrZXJDbGFzczogdGhpcy50aW1lcGlja2VyQ2xhc3MsXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9wZW5lZC5uZXh0KCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb21TZXJ2aWNlLmRlc3Ryb3lUaW1lcGlja2VyKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkLm5leHQoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21FdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUaW1lKHRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVVcGRhdGVkLm5leHQodGltZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgbWVyZ2UodGhpcy5ldmVudFNlcnZpY2UuYmFja2Ryb3BDbGljayxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmtleWRvd25FdmVudC5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMuaXNFc2MpKSlcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlRnJvbUV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcbiAgICB9XG59XG4iXX0=