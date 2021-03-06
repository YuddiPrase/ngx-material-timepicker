import { PipeTransform } from '@angular/core';
import { TimeUnit } from '../models/time-unit.enum';
export declare class TimeParserPipe implements PipeTransform {
    private locale;
    private readonly numberingSystem;
    constructor(locale: string);
    transform(time: string | number, timeUnit?: TimeUnit): number | string;
    private parseTime;
}
