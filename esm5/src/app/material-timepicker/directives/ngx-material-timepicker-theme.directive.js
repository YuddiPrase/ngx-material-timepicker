import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
var NgxMaterialTimepickerThemeDirective = /** @class */ (function () {
    function NgxMaterialTimepickerThemeDirective(elementRef) {
        this.element = elementRef.nativeElement;
    }
    NgxMaterialTimepickerThemeDirective.prototype.ngAfterViewInit = function () {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    };
    NgxMaterialTimepickerThemeDirective.prototype.setTheme = function (theme) {
        for (var val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === 'string') {
                    for (var prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this.element.style.setProperty("--" + camelCaseToDash(prop), theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    };
    tslib_1.__decorate([
        Input('ngxMaterialTimepickerTheme'),
        tslib_1.__metadata("design:type", Object)
    ], NgxMaterialTimepickerThemeDirective.prototype, "theme", void 0);
    NgxMaterialTimepickerThemeDirective = tslib_1.__decorate([
        Directive({ selector: '[ngxMaterialTimepickerTheme]' }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], NgxMaterialTimepickerThemeDirective);
    return NgxMaterialTimepickerThemeDirective;
}());
export { NgxMaterialTimepickerThemeDirective };
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdGhlbWUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvZGlyZWN0aXZlcy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10aGVtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJMUU7SUFNSSw2Q0FBWSxVQUFzQjtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELDZEQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTyxzREFBUSxHQUFoQixVQUFpQixLQUFLO1FBQ2xCLEtBQUssSUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ2hDLEtBQUssSUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUN0QixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFLLGVBQWUsQ0FBQyxJQUFJLENBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDN0U7cUJBQ0o7b0JBQ0QsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBRUo7SUFDTCxDQUFDO0lBN0JvQztRQUFwQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7O3NFQUFtQztJQUY5RCxtQ0FBbUM7UUFEL0MsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLDhCQUE4QixFQUFDLENBQUM7aURBTzFCLFVBQVU7T0FOekIsbUNBQW1DLENBZ0MvQztJQUFELDBDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FoQ1ksbUNBQW1DO0FBa0NoRCxTQUFTLGVBQWUsQ0FBQyxLQUFLO0lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWV9IGZyb20gJy4uL21vZGVscy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10aGVtZS5pbnRlcmZhY2UnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZV0nfSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCduZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZScpIHRoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZTtcblxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRoZW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZSk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBpbiB0aGVtZSkge1xuICAgICAgICAgICAgaWYgKHRoZW1lLmhhc093blByb3BlcnR5KHZhbCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZW1lW3ZhbF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoZW1lLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y2FtZWxDYXNlVG9EYXNoKHByb3ApfWAsIHRoZW1lW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUodGhlbWVbdmFsXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoKG15U3RyKSB7XG4gICAgcmV0dXJuIG15U3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG4iXX0=