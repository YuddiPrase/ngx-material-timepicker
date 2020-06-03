import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var DomService = /** @class */ (function () {
    function DomService(cfr, appRef, injector, document) {
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    DomService.prototype.appendTimepickerToBody = function (timepicker, config) {
        var _this = this;
        this.componentRef = this.cfr.resolveComponentFactory(timepicker).create(this.injector);
        Object.keys(config).forEach(function (key) { return _this.componentRef.instance[key] = config[key]; });
        this.appRef.attachView(this.componentRef.hostView);
        var domElement = this.componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
    };
    DomService.prototype.destroyTimepicker = function () {
        this.componentRef.destroy();
        this.appRef.detachView(this.componentRef.hostView);
    };
    DomService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DomService_Factory() { return new DomService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.DOCUMENT, 8)); }, token: DomService, providedIn: "root" });
    DomService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver,
            ApplicationRef,
            Injector, Object])
    ], DomService);
    return DomService;
}());
export { DomService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtdGltZXBpY2tlci9zZXJ2aWNlcy9kb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGNBQWMsRUFDZCx3QkFBd0IsRUFHeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsUUFBUSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBUzNDO0lBSUksb0JBQW9CLEdBQTZCLEVBQzdCLE1BQXNCLEVBQ3RCLFFBQWtCLEVBQ1ksUUFBYTtRQUgzQyxRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ1ksYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUMvRCxDQUFDO0lBRUQsMkNBQXNCLEdBQXRCLFVBQXVCLFVBQXlELEVBQUUsTUFBd0I7UUFBMUcsaUJBV0M7UUFWRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsSUFBTSxVQUFVLEdBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBcUU7YUFDbkgsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O0lBMUJRLFVBQVU7UUFIdEIsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztRQVFlLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUhoQix3QkFBd0I7WUFDckIsY0FBYztZQUNaLFFBQVE7T0FON0IsVUFBVSxDQTJCdEI7cUJBL0NEO0NBK0NDLEFBM0JELElBMkJDO1NBM0JZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFwcGxpY2F0aW9uUmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxuICAgIEluamVjdCxcbiAgICBJbmplY3RhYmxlLFxuICAgIEluamVjdG9yLFxuICAgIE9wdGlvbmFsLFxuICAgIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudFxufSBmcm9tICcuLi9jb21wb25lbnRzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lci9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvdGltZXBpY2tlci1jb25maWcuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Tmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIH1cblxuICAgIGFwcGVuZFRpbWVwaWNrZXJUb0JvZHkodGltZXBpY2tlcjogVHlwZTxOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+LCBjb25maWc6IFRpbWVwaWNrZXJDb25maWcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aW1lcGlja2VyKS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGtleSA9PiB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gY29uZmlnW2tleV0pO1xuXG4gICAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+KVxuICAgICAgICAgICAgLnJvb3ROb2Rlc1swXTtcblxuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZGVzdHJveVRpbWVwaWNrZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxufVxuIl19