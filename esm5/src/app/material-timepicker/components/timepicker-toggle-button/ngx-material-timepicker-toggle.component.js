import * as tslib_1 from "tslib";
import { Component, ContentChild, Input } from '@angular/core';
import { NgxMaterialTimepickerToggleIconDirective } from '../../directives/ngx-material-timepicker-toggle-icon.directive';
import { NgxMaterialTimepickerComponent } from '../../ngx-material-timepicker.component';
var NgxMaterialTimepickerToggleComponent = /** @class */ (function () {
    function NgxMaterialTimepickerToggleComponent() {
    }
    Object.defineProperty(NgxMaterialTimepickerToggleComponent.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerToggleComponent.prototype.open = function (event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    };
    tslib_1.__decorate([
        Input('for'),
        tslib_1.__metadata("design:type", NgxMaterialTimepickerComponent)
    ], NgxMaterialTimepickerToggleComponent.prototype, "timepicker", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NgxMaterialTimepickerToggleComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        ContentChild(NgxMaterialTimepickerToggleIconDirective, { static: true }),
        tslib_1.__metadata("design:type", NgxMaterialTimepickerToggleIconDirective)
    ], NgxMaterialTimepickerToggleComponent.prototype, "customIcon", void 0);
    NgxMaterialTimepickerToggleComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-material-timepicker-toggle',
            template: "<button class=\"ngx-material-timepicker-toggle\" (click)=\"open($event)\" [disabled]=\"disabled\" type=\"button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" *ngIf=\"!customIcon\">\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n\n    <ng-content select=\"[ngxMaterialTimepickerToggleIcon]\"></ng-content>\n</button>\n",
            styles: [".ngx-material-timepicker-toggle{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle:focus{background-color:rgba(0,0,0,.07)}"]
        })
    ], NgxMaterialTimepickerToggleComponent);
    return NgxMaterialTimepickerToggleComponent;
}());
export { NgxMaterialTimepickerToggleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci10b2dnbGUtYnV0dG9uL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsd0NBQXdDLEVBQUMsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4SCxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQVF2RjtJQUFBO0lBdUJBLENBQUM7SUFsQkcsc0JBQUksMERBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BGLENBQUM7YUFFRCxVQUFhLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFVRCxtREFBSSxHQUFKLFVBQUssS0FBSztRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFwQmE7UUFBYixLQUFLLENBQUMsS0FBSyxDQUFDOzBDQUFhLDhCQUE4Qjs0RUFBQztJQUd6RDtRQURDLEtBQUssRUFBRTs7O3dFQUdQO0lBUXVFO1FBQXZFLFlBQVksQ0FBQyx3Q0FBd0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzswQ0FBYSx3Q0FBd0M7NEVBQUM7SUFmcEgsb0NBQW9DO1FBTmhELFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsNndCQUE0RDs7U0FFL0QsQ0FBQztPQUVXLG9DQUFvQyxDQXVCaEQ7SUFBRCwyQ0FBQztDQUFBLEFBdkJELElBdUJDO1NBdkJZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10b2dnbGUtaWNvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnR9IGZyb20gJy4uLy4uL25neC1tYXRlcmlhbC10aW1lcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdG9nZ2xlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgnZm9yJykgdGltZXBpY2tlcjogTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy50aW1lcGlja2VyLmRpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkKE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUljb25EaXJlY3RpdmUsIHtzdGF0aWM6IHRydWV9KSBjdXN0b21JY29uOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUb2dnbGVJY29uRGlyZWN0aXZlO1xuXG4gICAgb3BlbihldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50aW1lcGlja2VyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVwaWNrZXIub3BlbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=