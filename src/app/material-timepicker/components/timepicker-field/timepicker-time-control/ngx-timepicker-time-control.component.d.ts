import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TimeUnit } from '../../../models/time-unit.enum';
import { TimeParserPipe } from '../../../pipes/time-parser.pipe';
export declare class NgxTimepickerTimeControlComponent implements OnChanges {
    private timeParser;
    time: number;
    min: number;
    max: number;
    placeholder: string;
    timeUnit: TimeUnit;
    disabled: boolean;
    isDefaultTimeSet: boolean;
    timeChanged: EventEmitter<number>;
    isFocused: boolean;
    private previousTime;
    constructor(timeParser: TimeParserPipe);
    ngOnChanges(changes: SimpleChanges): void;
    changeTime(event: any): void;
    increase(): void;
    decrease(): void;
    onFocus(): void;
    onBlur(): void;
    onModelChange(value: string): void;
    private changeTimeIfValid;
}
