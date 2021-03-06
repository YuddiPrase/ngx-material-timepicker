import { PipeTransform } from '@angular/core';
import { TimeUnit } from '../models/time-unit.enum';
export declare class TimeLocalizerPipe implements PipeTransform {
    private locale;
    constructor(locale: string);
    transform(time: number | string, timeUnit: TimeUnit, isKeyboardEnabled?: boolean): string;
    private formatTime;
}
