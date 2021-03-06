import { EventEmitter } from '@angular/core';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimeParserPipe } from '../../pipes/time-parser.pipe';
export declare class NgxMaterialTimepickerDialControlComponent {
    private timeParserPipe;
    previousTime: number | string;
    timeList: ClockFaceTime[];
    timeUnit: TimeUnit;
    time: string;
    isActive: boolean;
    isEditable: boolean;
    minutesGap: number;
    disabled: boolean;
    timeUnitChanged: EventEmitter<TimeUnit>;
    timeChanged: EventEmitter<ClockFaceTime>;
    focused: EventEmitter<null>;
    unfocused: EventEmitter<null>;
    constructor(timeParserPipe: TimeParserPipe);
    private readonly selectedTime;
    saveTimeAndChangeTimeUnit(event: FocusEvent, unit: TimeUnit): void;
    updateTime(): void;
    changeTimeByKeyboard(e: any): void;
    onModelChange(value: string): void;
    private changeTimeByArrow;
}
