import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
let AppendToInputDirective = class AppendToInputDirective {
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    get inputCords() {
        return this.inputElement.getBoundingClientRect();
    }
    get direction() {
        const height = this.element.offsetHeight;
        const { bottom, top } = this._inputCords;
        const isElementFit = (window && window.innerHeight) - bottom < height;
        const isTop = isElementFit && top > height;
        const isCenter = isElementFit && top < height;
        if (isTop) {
            return 'top';
        }
        else if (isCenter) {
            return 'center';
        }
        return 'bottom';
    }
    ngAfterViewInit() {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    }
    changePosition() {
        const { bottom, top } = this.inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', `${y}px`);
    }
    append() {
        const { left, bottom, top } = this._inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', `${left}px`);
        this.setStyle('top', `${y}px`);
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.element, style, value);
    }
    defineElementYByDirection(inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
    }
};
tslib_1.__decorate([
    Input('ngxAppendToInput'),
    tslib_1.__metadata("design:type", Object)
], AppendToInputDirective.prototype, "inputElement", void 0);
tslib_1.__decorate([
    HostListener('window:scroll'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppendToInputDirective.prototype, "changePosition", null);
AppendToInputDirective = tslib_1.__decorate([
    Directive({
        selector: '[ngxAppendToInput]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2])
], AppendToInputDirective);
export { AppendToInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLXRvLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2RpcmVjdGl2ZXMvYXBwZW5kLXRvLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3JHLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBUS9CLFlBQVksVUFBbUMsRUFDM0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQVksVUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBWSxTQUFTO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE1BQU0sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0RSxNQUFNLEtBQUssR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUMzQyxNQUFNLFFBQVEsR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUU5QyxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDakIsT0FBTyxRQUFRLENBQUM7U0FDbkI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFakMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHRCxjQUFjO1FBQ1YsTUFBTSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxNQUFNO1FBQ1YsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8seUJBQXlCLENBQUMsUUFBZ0IsRUFBRSxXQUFtQjtRQUNuRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQy9DO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxPQUFPLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKLENBQUE7QUFqRThCO0lBQTFCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7NERBQW1CO0FBc0M3QztJQURDLFlBQVksQ0FBQyxlQUFlLENBQUM7Ozs7NERBSzdCO0FBNUNRLHNCQUFzQjtJQUhsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO0tBQ2pDLENBQUM7NkNBUzBCLFVBQVU7UUFDSixTQUFTO0dBVDlCLHNCQUFzQixDQW1FbEM7U0FuRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxudHlwZSBUaW1lcGlja2VyRGlyZWN0aW9uID0gJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hBcHBlbmRUb0lucHV0XSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwZW5kVG9JbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCduZ3hBcHBlbmRUb0lucHV0JykgaW5wdXRFbGVtZW50OiBhbnk7XG5cbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IFRpbWVwaWNrZXJEaXJlY3Rpb247XG4gICAgcHJpdmF0ZSBfaW5wdXRDb3JkczogQ2xpZW50UmVjdDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBpbnB1dENvcmRzKCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgZGlyZWN0aW9uKCk6IFRpbWVwaWNrZXJEaXJlY3Rpb24ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCB7Ym90dG9tLCB0b3B9ID0gdGhpcy5faW5wdXRDb3JkcztcbiAgICAgICAgY29uc3QgaXNFbGVtZW50Rml0ID0gKHdpbmRvdyAmJiB3aW5kb3cuaW5uZXJIZWlnaHQpIC0gYm90dG9tIDwgaGVpZ2h0O1xuICAgICAgICBjb25zdCBpc1RvcCA9IGlzRWxlbWVudEZpdCAmJiB0b3AgPiBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IGlzQ2VudGVyID0gaXNFbGVtZW50Rml0ICYmIHRvcCA8IGhlaWdodDtcblxuICAgICAgICBpZiAoaXNUb3ApIHtcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcbiAgICAgICAgfSBlbHNlIGlmIChpc0NlbnRlcikge1xuICAgICAgICAgICAgcmV0dXJuICdjZW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lucHV0Q29yZHMgPSB0aGlzLmlucHV0Q29yZHM7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcpXG4gICAgY2hhbmdlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHtib3R0b20sIHRvcH0gPSB0aGlzLmlucHV0Q29yZHM7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmRlZmluZUVsZW1lbnRZQnlEaXJlY3Rpb24odG9wLCBib3R0b20pO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCd0b3AnLCBgJHt5fXB4YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHtsZWZ0LCBib3R0b20sIHRvcH0gPSB0aGlzLl9pbnB1dENvcmRzO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5kZWZpbmVFbGVtZW50WUJ5RGlyZWN0aW9uKHRvcCwgYm90dG9tKTtcblxuICAgICAgICB0aGlzLnNldFN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCdsZWZ0JywgYCR7bGVmdH1weGApO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCd0b3AnLCBgJHt5fXB4YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50LCBzdHlsZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmaW5lRWxlbWVudFlCeURpcmVjdGlvbihpbnB1dFRvcDogbnVtYmVyLCBpbnB1dEJvdHRvbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFRvcCAtIHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0VG9wIC0gKHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRCb3R0b207XG4gICAgfVxufVxuIl19