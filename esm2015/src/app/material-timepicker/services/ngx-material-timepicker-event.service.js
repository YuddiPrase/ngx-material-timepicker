import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
let NgxMaterialTimepickerEventService = class NgxMaterialTimepickerEventService {
    constructor() {
        this.backdropClickSubject = new Subject();
        this.keydownEventSubject = new Subject();
    }
    get backdropClick() {
        return this.backdropClickSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    get keydownEvent() {
        return this.keydownEventSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    dispatchEvent(event) {
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
    }
};
NgxMaterialTimepickerEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });
NgxMaterialTimepickerEventService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxMaterialTimepickerEventService);
export { NgxMaterialTimepickerEventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzdDLElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBSDlDO1FBS1kseUJBQW9CLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUQsd0JBQW1CLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7S0F1QnZFO0lBckJHLElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFpQztRQUMzQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDaEIsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQWEsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBZ0IsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELE1BQU07WUFDVjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0NBRUosQ0FBQTs7QUExQlksaUNBQWlDO0lBSDdDLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7R0FDVyxpQ0FBaUMsQ0EwQjdDO1NBMUJZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRXZlbnRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFja2Ryb3BDbGlja1N1YmplY3Q6IFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHByaXZhdGUga2V5ZG93bkV2ZW50U3ViamVjdDogU3ViamVjdDxLZXlib2FyZEV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBnZXQgYmFja2Ryb3BDbGljaygpOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2Ryb3BDbGlja1N1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShzaGFyZVJlcGxheSh7YnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWV9KSk7XG4gICAgfVxuXG4gICAgZ2V0IGtleWRvd25FdmVudCgpOiBPYnNlcnZhYmxlPEtleWJvYXJkRXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5ZG93bkV2ZW50U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKHNoYXJlUmVwbGF5KHtidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZX0pKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJqZWN0Lm5leHQoPE1vdXNlRXZlbnQ+ZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAna2V5ZG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlkb3duRXZlbnRTdWJqZWN0Lm5leHQoPEtleWJvYXJkRXZlbnQ+ZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHN1Y2ggZXZlbnQgdHlwZScpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=