import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let NgxMaterialTimepickerContentComponent = class NgxMaterialTimepickerContentComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NgxMaterialTimepickerContentComponent.prototype, "appendToInput", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxMaterialTimepickerContentComponent.prototype, "inputElement", void 0);
NgxMaterialTimepickerContentComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-material-timepicker-content',
        template: "<div [ngxAppendToInput]=\"inputElement\" *ngIf=\"appendToInput;else timepickerModal\">\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</div>\n\n<ng-template #timepickerModal>\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</ng-template>\n\n<ng-template #timepickerOutlet>\n    <ng-content></ng-content>\n</ng-template>\n"
    })
], NgxMaterialTimepickerContentComponent);
export { NgxMaterialTimepickerContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9jb21wb25lbnRzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRlbnQvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpELElBQWEscUNBQXFDLEdBQWxELE1BQWEscUNBQXFDO0NBR2pELENBQUE7QUFGWTtJQUFSLEtBQUssRUFBRTs7NEVBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzsyRUFBbUI7QUFGbEIscUNBQXFDO0lBSmpELFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsMGRBQStEO0tBQ2xFLENBQUM7R0FDVyxxQ0FBcUMsQ0FHakQ7U0FIWSxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250ZW50Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBhcHBlbmRUb0lucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGlucHV0RWxlbWVudDogYW55O1xufVxuIl19