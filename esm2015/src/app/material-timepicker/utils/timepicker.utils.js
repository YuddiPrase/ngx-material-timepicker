export function isSameOrAfter(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour >= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }
}
export function isSameOrBefore(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour <= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }
}
export function isBetween(time, before, after, unit = 'minutes') {
    if (unit === 'hours') {
        return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
    }
    if (unit === 'minutes') {
        return isSameOrBefore(time, after) && isSameOrAfter(time, before);
    }
}
export function isDigit(e) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, up, down
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return true;
    }
    return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3V0aWxzL3RpbWVwaWNrZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFjLEVBQUUsV0FBcUIsRUFBRSxPQUE0QixTQUFTO0lBQ3RHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztLQUN4QztJQUNELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDcEY7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFjLEVBQUUsV0FBcUIsRUFBRSxPQUE0QixTQUFTO0lBQ3ZHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztLQUN4QztJQUNELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDckY7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFjLEVBQUUsTUFBZ0IsRUFBRSxLQUFlLEVBQUUsT0FBNEIsU0FBUztJQUM5RyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDbEIsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNqRjtJQUNELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNyRTtBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQWdCO0lBQ3BDLCtDQUErQztJQUMvQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzdDLG9CQUFvQjtRQUNwQixDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMvRCxvQkFBb0I7UUFDcEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDL0Qsb0JBQW9CO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQy9ELDBDQUEwQztRQUMxQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQUU7UUFFdEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKHRpbWU6IERhdGVUaW1lLCBjb21wYXJlV2l0aDogRGF0ZVRpbWUsIHVuaXQ6ICdob3VycycgfCAnbWludXRlcycgPSAnbWludXRlcycpOiBib29sZWFuIHtcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXJzJykge1xuICAgICAgICByZXR1cm4gdGltZS5ob3VyID49IGNvbXBhcmVXaXRoLmhvdXI7XG4gICAgfVxuICAgIGlmICh1bml0ID09PSAnbWludXRlcycpIHtcbiAgICAgICAgcmV0dXJuIHRpbWUuaGFzU2FtZShjb21wYXJlV2l0aCwgdW5pdCkgfHwgdGltZS52YWx1ZU9mKCkgPiBjb21wYXJlV2l0aC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUodGltZTogRGF0ZVRpbWUsIGNvbXBhcmVXaXRoOiBEYXRlVGltZSwgdW5pdDogJ2hvdXJzJyB8ICdtaW51dGVzJyA9ICdtaW51dGVzJyk6IGJvb2xlYW4ge1xuICAgIGlmICh1bml0ID09PSAnaG91cnMnKSB7XG4gICAgICAgIHJldHVybiB0aW1lLmhvdXIgPD0gY29tcGFyZVdpdGguaG91cjtcbiAgICB9XG4gICAgaWYgKHVuaXQgPT09ICdtaW51dGVzJykge1xuICAgICAgICByZXR1cm4gdGltZS5oYXNTYW1lKGNvbXBhcmVXaXRoLCB1bml0KSB8fCB0aW1lLnZhbHVlT2YoKSA8PSBjb21wYXJlV2l0aC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHRpbWU6IERhdGVUaW1lLCBiZWZvcmU6IERhdGVUaW1lLCBhZnRlcjogRGF0ZVRpbWUsIHVuaXQ6ICdob3VycycgfCAnbWludXRlcycgPSAnbWludXRlcycpOiBib29sZWFuIHtcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXJzJykge1xuICAgICAgICByZXR1cm4gaXNTYW1lT3JCZWZvcmUodGltZSwgYWZ0ZXIsIHVuaXQpICYmIGlzU2FtZU9yQWZ0ZXIodGltZSwgYmVmb3JlLCB1bml0KTtcbiAgICB9XG4gICAgaWYgKHVuaXQgPT09ICdtaW51dGVzJykge1xuICAgICAgICByZXR1cm4gaXNTYW1lT3JCZWZvcmUodGltZSwgYWZ0ZXIpICYmIGlzU2FtZU9yQWZ0ZXIodGltZSwgYmVmb3JlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBBbGxvdzogYmFja3NwYWNlLCBkZWxldGUsIHRhYiwgZXNjYXBlLCBlbnRlclxuICAgIGlmIChbNDYsIDgsIDksIDI3LCAxM10uc29tZShuID0+IG4gPT09IGUua2V5Q29kZSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwvY21kK0FcbiAgICAgICAgKGUua2V5Q29kZSA9PSA2NSAmJiAoZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZSkpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsL2NtZCtDXG4gICAgICAgIChlLmtleUNvZGUgPT0gNjcgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybC9jbWQrWFxuICAgICAgICAoZS5rZXlDb2RlID09IDg4ICYmIChlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlKSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHQsIHVwLCBkb3duXG4gICAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDQwKSkge1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gISgoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpICYmIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpKTtcbn1cbiJdfQ==