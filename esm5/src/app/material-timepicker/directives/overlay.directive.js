import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
import { NgxMaterialTimepickerEventService } from '../services/ngx-material-timepicker-event.service';
var OverlayDirective = /** @class */ (function () {
    function OverlayDirective(eventService) {
        this.eventService = eventService;
    }
    OverlayDirective.prototype.onClick = function (e) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    };
    tslib_1.__decorate([
        Input('overlay'),
        tslib_1.__metadata("design:type", Boolean)
    ], OverlayDirective.prototype, "preventClick", void 0);
    tslib_1.__decorate([
        HostListener('click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], OverlayDirective.prototype, "onClick", null);
    OverlayDirective = tslib_1.__decorate([
        Directive({
            selector: '[overlay]'
        }),
        tslib_1.__metadata("design:paramtypes", [NgxMaterialTimepickerEventService])
    ], OverlayDirective);
    return OverlayDirective;
}());
export { OverlayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9kaXJlY3RpdmVzL292ZXJsYXkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFLcEc7SUFJSSwwQkFBb0IsWUFBK0M7UUFBL0MsaUJBQVksR0FBWixZQUFZLENBQW1DO0lBQ25FLENBQUM7SUFJRCxrQ0FBTyxHQUFQLFVBQVEsQ0FBTTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFaaUI7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7MERBQXVCO0lBT3hDO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O21EQU1qQztJQWRRLGdCQUFnQjtRQUg1QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztTQUN4QixDQUFDO2lEQUtvQyxpQ0FBaUM7T0FKMUQsZ0JBQWdCLENBZ0I1QjtJQUFELHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlckV2ZW50U2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW292ZXJsYXldJ1xufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5RGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgnb3ZlcmxheScpIHByZXZlbnRDbGljazogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGU6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbn1cbiJdfQ==