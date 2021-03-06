import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
var NgxMaterialTimepickerEventService = /** @class */ (function () {
    function NgxMaterialTimepickerEventService() {
        this.backdropClickSubject = new Subject();
        this.keydownEventSubject = new Subject();
    }
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "backdropClick", {
        get: function () {
            return this.backdropClickSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "keydownEvent", {
        get: function () {
            return this.keydownEventSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerEventService.prototype.dispatchEvent = function (event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next(event);
                break;
            case 'keydown':
                this.keydownEventSubject.next(event);
                break;
            default:
                throw new Error('no such event type');
        }
    };
    NgxMaterialTimepickerEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });
    NgxMaterialTimepickerEventService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerEventService);
    return NgxMaterialTimepickerEventService;
}());
export { NgxMaterialTimepickerEventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzdDO0lBSEE7UUFLWSx5QkFBb0IsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxRCx3QkFBbUIsR0FBMkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQXVCdkU7SUFyQkcsc0JBQUksNERBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkRBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7OztPQUFBO0lBRUQseURBQWEsR0FBYixVQUFjLEtBQWlDO1FBQzNDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBYSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFnQixLQUFLLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7O0lBeEJRLGlDQUFpQztRQUg3QyxVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csaUNBQWlDLENBMEI3Qzs0Q0FqQ0Q7Q0FpQ0MsQUExQkQsSUEwQkM7U0ExQlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYWNrZHJvcENsaWNrU3ViamVjdDogU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBrZXlkb3duRXZlbnRTdWJqZWN0OiBTdWJqZWN0PEtleWJvYXJkRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGdldCBiYWNrZHJvcENsaWNrKCk6IE9ic2VydmFibGU8TW91c2VFdmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZHJvcENsaWNrU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKHNoYXJlUmVwbGF5KHtidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZX0pKTtcbiAgICB9XG5cbiAgICBnZXQga2V5ZG93bkV2ZW50KCk6IE9ic2VydmFibGU8S2V5Ym9hcmRFdmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlkb3duRXZlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoc2hhcmVSZXBsYXkoe2J1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlfSkpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YmplY3QubmV4dCg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrZXlkb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWRvd25FdmVudFN1YmplY3QubmV4dCg8S2V5Ym9hcmRFdmVudD5ldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCBldmVudCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==