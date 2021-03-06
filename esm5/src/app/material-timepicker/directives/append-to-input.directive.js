import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
var AppendToInputDirective = /** @class */ (function () {
    function AppendToInputDirective(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(AppendToInputDirective.prototype, "inputCords", {
        get: function () {
            return this.inputElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppendToInputDirective.prototype, "direction", {
        get: function () {
            var height = this.element.offsetHeight;
            var _a = this._inputCords, bottom = _a.bottom, top = _a.top;
            var isElementFit = (window && window.innerHeight) - bottom < height;
            var isTop = isElementFit && top > height;
            var isCenter = isElementFit && top < height;
            if (isTop) {
                return 'top';
            }
            else if (isCenter) {
                return 'center';
            }
            return 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    AppendToInputDirective.prototype.ngAfterViewInit = function () {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    };
    AppendToInputDirective.prototype.changePosition = function () {
        var _a = this.inputCords, bottom = _a.bottom, top = _a.top;
        var y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', y + "px");
    };
    AppendToInputDirective.prototype.append = function () {
        var _a = this._inputCords, left = _a.left, bottom = _a.bottom, top = _a.top;
        var y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', left + "px");
        this.setStyle('top', y + "px");
    };
    AppendToInputDirective.prototype.setStyle = function (style, value) {
        this.renderer.setStyle(this.element, style, value);
    };
    AppendToInputDirective.prototype.defineElementYByDirection = function (inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
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
    return AppendToInputDirective;
}());
export { AppendToInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLXRvLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2RpcmVjdGl2ZXMvYXBwZW5kLXRvLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3JHO0lBUUksZ0NBQVksVUFBbUMsRUFDM0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFZLDhDQUFVO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSw2Q0FBUzthQUFyQjtZQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUEscUJBQWdDLEVBQS9CLGtCQUFNLEVBQUUsWUFBdUIsQ0FBQztZQUN2QyxJQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0RSxJQUFNLEtBQUssR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUMzQyxJQUFNLFFBQVEsR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUU5QyxJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPLEtBQUssQ0FBQzthQUNoQjtpQkFBTSxJQUFJLFFBQVEsRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUM7YUFDbkI7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELGdEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR0QsK0NBQWMsR0FBZDtRQUNVLElBQUEsb0JBQStCLEVBQTlCLGtCQUFNLEVBQUUsWUFBc0IsQ0FBQztRQUN0QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFLLENBQUMsT0FBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLHVDQUFNLEdBQWQ7UUFDVSxJQUFBLHFCQUFzQyxFQUFyQyxjQUFJLEVBQUUsa0JBQU0sRUFBRSxZQUF1QixDQUFDO1FBQzdDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUssSUFBSSxPQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBSyxDQUFDLE9BQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyx5Q0FBUSxHQUFoQixVQUFpQixLQUFhLEVBQUUsS0FBYTtRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sMERBQXlCLEdBQWpDLFVBQWtDLFFBQWdCLEVBQUUsV0FBbUI7UUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZQUMzQixPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUMvQzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDckMsT0FBTyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFoRTBCO1FBQTFCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7Z0VBQW1CO0lBc0M3QztRQURDLFlBQVksQ0FBQyxlQUFlLENBQUM7Ozs7Z0VBSzdCO0lBNUNRLHNCQUFzQjtRQUhsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7aURBUzBCLFVBQVU7WUFDSixTQUFTO09BVDlCLHNCQUFzQixDQW1FbEM7SUFBRCw2QkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnR5cGUgVGltZXBpY2tlckRpcmVjdGlvbiA9ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4QXBwZW5kVG9JbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIEFwcGVuZFRvSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgnbmd4QXBwZW5kVG9JbnB1dCcpIGlucHV0RWxlbWVudDogYW55O1xuXG4gICAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBUaW1lcGlja2VyRGlyZWN0aW9uO1xuICAgIHByaXZhdGUgX2lucHV0Q29yZHM6IENsaWVudFJlY3Q7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaW5wdXRDb3JkcygpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGRpcmVjdGlvbigpOiBUaW1lcGlja2VyRGlyZWN0aW9uIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qge2JvdHRvbSwgdG9wfSA9IHRoaXMuX2lucHV0Q29yZHM7XG4gICAgICAgIGNvbnN0IGlzRWxlbWVudEZpdCA9ICh3aW5kb3cgJiYgd2luZG93LmlubmVySGVpZ2h0KSAtIGJvdHRvbSA8IGhlaWdodDtcbiAgICAgICAgY29uc3QgaXNUb3AgPSBpc0VsZW1lbnRGaXQgJiYgdG9wID4gaGVpZ2h0O1xuICAgICAgICBjb25zdCBpc0NlbnRlciA9IGlzRWxlbWVudEZpdCAmJiB0b3AgPCBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKGlzVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDZW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2VudGVyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pbnB1dENvcmRzID0gdGhpcy5pbnB1dENvcmRzO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcblxuICAgICAgICB0aGlzLmFwcGVuZCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIGNoYW5nZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7Ym90dG9tLCB0b3B9ID0gdGhpcy5pbnB1dENvcmRzO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5kZWZpbmVFbGVtZW50WUJ5RGlyZWN0aW9uKHRvcCwgYm90dG9tKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgndG9wJywgYCR7eX1weGApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7bGVmdCwgYm90dG9tLCB0b3B9ID0gdGhpcy5faW5wdXRDb3JkcztcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuZGVmaW5lRWxlbWVudFlCeURpcmVjdGlvbih0b3AsIGJvdHRvbSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdHlsZSgncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgnbGVmdCcsIGAke2xlZnR9cHhgKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgndG9wJywgYCR7eX1weGApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3R5bGUoc3R5bGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudCwgc3R5bGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmluZUVsZW1lbnRZQnlEaXJlY3Rpb24oaW5wdXRUb3A6IG51bWJlciwgaW5wdXRCb3R0b206IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRUb3AgLSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFRvcCAtICh0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0Qm90dG9tO1xuICAgIH1cbn1cbiJdfQ==