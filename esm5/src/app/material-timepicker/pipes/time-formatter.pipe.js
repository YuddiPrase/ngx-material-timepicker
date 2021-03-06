import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { TimeUnit } from '../models/time-unit.enum';
import { DateTime } from 'luxon';
var TimeFormatterPipe = /** @class */ (function () {
    function TimeFormatterPipe() {
    }
    TimeFormatterPipe.prototype.transform = function (time, timeUnit) {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case TimeUnit.HOUR:
                return DateTime.fromObject({ hour: +time }).toFormat('HH');
            case TimeUnit.MINUTE:
                return DateTime.fromObject({ minute: +time }).toFormat('mm');
            default:
                throw new Error('no such time unit');
        }
    };
    TimeFormatterPipe = tslib_1.__decorate([
        Pipe({
            name: 'timeFormatter'
        })
    ], TimeFormatterPipe);
    return TimeFormatterPipe;
}());
export { TimeFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL3RpbWUtZm9ybWF0dGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBS2pDO0lBQUE7SUFnQkEsQ0FBQztJQWRHLHFDQUFTLEdBQVQsVUFBVSxJQUFxQixFQUFFLFFBQWtCO1FBQy9DLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDaEIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0Q7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQWRRLGlCQUFpQjtRQUg3QixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFDO09BQ1csaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndGltZUZvcm1hdHRlcidcbn0pXG5leHBvcnQgY2xhc3MgVGltZUZvcm1hdHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh0aW1lOiBudW1iZXIgfCBzdHJpbmcsIHRpbWVVbml0OiBUaW1lVW5pdCk6IGFueSB7XG4gICAgICAgIGlmICh0aW1lID09IG51bGwgfHwgdGltZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGltZVVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgVGltZVVuaXQuSE9VUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdCh7aG91cjogK3RpbWV9KS50b0Zvcm1hdCgnSEgnKTtcbiAgICAgICAgICAgIGNhc2UgVGltZVVuaXQuTUlOVVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KHttaW51dGU6ICt0aW1lfSkudG9Gb3JtYXQoJ21tJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCB0aW1lIHVuaXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19