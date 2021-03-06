import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let ActiveHourPipe = class ActiveHourPipe {
    transform(hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    }
};
ActiveHourPipe = tslib_1.__decorate([
    Pipe({
        name: 'activeHour'
    })
], ActiveHourPipe);
export { ActiveHourPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWhvdXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL2FjdGl2ZS1ob3VyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFdkIsU0FBUyxDQUFDLElBQVksRUFBRSxXQUFtQixFQUFFLG1CQUE0QjtRQUNyRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksbUJBQW1CLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksS0FBSyxXQUFXLENBQUM7SUFDaEMsQ0FBQztDQUVKLENBQUE7QUFWWSxjQUFjO0lBSDFCLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxZQUFZO0tBQ3JCLENBQUM7R0FDVyxjQUFjLENBVTFCO1NBVlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdhY3RpdmVIb3VyJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVIb3VyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKGhvdXI6IG51bWJlciwgY3VycmVudEhvdXI6IG51bWJlciwgaXNDbG9ja0ZhY2VEaXNhYmxlZDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoaG91ciA9PSBudWxsIHx8IGlzQ2xvY2tGYWNlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBob3VyID09PSBjdXJyZW50SG91cjtcbiAgICB9XG5cbn1cbiJdfQ==