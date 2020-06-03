import * as tslib_1 from "tslib";
import { Inject, Pipe } from '@angular/core';
import { TIME_LOCALE } from '../tokens/time-locale.token';
import { TimeUnit } from '../models/time-unit.enum';
import { DateTime } from 'luxon';
var TimeLocalizerPipe = /** @class */ (function () {
    function TimeLocalizerPipe(locale) {
        this.locale = locale;
    }
    TimeLocalizerPipe.prototype.transform = function (time, timeUnit, isKeyboardEnabled) {
        if (isKeyboardEnabled === void 0) { isKeyboardEnabled = false; }
        if (time == null || time === '') {
            return '';
        }
        switch (timeUnit) {
            case TimeUnit.HOUR: {
                var format = (time === 0 || isKeyboardEnabled) ? 'HH' : 'H';
                return this.formatTime('hour', time, format);
            }
            case TimeUnit.MINUTE:
                return this.formatTime('minute', time, 'mm');
            default:
                throw new Error("There is no Time Unit with type " + timeUnit);
        }
    };
    TimeLocalizerPipe.prototype.formatTime = function (timeMeasure, time, format) {
        var _a;
        try {
            return DateTime.fromObject((_a = {}, _a[timeMeasure] = +time, _a)).setLocale(this.locale).toFormat(format);
        }
        catch (_b) {
            throw new Error("Cannot format provided time - " + time + " to locale - " + this.locale);
        }
    };
    TimeLocalizerPipe = tslib_1.__decorate([
        Pipe({
            name: 'timeLocalizer'
        }),
        tslib_1.__param(0, Inject(TIME_LOCALE)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TimeLocalizerPipe);
    return TimeLocalizerPipe;
}());
export { TimeLocalizerPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1sb2NhbGl6ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL3RpbWUtbG9jYWxpemVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFPakM7SUFFSSwyQkFBeUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdkQsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFxQixFQUFFLFFBQWtCLEVBQUUsaUJBQXlCO1FBQXpCLGtDQUFBLEVBQUEseUJBQXlCO1FBQzFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzlELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakQ7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBbUMsUUFBVSxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDO0lBRU8sc0NBQVUsR0FBbEIsVUFBbUIsV0FBd0IsRUFBRSxJQUFxQixFQUFFLE1BQWM7O1FBQzlFLElBQUk7WUFDQSxPQUFPLFFBQVEsQ0FBQyxVQUFVLFdBQUUsR0FBQyxXQUFXLElBQUcsQ0FBQyxJQUFJLE1BQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RjtRQUFDLFdBQU07WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFpQyxJQUFJLHFCQUFnQixJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7U0FDdkY7SUFDTCxDQUFDO0lBNUJRLGlCQUFpQjtRQUg3QixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFDO1FBR2UsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztPQUZ2QixpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTdCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRJTUVfTE9DQUxFIH0gZnJvbSAnLi4vdG9rZW5zL3RpbWUtbG9jYWxlLnRva2VuJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG50eXBlIFRpbWVNZWFzdXJlID0gJ2hvdXInIHwgJ21pbnV0ZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndGltZUxvY2FsaXplcidcbn0pXG5leHBvcnQgY2xhc3MgVGltZUxvY2FsaXplclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoVElNRV9MT0NBTEUpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odGltZTogbnVtYmVyIHwgc3RyaW5nLCB0aW1lVW5pdDogVGltZVVuaXQsIGlzS2V5Ym9hcmRFbmFibGVkID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGltZSA9PSBudWxsIHx8IHRpbWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRpbWVVbml0KSB7XG4gICAgICAgICAgICBjYXNlIFRpbWVVbml0LkhPVVI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAodGltZSA9PT0gMCB8fCBpc0tleWJvYXJkRW5hYmxlZCkgPyAnSEgnIDogJ0gnO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpbWUoJ2hvdXInLCB0aW1lLCBmb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBUaW1lVW5pdC5NSU5VVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VGltZSgnbWludXRlJywgdGltZSwgJ21tJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gVGltZSBVbml0IHdpdGggdHlwZSAke3RpbWVVbml0fWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXRUaW1lKHRpbWVNZWFzdXJlOiBUaW1lTWVhc3VyZSwgdGltZTogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdCh7W3RpbWVNZWFzdXJlXTogK3RpbWV9KS5zZXRMb2NhbGUodGhpcy5sb2NhbGUpLnRvRm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZm9ybWF0IHByb3ZpZGVkIHRpbWUgLSAke3RpbWV9IHRvIGxvY2FsZSAtICR7dGhpcy5sb2NhbGV9YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=