import { TimeAdapter } from '../services/time-adapter';
import { TimeFormat } from '../models/time-format.enum';
import { DateTime } from 'luxon';
export function getHours(format) {
    return Array(format).fill(1).map((v, i) => {
        const angleStep = 30;
        const time = v + i;
        const angle = angleStep * time;
        return { time: time === 24 ? 0 : time, angle };
    });
}
export function disableHours(hours, config) {
    if (config.min || config.max) {
        return hours.map(value => {
            const hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);
            const currentTime = DateTime.fromObject({ hour }).toFormat(TimeFormat.TWELVE);
            return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
        });
    }
    return hours;
}
export function getMinutes(gap = 1) {
    const minutesCount = 60;
    const angleStep = 360 / minutesCount;
    const minutes = [];
    for (let i = 0; i < minutesCount; i++) {
        const angle = angleStep * i;
        if (i % gap === 0) {
            minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
        }
    }
    return minutes;
}
export function disableMinutes(minutes, selectedHour, config) {
    if (config.min || config.max) {
        const hour = TimeAdapter.formatHour(selectedHour, config.format, config.period);
        return minutes.map(value => {
            const currentTime = DateTime.fromObject({ hour, minute: value.time }).toFormat(TimeFormat.TWELVE);
            return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
        });
    }
    return minutes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci10aW1lLnV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvdXRpbHMvdGltZXBpY2tlci10aW1lLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUdqQyxNQUFNLFVBQVUsUUFBUSxDQUFDLE1BQWM7SUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixNQUFNLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFzQixFQUFFLE1BQTBCO0lBQzNFLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1FBRTFCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xILE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUUseUJBQ08sS0FBSyxJQUNSLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFDdEY7UUFDTixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDOUIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7SUFDckMsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUM3RDtLQUNKO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBd0IsRUFBRSxZQUFvQixFQUFFLE1BQTBCO0lBQ3JHLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1FBRTFCLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhHLHlCQUNPLEtBQUssSUFDUixRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQ3hGO1FBQ04sQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG9ja0ZhY2VUaW1lIH0gZnJvbSAnLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHsgVGltZUZvcm1hdCB9IGZyb20gJy4uL21vZGVscy90aW1lLWZvcm1hdC5lbnVtJztcbmltcG9ydCB7IERpc2FibGVkVGltZUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9kaXNhYmxlZC10aW1lLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzKGZvcm1hdDogbnVtYmVyKTogQ2xvY2tGYWNlVGltZVtdIHtcbiAgICByZXR1cm4gQXJyYXkoZm9ybWF0KS5maWxsKDEpLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzMDtcbiAgICAgICAgY29uc3QgdGltZSA9IHYgKyBpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IGFuZ2xlU3RlcCAqIHRpbWU7XG4gICAgICAgIHJldHVybiB7dGltZTogdGltZSA9PT0gMjQgPyAwIDogdGltZSwgYW5nbGV9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUhvdXJzKGhvdXJzOiBDbG9ja0ZhY2VUaW1lW10sIGNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogQ2xvY2tGYWNlVGltZVtdIHtcbiAgICBpZiAoY29uZmlnLm1pbiB8fCBjb25maWcubWF4KSB7XG5cbiAgICAgICAgcmV0dXJuIGhvdXJzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29uZmlnLmZvcm1hdCA9PT0gMjQgPyB2YWx1ZS50aW1lIDogVGltZUFkYXB0ZXIuZm9ybWF0SG91cih2YWx1ZS50aW1lLCBjb25maWcuZm9ybWF0LCBjb25maWcucGVyaW9kKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZVRpbWUuZnJvbU9iamVjdCh7aG91cn0pLnRvRm9ybWF0KFRpbWVGb3JtYXQuVFdFTFZFKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIVRpbWVBZGFwdGVyLmlzVGltZUF2YWlsYWJsZShjdXJyZW50VGltZSwgY29uZmlnLm1pbiwgY29uZmlnLm1heCwgJ2hvdXJzJylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW51dGVzKGdhcCA9IDEpOiBDbG9ja0ZhY2VUaW1lW10ge1xuICAgIGNvbnN0IG1pbnV0ZXNDb3VudCA9IDYwO1xuICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDM2MCAvIG1pbnV0ZXNDb3VudDtcbiAgICBjb25zdCBtaW51dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbnV0ZXNDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gYW5nbGVTdGVwICogaTtcbiAgICAgICAgaWYgKGkgJSBnYXAgPT09IDApIHtcbiAgICAgICAgICAgIG1pbnV0ZXMucHVzaCh7dGltZTogaSwgYW5nbGU6IGFuZ2xlICE9PSAwID8gYW5nbGUgOiAzNjB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWludXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVNaW51dGVzKG1pbnV0ZXM6IENsb2NrRmFjZVRpbWVbXSwgc2VsZWN0ZWRIb3VyOiBudW1iZXIsIGNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5taW4gfHwgY29uZmlnLm1heCkge1xuXG4gICAgICAgIGNvbnN0IGhvdXIgPSBUaW1lQWRhcHRlci5mb3JtYXRIb3VyKHNlbGVjdGVkSG91ciwgY29uZmlnLmZvcm1hdCwgY29uZmlnLnBlcmlvZCk7XG5cbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZVRpbWUuZnJvbU9iamVjdCh7aG91ciwgbWludXRlOiB2YWx1ZS50aW1lfSkudG9Gb3JtYXQoVGltZUZvcm1hdC5UV0VMVkUpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhVGltZUFkYXB0ZXIuaXNUaW1lQXZhaWxhYmxlKGN1cnJlbnRUaW1lLCBjb25maWcubWluLCBjb25maWcubWF4LCAnbWludXRlcycpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnV0ZXM7XG59XG4iXX0=