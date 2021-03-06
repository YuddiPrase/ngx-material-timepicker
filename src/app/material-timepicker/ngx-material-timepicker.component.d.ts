import { EventEmitter, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxMaterialTimepickerEventService } from './services/ngx-material-timepicker-event.service';
import { TimepickerDirective } from './directives/ngx-timepicker.directive';
import { DateTime } from 'luxon';
import { DomService } from './services/dom.service';
import { TimepickerRef } from './models/timepicker-ref.interface';
import { NgxMaterialTimepickerTheme } from './models/ngx-material-timepicker-theme.interface';
export declare class NgxMaterialTimepickerComponent implements TimepickerRef {
    private eventService;
    private domService;
    timeUpdated: Subject<string>;
    cancelBtnTmpl: TemplateRef<Node>;
    editableHintTmpl: TemplateRef<Node>;
    confirmBtnTmpl: TemplateRef<Node>;
    isEsc: boolean;
    enableKeyboardInput: boolean;
    preventOverlayClick: boolean;
    disableAnimation: boolean;
    appendToInput: boolean;
    hoursOnly: boolean;
    defaultTime: string;
    timepickerClass: string;
    theme: NgxMaterialTimepickerTheme;
    /**
     * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
     */
    ngxMaterialTimepickerTheme: NgxMaterialTimepickerTheme;
    format: number;
    minutesGap: number;
    timeSet: EventEmitter<string>;
    opened: EventEmitter<null>;
    closed: EventEmitter<null>;
    hourSelected: EventEmitter<number>;
    timeChanged: EventEmitter<string>;
    private _minutesGap;
    private _format;
    private _ngxMaterialTimepickerTheme;
    private timepickerInput;
    private unsubscribe;
    constructor(eventService: NgxMaterialTimepickerEventService, domService: DomService);
    readonly minTime: DateTime;
    readonly maxTime: DateTime;
    readonly disabled: boolean;
    readonly time: string;
    readonly inputElement: any;
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input: TimepickerDirective): void;
    open(): void;
    close(): void;
    updateTime(time: string): void;
    private subscribeToEvents;
    private unsubscribeFromEvents;
}
