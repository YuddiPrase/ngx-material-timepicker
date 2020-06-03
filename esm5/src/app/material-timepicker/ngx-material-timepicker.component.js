import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgxMaterialTimepickerEventService } from './services/ngx-material-timepicker-event.service';
import { filter, takeUntil } from 'rxjs/operators';
import { DomService } from './services/dom.service';
import { NgxMaterialTimepickerContainerComponent } from './components/ngx-material-timepicker-container/ngx-material-timepicker-container.component';
var ESCAPE = 27;
var NgxMaterialTimepickerComponent = /** @class */ (function () {
    function NgxMaterialTimepickerComponent(eventService, domService) {
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
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", {
        /**
         * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
         */
        set: function (theme) {
            console.warn("'ngxMaterialTimepickerTheme' is deprecated. Use 'theme' instead");
            this._ngxMaterialTimepickerTheme = theme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "format", {
        get: function () {
            return this.timepickerInput ? this.timepickerInput.format : this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minutesGap", {
        get: function () {
            return this._minutesGap;
        },
        set: function (gap) {
            if (gap == null) {
                return;
            }
            gap = Math.floor(gap);
            this._minutesGap = gap <= 59 ? gap : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minTime", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "maxTime", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "disabled", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "time", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "inputElement", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.element;
        },
        enumerable: true,
        configurable: true
    });
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    NgxMaterialTimepickerComponent.prototype.registerInput = function (input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    };
    NgxMaterialTimepickerComponent.prototype.open = function () {
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
    };
    NgxMaterialTimepickerComponent.prototype.close = function () {
        this.domService.destroyTimepicker();
        this.closed.next();
        this.unsubscribeFromEvents();
    };
    NgxMaterialTimepickerComponent.prototype.updateTime = function (time) {
        this.timeUpdated.next(time);
    };
    NgxMaterialTimepickerComponent.prototype.subscribeToEvents = function () {
        var _this = this;
        merge(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(filter(function (e) { return e.keyCode === ESCAPE && _this.isEsc; })))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function () { return _this.close(); });
    };
    NgxMaterialTimepickerComponent.prototype.unsubscribeFromEvents = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
    return NgxMaterialTimepickerComponent;
}());
export { NgxMaterialTimepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQ0gsdUNBQXVDLEVBQzFDLE1BQU0sNEZBQTRGLENBQUM7QUFJcEcsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBTWxCO0lBMkRJLHdDQUFvQixZQUErQyxFQUMvQyxVQUFzQjtRQUR0QixpQkFBWSxHQUFaLFlBQVksQ0FBbUM7UUFDL0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTFEMUMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBS3RCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFLbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQW1DakIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLGdCQUFXLEdBQUcs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QUFVO09BNURqQyw4QkFBOEIsQ0E2STFDO0lBQUQscUNBQUM7Q0FBQSxBQTdJRCxJQTZJQztTQTdJWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaW1lcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC10aW1lcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RvbS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250YWluZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyUmVmIH0gZnJvbSAnLi9tb2RlbHMvdGltZXBpY2tlci1yZWYuaW50ZXJmYWNlJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lIH0gZnJvbSAnLi9tb2RlbHMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdGhlbWUuaW50ZXJmYWNlJztcblxuY29uc3QgRVNDQVBFID0gMjc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInLFxuICAgIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgVGltZXBpY2tlclJlZiB7XG5cbiAgICB0aW1lVXBkYXRlZCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0blRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIEBJbnB1dCgpIGVkaXRhYmxlSGludFRtcGw6IFRlbXBsYXRlUmVmPE5vZGU+O1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5UbXBsOiBUZW1wbGF0ZVJlZjxOb2RlPjtcbiAgICBASW5wdXQoJ0VTQycpIGlzRXNjID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBlbmFibGVLZXlib2FyZElucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXZlbnRPdmVybGF5Q2xpY2s6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZGlzYWJsZUFuaW1hdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhcHBlbmRUb0lucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhvdXJzT25seSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRlZmF1bHRUaW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGltZXBpY2tlckNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGhlbWU6IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIHZlcnNpb24gNS4xLjEuIFdpbGwgYmUgZGVsZXRlZCBvbiB2ZXJzaW9uIDYuMC4wLiBVc2UgQElucHV0KCkgdGhlbWUgaW5zdGVhZFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lKHRoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCduZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZScgaXMgZGVwcmVjYXRlZC4gVXNlICd0aGVtZScgaW5zdGVhZGApO1xuICAgICAgICB0aGlzLl9uZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSA9IHRoZW1lO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGZvcm1hdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlID09PSAyNCA/IDI0IDogMTI7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1hdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcGlja2VySW5wdXQgPyB0aGlzLnRpbWVwaWNrZXJJbnB1dC5mb3JtYXQgOiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbWludXRlc0dhcChnYXA6IG51bWJlcikge1xuICAgICAgICBpZiAoZ2FwID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnYXAgPSBNYXRoLmZsb29yKGdhcCk7XG4gICAgICAgIHRoaXMuX21pbnV0ZXNHYXAgPSBnYXAgPD0gNTkgPyBnYXAgOiAxO1xuICAgIH1cblxuICAgIGdldCBtaW51dGVzR2FwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW51dGVzR2FwO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSB0aW1lU2V0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBob3VyU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICBAT3V0cHV0KCkgdGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHByaXZhdGUgX21pbnV0ZXNHYXA6IG51bWJlcjtcbiAgICBwcml2YXRlIF9mb3JtYXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9uZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWU7XG4gICAgcHJpdmF0ZSB0aW1lcGlja2VySW5wdXQ6IFRpbWVwaWNrZXJEaXJlY3RpdmU7XG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50U2VydmljZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyRXZlbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZG9tU2VydmljZTogRG9tU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBtaW5UaW1lKCk6IERhdGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmICh0aGlzLnRpbWVwaWNrZXJJbnB1dC5taW4gYXMgRGF0ZVRpbWUpO1xuICAgIH1cblxuICAgIGdldCBtYXhUaW1lKCk6IERhdGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmICh0aGlzLnRpbWVwaWNrZXJJbnB1dC5tYXggYXMgRGF0ZVRpbWUpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlcklucHV0ICYmIHRoaXMudGltZXBpY2tlcklucHV0LmRpc2FibGVkO1xuICAgIH1cblxuICAgIGdldCB0aW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaW5wdXRFbGVtZW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVwaWNrZXJJbnB1dCAmJiB0aGlzLnRpbWVwaWNrZXJJbnB1dC5lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKiBSZWdpc3RlciBhbiBpbnB1dCB3aXRoIHRoaXMgdGltZXBpY2tlci5cbiAgICAgKiBpbnB1dCAtIFRoZSB0aW1lcGlja2VyIGlucHV0IHRvIHJlZ2lzdGVyIHdpdGggdGhpcyB0aW1lcGlja2VyXG4gICAgICovXG4gICAgcmVnaXN0ZXJJbnB1dChpbnB1dDogVGltZXBpY2tlckRpcmVjdGl2ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50aW1lcGlja2VySW5wdXQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdBIFRpbWVwaWNrZXIgY2FuIG9ubHkgYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXBpY2tlcklucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb21TZXJ2aWNlLmFwcGVuZFRpbWVwaWNrZXJUb0JvZHkoTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICB0aW1lcGlja2VyQmFzZVJlZjogdGhpcyxcbiAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgIGRlZmF1bHRUaW1lOiB0aGlzLmRlZmF1bHRUaW1lLFxuICAgICAgICAgICAgbWF4VGltZTogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgbWluVGltZTogdGhpcy5taW5UaW1lLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgIG1pbnV0ZXNHYXA6IHRoaXMubWludXRlc0dhcCxcbiAgICAgICAgICAgIGRpc2FibGVBbmltYXRpb246IHRoaXMuZGlzYWJsZUFuaW1hdGlvbixcbiAgICAgICAgICAgIGNhbmNlbEJ0blRtcGw6IHRoaXMuY2FuY2VsQnRuVG1wbCxcbiAgICAgICAgICAgIGNvbmZpcm1CdG5UbXBsOiB0aGlzLmNvbmZpcm1CdG5UbXBsLFxuICAgICAgICAgICAgZWRpdGFibGVIaW50VG1wbDogdGhpcy5lZGl0YWJsZUhpbnRUbXBsLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICBlbmFibGVLZXlib2FyZElucHV0OiB0aGlzLmVuYWJsZUtleWJvYXJkSW5wdXQsXG4gICAgICAgICAgICBwcmV2ZW50T3ZlcmxheUNsaWNrOiB0aGlzLnByZXZlbnRPdmVybGF5Q2xpY2ssXG4gICAgICAgICAgICBhcHBlbmRUb0lucHV0OiB0aGlzLmFwcGVuZFRvSW5wdXQsXG4gICAgICAgICAgICBob3Vyc09ubHk6IHRoaXMuaG91cnNPbmx5LFxuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUgfHwgdGhpcy5fbmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUsXG4gICAgICAgICAgICB0aW1lcGlja2VyQ2xhc3M6IHRoaXMudGltZXBpY2tlckNsYXNzLFxuICAgICAgICAgICAgaW5wdXRFbGVtZW50OiB0aGlzLmlucHV0RWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcGVuZWQubmV4dCgpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9tU2VydmljZS5kZXN0cm95VGltZXBpY2tlcigpO1xuICAgICAgICB0aGlzLmNsb3NlZC5uZXh0KCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGltZSh0aW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lVXBkYXRlZC5uZXh0KHRpbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIG1lcmdlKHRoaXMuZXZlbnRTZXJ2aWNlLmJhY2tkcm9wQ2xpY2ssXG4gICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5rZXlkb3duRXZlbnQucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmlzRXNjKSkpXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gICAgfVxufVxuIl19