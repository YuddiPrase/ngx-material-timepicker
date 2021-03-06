import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ActiveHourPipe = /** @class */ (function () {
    function ActiveHourPipe() {
    }
    ActiveHourPipe.prototype.transform = function (hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    };
    ActiveHourPipe = tslib_1.__decorate([
        Pipe({
            name: 'activeHour'
        })
    ], ActiveHourPipe);
    return ActiveHourPipe;
}());
export { ActiveHourPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWhvdXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL2FjdGl2ZS1ob3VyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBQUE7SUFVQSxDQUFDO0lBUkcsa0NBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxXQUFtQixFQUFFLG1CQUE0QjtRQUNyRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksbUJBQW1CLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksS0FBSyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQVJRLGNBQWM7UUFIMUIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQztPQUNXLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnYWN0aXZlSG91cidcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlSG91clBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybShob3VyOiBudW1iZXIsIGN1cnJlbnRIb3VyOiBudW1iZXIsIGlzQ2xvY2tGYWNlRGlzYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGhvdXIgPT0gbnVsbCB8fCBpc0Nsb2NrRmFjZURpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaG91ciA9PT0gY3VycmVudEhvdXI7XG4gICAgfVxuXG59XG4iXX0=