import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var MinutesFormatterPipe = /** @class */ (function () {
    function MinutesFormatterPipe() {
    }
    MinutesFormatterPipe.prototype.transform = function (minute, gap) {
        if (gap === void 0) { gap = 5; }
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    };
    MinutesFormatterPipe = tslib_1.__decorate([
        Pipe({
            name: 'minutesFormatter'
        })
    ], MinutesFormatterPipe);
    return MinutesFormatterPipe;
}());
export { MinutesFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlcy1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL21pbnV0ZXMtZm9ybWF0dGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBS2xEO0lBQUE7SUFVQSxDQUFDO0lBUkcsd0NBQVMsR0FBVCxVQUFVLE1BQWMsRUFBRSxHQUFPO1FBQVAsb0JBQUEsRUFBQSxPQUFPO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFSUSxvQkFBb0I7UUFIaEMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGtCQUFrQjtTQUMzQixDQUFDO09BQ1csb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ21pbnV0ZXNGb3JtYXR0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE1pbnV0ZXNGb3JtYXR0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0obWludXRlOiBudW1iZXIsIGdhcCA9IDUpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAoIW1pbnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtaW51dGUgJSBnYXAgPT09IDAgPyBtaW51dGUgOiAnJztcbiAgICB9XG5cbn1cbiJdfQ==