import { __decorate, __param, __metadata } from 'tslib';
import { defineInjectable, Injectable, inject, ComponentFactoryResolver, ApplicationRef, INJECTOR, Optional, Inject, Injector, InjectionToken, Input, HostListener, Component, EventEmitter, TemplateRef, Output, Directive, ContentChild, forwardRef, ElementRef, ChangeDetectionStrategy, ViewChild, Pipe, Renderer2, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, merge } from 'rxjs';
import { shareReplay, takeUntil, filter } from 'rxjs/operators';
import { trigger, transition, style, animate, sequence } from '@angular/animations';
import { DateTime, Info } from 'luxon';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

let NgxMaterialTimepickerEventService = class NgxMaterialTimepickerEventService {
    constructor() {
        this.backdropClickSubject = new Subject();
        this.keydownEventSubject = new Subject();
    }
    get backdropClick() {
        return this.backdropClickSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    get keydownEvent() {
        return this.keydownEventSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    dispatchEvent(event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next(event);
                break;
            case 'keydown':
                this.keydownEventSubject.next(event);
                break;
            default:
                throw new Error('no such event type');
        }
    }
};
NgxMaterialTimepickerEventService.ngInjectableDef = defineInjectable({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });
NgxMaterialTimepickerEventService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxMaterialTimepickerEventService);

let DomService = class DomService {
    constructor(cfr, appRef, injector, document) {
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    appendTimepickerToBody(timepicker, config) {
        this.componentRef = this.cfr.resolveComponentFactory(timepicker).create(this.injector);
        Object.keys(config).forEach(key => this.componentRef.instance[key] = config[key]);
        this.appRef.attachView(this.componentRef.hostView);
        const domElement = this.componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
    }
    destroyTimepicker() {
        this.componentRef.destroy();
        this.appRef.detachView(this.componentRef.hostView);
    }
};
DomService.ngInjectableDef = defineInjectable({ factory: function DomService_Factory() { return new DomService(inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(DOCUMENT, 8)); }, token: DomService, providedIn: "root" });
DomService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(3, Optional()), __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ComponentFactoryResolver,
        ApplicationRef,
        Injector, Object])
], DomService);

var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["HOUR"] = 0] = "HOUR";
    TimeUnit[TimeUnit["MINUTE"] = 1] = "MINUTE";
})(TimeUnit || (TimeUnit = {}));

var TimePeriod;
(function (TimePeriod) {
    TimePeriod["AM"] = "AM";
    TimePeriod["PM"] = "PM";
})(TimePeriod || (TimePeriod = {}));

var TimeFormat;
(function (TimeFormat) {
    TimeFormat["TWELVE"] = "hh:mm a";
    TimeFormat["TWELVE_SHORT"] = "h:m a";
    TimeFormat["TWENTY_FOUR"] = "HH:mm";
    TimeFormat["TWENTY_FOUR_SHORT"] = "H:m";
})(TimeFormat || (TimeFormat = {}));

function isSameOrAfter(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour >= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }
}
function isSameOrBefore(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour <= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }
}
function isBetween(time, before, after, unit = 'minutes') {
    if (unit === 'hours') {
        return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
    }
    if (unit === 'minutes') {
        return isSameOrBefore(time, after) && isSameOrAfter(time, before);
    }
}
function isDigit(e) {
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

// @dynamic
class TimeAdapter {
    static parseTime(time, opts) {
        const { numberingSystem, locale } = TimeAdapter.getLocaleOptionsByTime(time, opts);
        const isPeriodExist = time.split(' ').length === 2;
        const timeMask = isPeriodExist ? TimeFormat.TWELVE_SHORT : TimeFormat.TWENTY_FOUR_SHORT;
        return DateTime.fromFormat(time, timeMask, { numberingSystem, locale });
    }
    static formatTime(time, opts) {
        const { format } = opts;
        const parsedTime = TimeAdapter.parseTime(time, opts).setLocale(TimeAdapter.DEFAULT_LOCALE);
        if (format !== 24) {
            return parsedTime.toLocaleString(Object.assign({}, DateTime.TIME_SIMPLE, { hour12: format !== 24, numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM })).replace(/\u200E/g, '');
        }
        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, '');
    }
    static toLocaleTimeString(time, opts = {}) {
        const { format = TimeAdapter.DEFAULT_FORMAT, locale = TimeAdapter.DEFAULT_LOCALE } = opts;
        const timeFormat = Object.assign({}, DateTime.TIME_SIMPLE, { hour12: format !== 24 });
        const timeMask = (format === 24) ? TimeFormat.TWENTY_FOUR_SHORT : TimeFormat.TWELVE_SHORT;
        return DateTime.fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
    }
    static isTimeAvailable(time, min, max, granularity, minutesGap, format) {
        if (!time) {
            return;
        }
        const convertedTime = this.parseTime(time, { format });
        const minutes = convertedTime.minute;
        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        const isAfter = (min && !max)
            && isSameOrAfter(convertedTime, min, granularity);
        const isBefore = (max && !min)
            && isSameOrBefore(convertedTime, max, granularity);
        const between = (min && max)
            && isBetween(convertedTime, min, max, granularity);
        const isAvailable = !min && !max;
        return isAfter || isBefore || between || isAvailable;
    }
    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        const hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    }
    static fromDateTimeToString(time, format) {
        const timeFormat = format === 24 ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        return time.reconfigure({
            numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM,
            locale: TimeAdapter.DEFAULT_LOCALE
        }).toFormat(timeFormat);
    }
    static getLocaleOptionsByTime(time, opts) {
        const { numberingSystem, locale } = DateTime.local().setLocale(opts.locale).resolvedLocaleOpts();
        const localeConfig = { numberingSystem: numberingSystem, locale };
        const defaultConfig = { numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM, locale: TimeAdapter.DEFAULT_LOCALE };
        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    }
}
TimeAdapter.DEFAULT_FORMAT = 12;
TimeAdapter.DEFAULT_LOCALE = 'en-US';
TimeAdapter.DEFAULT_NUMBERING_SYSTEM = 'latn';

const DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
const DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
let NgxMaterialTimepickerService = class NgxMaterialTimepickerService {
    constructor() {
        this.hourSubject = new BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new BehaviorSubject(TimePeriod.AM);
    }
    set hour(hour) {
        this.hourSubject.next(hour);
    }
    get selectedHour() {
        return this.hourSubject.asObservable();
    }
    set minute(minute) {
        this.minuteSubject.next(minute);
    }
    get selectedMinute() {
        return this.minuteSubject.asObservable();
    }
    set period(period) {
        const isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
        if (isPeriodValid) {
            this.periodSubject.next(period);
        }
    }
    get selectedPeriod() {
        return this.periodSubject.asObservable();
    }
    setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    getFullTime(format) {
        const hour = this.hourSubject.getValue().time;
        const minute = this.minuteSubject.getValue().time;
        const period = format === 12 ? this.periodSubject.getValue() : '';
        const time = `${hour}:${minute} ${period}`.trim();
        return TimeAdapter.formatTime(time, { format });
    }
    setDefaultTime(time, format) {
        const defaultTime = TimeAdapter.parseTime(time, { format }).toJSDate();
        if (DateTime.fromJSDate(defaultTime).isValid) {
            const period = time.substr(time.length - 2).toUpperCase();
            const hour = defaultTime.getHours();
            this.hour = Object.assign({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = Object.assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    }
    resetTime() {
        this.hour = Object.assign({}, DEFAULT_HOUR);
        this.minute = Object.assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    }
};
NgxMaterialTimepickerService.ngInjectableDef = defineInjectable({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
NgxMaterialTimepickerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxMaterialTimepickerService);
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case TimePeriod.AM:
            return hour === 0 ? 12 : hour;
        case TimePeriod.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}

const TIME_LOCALE = new InjectionToken('TimeLocale');

var AnimationState;
(function (AnimationState) {
    AnimationState["ENTER"] = "enter";
    AnimationState["LEAVE"] = "leave";
})(AnimationState || (AnimationState = {}));
let NgxMaterialTimepickerContainerComponent = class NgxMaterialTimepickerContainerComponent {
    constructor(timepickerService, eventService, locale) {
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.unsubscribe = new Subject();
    }
    set defaultTime(time) {
        this.setDefaultTime(time);
    }
    onKeydown(e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    }
    ngOnInit() {
        this.animationState = !this.disableAnimation && AnimationState.ENTER;
        this.defineTime();
        this.selectedHour = this.timepickerService.selectedHour
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.selectedMinute = this.timepickerService.selectedMinute
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.selectedPeriod = this.timepickerService.selectedPeriod
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.timepickerBaseRef.timeUpdated.pipe(takeUntil(this.unsubscribe))
            .subscribe(this.setDefaultTime.bind(this));
    }
    onHourChange(hour) {
        this.timepickerService.hour = hour;
        this.onTimeChange();
    }
    onHourSelected(hour) {
        if (!this.hoursOnly) {
            this.changeTimeUnit(TimeUnit.MINUTE);
        }
        this.timepickerBaseRef.hourSelected.next(hour);
    }
    onMinuteChange(minute) {
        this.timepickerService.minute = minute;
        this.onTimeChange();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.onTimeChange();
    }
    changeTimeUnit(unit) {
        this.activeTimeUnit = unit;
    }
    setTime() {
        this.timepickerBaseRef.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    }
    close() {
        if (this.disableAnimation) {
            this.timepickerBaseRef.close();
            return;
        }
        this.animationState = AnimationState.LEAVE;
    }
    animationDone(event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.timepickerBaseRef.close();
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    setDefaultTime(time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, this.minTime, this.maxTime, this.format, this.minutesGap);
    }
    defineTime() {
        const minTime = this.minTime;
        if (minTime && !this.time) {
            const time = TimeAdapter.fromDateTimeToString(minTime, this.format);
            this.setDefaultTime(time);
        }
    }
    onTimeChange() {
        const time = TimeAdapter.toLocaleTimeString(this.timepickerService.getFullTime(this.format), {
            locale: this.locale,
            format: this.format
        });
        this.timepickerBaseRef.timeChanged.emit(time);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgxMaterialTimepickerContainerComponent.prototype, "defaultTime", null);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgxMaterialTimepickerContainerComponent.prototype, "onKeydown", null);
NgxMaterialTimepickerContainerComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-container',
        template: "<div class=\"timepicker-backdrop-overlay\" [overlay]=\"preventOverlayClick\"\n     [ngClass]=\"{'timepicker-backdrop-overlay--transparent': appendToInput}\"></div>\n<div class=\"timepicker-overlay\">\n    <ngx-material-timepicker-content [appendToInput]=\"appendToInput\"\n                                     [inputElement]=\"inputElement\"\n                                     [ngxMaterialTimepickerTheme]=\"theme\">\n        <div class=\"timepicker\"\n             [@timepicker]=\"animationState\"\n             (@timepicker.done)=\"animationDone($event)\"\n             [ngClass]=\"timepickerClass\">\n            <header class=\"timepicker__header\">\n                <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"(selectedHour | async)?.time\"\n                                              [minute]=\"(selectedMinute | async)?.time\"\n                                              [period]=\"selectedPeriod | async\"\n                                              [activeTimeUnit]=\"activeTimeUnit\"\n                                              [minTime]=\"minTime\"\n                                              [maxTime]=\"maxTime\"\n                                              [isEditable]=\"enableKeyboardInput\"\n                                              [editableHintTmpl]=\"editableHintTmpl\"\n                                              [minutesGap]=\"minutesGap\"\n                                              [hoursOnly]=\"hoursOnly\"\n                                              (periodChanged)=\"changePeriod($event)\"\n                                              (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                              (hourChanged)=\"onHourChange($event)\"\n                                              (minuteChanged)=\"onMinuteChange($event)\"\n                ></ngx-material-timepicker-dial>\n            </header>\n            <div class=\"timepicker__main-content\">\n                <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                    <div *ngSwitchCase=\"timeUnit.HOUR\">\n                        <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                               (hourChange)=\"onHourChange($event)\"\n                                                               [selectedHour]=\"selectedHour | async\"\n                                                               [minTime]=\"minTime\"\n                                                               [maxTime]=\"maxTime\"\n                                                               [format]=\"format\"\n                                                               (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                        <ng-template #ampmHours>\n                            <ngx-material-timepicker-12-hours-face\n                                (hourChange)=\"onHourChange($event)\"\n                                [selectedHour]=\"selectedHour | async\"\n                                [period]=\"selectedPeriod | async\"\n                                [minTime]=\"minTime\"\n                                [maxTime]=\"maxTime\"\n                                (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                        </ng-template>\n                    </div>\n                    <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                          [selectedMinute]=\"selectedMinute | async\"\n                                                          [selectedHour]=\"(selectedHour | async)?.time\"\n                                                          [minTime]=\"minTime\"\n                                                          [maxTime]=\"maxTime\"\n                                                          [format]=\"format\"\n                                                          [period]=\"selectedPeriod | async\"\n                                                          [minutesGap]=\"minutesGap\"\n                                                          (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n                </div>\n                <div class=\"timepicker__actions\">\n                    <div (click)=\"close()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                    </div>\n                    <div (click)=\"setTime()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ngx-material-timepicker-content>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
        animations: [
            trigger('timepicker', [
                transition(`* => ${AnimationState.ENTER}`, [
                    style({ transform: 'translateY(-30%)' }),
                    animate('0.2s ease-out', style({ transform: 'translateY(0)' }))
                ]),
                transition(`${AnimationState.ENTER} => ${AnimationState.LEAVE}`, [
                    style({ transform: 'translateY(0)', opacity: 1 }),
                    animate('0.2s ease-out', style({ transform: 'translateY(-30%)', opacity: 0 }))
                ])
            ])
        ],
        providers: [NgxMaterialTimepickerService],
        styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:#c3101e;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:#c3101e;--dial-editable-active-color:#c3101e;--dial-editable-background-color:#fff;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:#c3101e}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-backdrop-overlay--transparent{background-color:transparent}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
    }),
    __param(2, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [NgxMaterialTimepickerService,
        NgxMaterialTimepickerEventService, String])
], NgxMaterialTimepickerContainerComponent);

const ESCAPE = 27;
let NgxMaterialTimepickerComponent = class NgxMaterialTimepickerComponent {
    constructor(eventService, domService) {
        this.eventService = eventService;
        this.domService = domService;
        this.timeUpdated = new Subject();
        this.isEsc = true;
        this.hoursOnly = false;
        this.timeSet = new EventEmitter();
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.unsubscribe = new Subject();
    }
    /**
     * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
     */
    set ngxMaterialTimepickerTheme(theme) {
        console.warn(`'ngxMaterialTimepickerTheme' is deprecated. Use 'theme' instead`);
        this._ngxMaterialTimepickerTheme = theme;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
    }
    get format() {
        return this.timepickerInput ? this.timepickerInput.format : this._format;
    }
    set minutesGap(gap) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }
    get minutesGap() {
        return this._minutesGap;
    }
    get minTime() {
        return this.timepickerInput && this.timepickerInput.min;
    }
    get maxTime() {
        return this.timepickerInput && this.timepickerInput.max;
    }
    get disabled() {
        return this.timepickerInput && this.timepickerInput.disabled;
    }
    get time() {
        return this.timepickerInput && this.timepickerInput.value;
    }
    get inputElement() {
        return this.timepickerInput && this.timepickerInput.element;
    }
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    }
    open() {
        this.domService.appendTimepickerToBody(NgxMaterialTimepickerContainerComponent, {
            timepickerBaseRef: this,
            time: this.time,
            defaultTime: this.defaultTime,
            maxTime: this.maxTime,
            minTime: this.minTime,
            format: this.format,
            minutesGap: this.minutesGap,
            disableAnimation: this.disableAnimation,
            cancelBtnTmpl: this.cancelBtnTmpl,
            confirmBtnTmpl: this.confirmBtnTmpl,
            editableHintTmpl: this.editableHintTmpl,
            disabled: this.disabled,
            enableKeyboardInput: this.enableKeyboardInput,
            preventOverlayClick: this.preventOverlayClick,
            appendToInput: this.appendToInput,
            hoursOnly: this.hoursOnly,
            theme: this.theme || this._ngxMaterialTimepickerTheme,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement
        });
        this.opened.next();
        this.subscribeToEvents();
    }
    close() {
        this.domService.destroyTimepicker();
        this.closed.next();
        this.unsubscribeFromEvents();
    }
    updateTime(time) {
        this.timeUpdated.next(time);
    }
    subscribeToEvents() {
        merge(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(filter(e => e.keyCode === ESCAPE && this.isEsc)))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => this.close());
    }
    unsubscribeFromEvents() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "cancelBtnTmpl", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "editableHintTmpl", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxMaterialTimepickerComponent.prototype, "confirmBtnTmpl", void 0);
__decorate([
    Input('ESC'),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "isEsc", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "enableKeyboardInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "preventOverlayClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "disableAnimation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerComponent.prototype, "appendToInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "hoursOnly", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerComponent.prototype, "defaultTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerComponent.prototype, "timepickerClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "theme", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgxMaterialTimepickerComponent.prototype, "format", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgxMaterialTimepickerComponent.prototype, "minutesGap", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "timeSet", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "closed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "hourSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerComponent.prototype, "timeChanged", void 0);
NgxMaterialTimepickerComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker',
        template: ''
    }),
    __metadata("design:paramtypes", [NgxMaterialTimepickerEventService,
        DomService])
], NgxMaterialTimepickerComponent);

/* To override a default toggle icon */
let NgxMaterialTimepickerToggleIconDirective = class NgxMaterialTimepickerToggleIconDirective {
};
NgxMaterialTimepickerToggleIconDirective = __decorate([
    Directive({ selector: '[ngxMaterialTimepickerToggleIcon]' })
], NgxMaterialTimepickerToggleIconDirective);

let NgxMaterialTimepickerToggleComponent = class NgxMaterialTimepickerToggleComponent {
    get disabled() {
        return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    open(event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
};
__decorate([
    Input('for'),
    __metadata("design:type", NgxMaterialTimepickerComponent)
], NgxMaterialTimepickerToggleComponent.prototype, "timepicker", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgxMaterialTimepickerToggleComponent.prototype, "disabled", null);
__decorate([
    ContentChild(NgxMaterialTimepickerToggleIconDirective, { static: true }),
    __metadata("design:type", NgxMaterialTimepickerToggleIconDirective)
], NgxMaterialTimepickerToggleComponent.prototype, "customIcon", void 0);
NgxMaterialTimepickerToggleComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-toggle',
        template: "<button class=\"ngx-material-timepicker-toggle\" (click)=\"open($event)\" [disabled]=\"disabled\" type=\"button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" *ngIf=\"!customIcon\">\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n\n    <ng-content select=\"[ngxMaterialTimepickerToggleIcon]\"></ng-content>\n</button>\n",
        styles: [".ngx-material-timepicker-toggle{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle:focus{background-color:rgba(0,0,0,.07)}"]
    })
], NgxMaterialTimepickerToggleComponent);

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line
    useExisting: forwardRef(() => TimepickerDirective),
    multi: true
};
let TimepickerDirective = class TimepickerDirective {
    constructor(elementRef, locale) {
        this.elementRef = elementRef;
        this.locale = locale;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = () => {
        };
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.value = this._value;
            this._timepicker.updateTime(this._value);
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set min(value) {
        if (typeof value === 'string') {
            this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._min = value;
    }
    get min() {
        return this._min;
    }
    set max(value) {
        if (typeof value === 'string') {
            this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get max() {
        return this._max;
    }
    set timepicker(picker) {
        this.registerTimepicker(picker);
    }
    set value(value) {
        if (!value) {
            this._value = '';
            this.updateInputValue();
            return;
        }
        const time = TimeAdapter.formatTime(value, { locale: this.locale, format: this.format });
        const isAvailable = TimeAdapter.isTimeAvailable(time, this._min, this._max, 'minutes', this._timepicker.minutesGap, this._format);
        if (isAvailable) {
            this._value = time;
            this.updateInputValue();
            return;
        }
        console.warn('Selected time doesn\'t match min or max value');
    }
    get value() {
        if (!this._value) {
            return '';
        }
        return TimeAdapter.toLocaleTimeString(this._value, { format: this.format, locale: this.locale });
    }
    get element() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    set defaultTime(time) {
        this._timepicker.defaultTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
    }
    updateValue(value) {
        this.value = value;
        this.onChange(value);
    }
    ngOnChanges(changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    }
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }
    writeValue(value) {
        this.value = value;
        if (value) {
            this.defaultTime = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnDestroy() {
        this.timepickerSubscriptions.forEach(s => s.unsubscribe());
    }
    registerTimepicker(picker) {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe((time) => {
                this.value = time;
                this.onChange(this.value);
                this.onTouched();
            }));
            this.timepickerSubscriptions.push(this._timepicker.closed.subscribe(() => this.defaultTime = this._value));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    }
    updateInputValue() {
        this.elementRef.nativeElement.value = this.value;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TimepickerDirective.prototype, "format", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TimepickerDirective.prototype, "min", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TimepickerDirective.prototype, "max", null);
__decorate([
    Input('ngxTimepicker'),
    __metadata("design:type", NgxMaterialTimepickerComponent),
    __metadata("design:paramtypes", [NgxMaterialTimepickerComponent])
], TimepickerDirective.prototype, "timepicker", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TimepickerDirective.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TimepickerDirective.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TimepickerDirective.prototype, "disableClick", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TimepickerDirective.prototype, "onClick", null);
TimepickerDirective = __decorate([
    Directive({
        selector: '[ngxTimepicker]',
        providers: [VALUE_ACCESSOR],
        host: {
            '[disabled]': 'disabled',
            '(change)': 'updateValue($event.target.value)',
            '(blur)': 'onTouched()',
        },
    }),
    __param(1, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [ElementRef, String])
], TimepickerDirective);

let NgxMaterialTimepickerThemeDirective = class NgxMaterialTimepickerThemeDirective {
    constructor(elementRef) {
        this.element = elementRef.nativeElement;
    }
    ngAfterViewInit() {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    }
    setTheme(theme) {
        for (const val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === 'string') {
                    for (const prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this.element.style.setProperty(`--${camelCaseToDash(prop)}`, theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    }
};
__decorate([
    Input('ngxMaterialTimepickerTheme'),
    __metadata("design:type", Object)
], NgxMaterialTimepickerThemeDirective.prototype, "theme", void 0);
NgxMaterialTimepickerThemeDirective = __decorate([
    Directive({ selector: '[ngxMaterialTimepickerTheme]' }),
    __metadata("design:paramtypes", [ElementRef])
], NgxMaterialTimepickerThemeDirective);
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getHours(format) {
    return Array(format).fill(1).map((v, i) => {
        const angleStep = 30;
        const time = v + i;
        const angle = angleStep * time;
        return { time: time === 24 ? 0 : time, angle };
    });
}
function disableHours(hours, config) {
    if (config.min || config.max) {
        return hours.map(value => {
            const hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);
            const currentTime = DateTime.fromObject({ hour }).toFormat(TimeFormat.TWELVE);
            return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
        });
    }
    return hours;
}
function getMinutes(gap = 1) {
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
function disableMinutes(minutes, selectedHour, config) {
    if (config.min || config.max) {
        const hour = TimeAdapter.formatHour(selectedHour, config.format, config.period);
        return minutes.map(value => {
            const currentTime = DateTime.fromObject({ hour, minute: value.time }).toFormat(TimeFormat.TWELVE);
            return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
        });
    }
    return minutes;
}

class NgxMaterialTimepickerHoursFace {
    constructor(format) {
        this.hourChange = new EventEmitter();
        this.hourSelected = new EventEmitter();
        this.hoursList = [];
        this.hoursList = getHours(format);
    }
    onTimeSelected(time) {
        this.hourSelected.next(time);
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "selectedHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerHoursFace.prototype, "minTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerHoursFace.prototype, "maxTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerHoursFace.prototype, "format", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "hourChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerHoursFace.prototype, "hourSelected", void 0);

let NgxMaterialTimepicker24HoursFaceComponent = class NgxMaterialTimepicker24HoursFaceComponent extends NgxMaterialTimepickerHoursFace {
    constructor() {
        super(24);
    }
    ngAfterContentInit() {
        this.hoursList = disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
};
NgxMaterialTimepicker24HoursFaceComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-24-hours-face',
        template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], NgxMaterialTimepicker24HoursFaceComponent);

let NgxMaterialTimepicker12HoursFaceComponent = class NgxMaterialTimepicker12HoursFaceComponent extends NgxMaterialTimepickerHoursFace {
    constructor() {
        super(12);
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            this.hoursList = disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepicker12HoursFaceComponent.prototype, "period", void 0);
NgxMaterialTimepicker12HoursFaceComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-12-hours-face',
        template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\"\n                              (timeChange)=\"hourChange.next($event)\" (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], NgxMaterialTimepicker12HoursFaceComponent);

let NgxMaterialTimepickerMinutesFaceComponent = class NgxMaterialTimepickerMinutesFaceComponent {
    constructor() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            const minutes = getMinutes(this.minutesGap);
            this.minutesList = disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "period", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "maxTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minutesGap", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minuteChange", void 0);
NgxMaterialTimepickerMinutesFaceComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-minutes-face',
        template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
    })
], NgxMaterialTimepickerMinutesFaceComponent);

const CLOCK_HAND_STYLES = {
    small: {
        height: '75px',
        top: 'calc(50% - 75px)'
    },
    large: {
        height: '103px',
        top: 'calc(50% - 103px)'
    }
};
let NgxMaterialTimepickerFaceComponent = class NgxMaterialTimepickerFaceComponent {
    constructor() {
        this.timeUnit = TimeUnit;
        this.innerClockFaceSize = 85;
        this.timeChange = new EventEmitter();
        this.timeSelected = new EventEmitter();
    }
    ngAfterViewInit() {
        this.setClockHandPosition();
        this.addTouchEvents();
    }
    ngOnChanges(changes) {
        const faceTimeChanges = changes['faceTime'];
        const selectedTimeChanges = changes['selectedTime'];
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(time => time.time === this.selectedTime.time);
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this.setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => this.selectAvailableTime());
        }
    }
    trackByTime(_, time) {
        return time.time;
    }
    onMousedown(e) {
        e.preventDefault();
        this.isStarted = true;
    }
    selectTime(e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        const arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        const circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        const isInnerClockChosen = this.format && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        const angleStep = this.unit === TimeUnit.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        const roundedAngle = roundAngle(circleAngle, angleStep);
        const angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
        const selectedTime = this.faceTime.find(val => val.angle === angle);
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this.isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    }
    onMouseup(e) {
        e.preventDefault();
        this.isStarted = false;
    }
    ngOnDestroy() {
        this.removeTouchEvents();
    }
    addTouchEvents() {
        this.touchStartHandler = this.onMousedown.bind(this);
        this.touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.addEventListener('touchend', this.touchEndHandler);
    }
    removeTouchEvents() {
        this.clockFace.nativeElement.removeEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.removeEventListener('touchend', this.touchEndHandler);
    }
    setClockHandPosition() {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this.decreaseClockHand();
            }
            else {
                this.increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = `rotate(${this.selectedTime.angle}deg)`;
    }
    selectAvailableTime() {
        const currentTime = this.faceTime.find(time => this.selectedTime.time === time.time);
        this.isClockFaceDisabled = this.faceTime.every(time => time.disabled);
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            const availableTime = this.faceTime.find(time => !time.disabled);
            this.timeChange.next(availableTime);
        }
    }
    isInnerClockFace(x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    }
    decreaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    }
    increaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxMaterialTimepickerFaceComponent.prototype, "faceTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerFaceComponent.prototype, "selectedTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerFaceComponent.prototype, "unit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerFaceComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerFaceComponent.prototype, "minutesGap", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerFaceComponent.prototype, "timeChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerFaceComponent.prototype, "timeSelected", void 0);
__decorate([
    ViewChild('clockFace', { static: true }),
    __metadata("design:type", ElementRef)
], NgxMaterialTimepickerFaceComponent.prototype, "clockFace", void 0);
__decorate([
    ViewChild('clockHand', { static: true }),
    __metadata("design:type", ElementRef)
], NgxMaterialTimepickerFaceComponent.prototype, "clockHand", void 0);
__decorate([
    HostListener('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgxMaterialTimepickerFaceComponent.prototype, "onMousedown", null);
__decorate([
    HostListener('click', ['$event']),
    HostListener('touchmove', ['$event.changedTouches[0]']),
    HostListener('touchend', ['$event.changedTouches[0]']),
    HostListener('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgxMaterialTimepickerFaceComponent.prototype, "selectTime", null);
__decorate([
    HostListener('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgxMaterialTimepickerFaceComponent.prototype, "onMouseup", null);
NgxMaterialTimepickerFaceComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-face',
        template: "<div class=\"clock-face\" #clockFace>\n    <div *ngIf=\"unit !== timeUnit.MINUTE;else minutesFace\" class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime | slice: 0 : 12; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}\n            </span>\n        </div>\n        <div class=\"clock-face__inner\" *ngIf=\"faceTime.length > 12\"\n             [style.top]=\"'calc(50% - ' + innerClockFaceSize + 'px)'\">\n            <div class=\"clock-face__number clock-face__number--inner\"\n                 [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n                 [style.height.px]=\"innerClockFaceSize\"\n                 *ngFor=\"let time of faceTime | slice: 12 : 24; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime?.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}</span>\n            </div>\n        </div>\n    </div>\n\n    <span class=\"clock-face__clock-hand\" [ngClass]=\"{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}\"\n          #clockHand [hidden]=\"isClockFaceDisabled\"></span>\n</div>\n<ng-template #minutesFace>\n    <div class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime; trackBy: trackByTime\">\n\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n          [ngClass]=\"{'active': time.time | activeMinute: selectedTime?.time:minutesGap:isClockFaceDisabled,\n           'disabled': time.disabled}\">\n\t{{time.time | minutesFormatter: minutesGap | timeLocalizer: timeUnit.MINUTE}}</span>\n        </div>\n    </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face{background-color:var(--clock-face-background-color)}}.clock-face__inner{position:absolute}.clock-face__container{margin-left:-2px}.clock-face__number{position:absolute;-webkit-transform-origin:0 100%;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer{height:calc(290px / 2 - 20px)}.clock-face__number--outer>span{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer>span{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner>span{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner>span{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number>span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number>span{font-family:var(--primary-font-family)}}.clock-face__number>span.active{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number>span.active{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number>span.disabled{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number>span.disabled{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand{height:103px;width:2px;-webkit-transform-origin:0 100%;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand{background-color:var(--clock-hand-color)}}.clock-face__clock-hand:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face{width:225px;height:225px;padding:5px}.clock-face__number--outer{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute:before{top:0}}"]
    })
], NgxMaterialTimepickerFaceComponent);
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}

let NgxMaterialTimepickerButtonComponent = class NgxMaterialTimepickerButtonComponent {
};
NgxMaterialTimepickerButtonComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-button',
        template: "<button class=\"timepicker-button\" type=\"button\">\n  <span><ng-content></ng-content></span>\n</button>\n",
        styles: [".timepicker-button{display:inline-block;height:36px;min-width:88px;line-height:36px;border:12px;border-radius:2px;background-color:transparent;text-align:center;transition:450ms cubic-bezier(.23,1,.32,1);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:pointer;outline:0;color:#00bfff}@supports (color:var(--button-color)){.timepicker-button{color:var(--button-color)}}.timepicker-button:focus,.timepicker-button:hover{background-color:rgba(153,153,153,.2)}.timepicker-button>span{font-size:14px;text-transform:uppercase;font-weight:600;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-button>span{font-family:var(--primary-font-family)}}"]
    })
], NgxMaterialTimepickerButtonComponent);

let NgxMaterialTimepickerDialComponent = class NgxMaterialTimepickerDialComponent {
    constructor(locale) {
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.meridiems = Info.meridiems({ locale: this.locale });
        this.periodChanged = new EventEmitter();
        this.timeUnitChanged = new EventEmitter();
        this.hourChanged = new EventEmitter();
        this.minuteChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            const hours = getHours(this.format);
            this.hours = disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            const minutes = getMinutes(this.minutesGap);
            this.minutes = disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
    changeTimeUnit(unit) {
        this.timeUnitChanged.next(unit);
    }
    changePeriod(period) {
        this.periodChanged.next(period);
    }
    changeHour(hour) {
        this.hourChanged.next(hour);
    }
    changeMinute(minute) {
        this.minuteChanged.next(minute);
    }
    showHint() {
        this.isHintVisible = true;
    }
    hideHint() {
        this.isHintVisible = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxMaterialTimepickerDialComponent.prototype, "editableHintTmpl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "hour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "minute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerDialComponent.prototype, "period", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "activeTimeUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerDialComponent.prototype, "minTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerDialComponent.prototype, "maxTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerDialComponent.prototype, "isEditable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerDialComponent.prototype, "minutesGap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerDialComponent.prototype, "hoursOnly", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "periodChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "timeUnitChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "hourChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialComponent.prototype, "minuteChanged", void 0);
NgxMaterialTimepickerDialComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-dial',
        template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  [disabled]=\"hoursOnly\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        [meridiems]=\"meridiems\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
    }),
    __param(0, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [String])
], NgxMaterialTimepickerDialComponent);

let TimeParserPipe = class TimeParserPipe {
    constructor(locale) {
        this.locale = locale;
        this.numberingSystem = DateTime.local().setLocale(this.locale).resolvedLocaleOpts().numberingSystem;
    }
    transform(time, timeUnit = TimeUnit.HOUR) {
        if (time == null || time === '') {
            return '';
        }
        if (!isNaN(+time)) {
            return time;
        }
        if (timeUnit === TimeUnit.MINUTE) {
            return this.parseTime(time, 'm', 'minute');
        }
        return this.parseTime(time, 'H', 'hour');
    }
    parseTime(time, format, timeMeasure) {
        const parsedTime = DateTime.fromFormat(String(time), format, { numberingSystem: this.numberingSystem })[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }
        throw new Error(`Cannot parse time - ${time}`);
    }
};
TimeParserPipe = __decorate([
    Pipe({
        name: 'timeParser'
    }),
    Injectable(),
    __param(0, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [String])
], TimeParserPipe);

let NgxMaterialTimepickerDialControlComponent = class NgxMaterialTimepickerDialControlComponent {
    constructor(timeParserPipe) {
        this.timeParserPipe = timeParserPipe;
        this.timeUnitChanged = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.focused = new EventEmitter();
        this.unfocused = new EventEmitter();
    }
    get selectedTime() {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }
    }
    saveTimeAndChangeTimeUnit(event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    }
    updateTime() {
        const time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    }
    changeTimeByKeyboard(e) {
        const char = String.fromCharCode(e.keyCode);
        if ((!isDigit(e)) || isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
        if (isDigit(e)) {
            this.changeTimeByArrow(e.keyCode);
        }
    }
    onModelChange(value) {
        this.time = this.timeParserPipe.transform(value, this.timeUnit).toString();
    }
    changeTimeByArrow(keyCode) {
        const ARROW_UP = 38;
        const ARROW_DOWN = 40;
        let time;
        if (keyCode === ARROW_UP) {
            time = String(+this.time + (this.minutesGap || 1));
        }
        else if (keyCode === ARROW_DOWN) {
            time = String(+this.time - (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxMaterialTimepickerDialControlComponent.prototype, "timeList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerDialControlComponent.prototype, "time", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerDialControlComponent.prototype, "isActive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerDialControlComponent.prototype, "isEditable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerDialControlComponent.prototype, "minutesGap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerDialControlComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnitChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialControlComponent.prototype, "timeChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialControlComponent.prototype, "focused", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerDialControlComponent.prototype, "unfocused", void 0);
NgxMaterialTimepickerDialControlComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-dial-control',
        template: "<!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n<input class=\"timepicker-dial__control timepicker-dial__item\"\n       [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n       [ngModel]=\"time | timeLocalizer: timeUnit\"\n       (ngModelChange)=\"time = $event\"\n       [disabled]=\"disabled\"\n       (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n       readonly [timepickerAutofocus]=\"isActive\"\n       *ngIf=\"!isEditable;else editableTemplate\">\n\n<ng-template #editableTemplate>\n    <!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n    <input class=\"timepicker-dial__control timepicker-dial__item timepicker-dial__control_editable\"\n           [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [disabled]=\"disabled\"\n           (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n           [timepickerAutofocus]=\"isActive\" (keypress)=\"changeTimeByKeyboard($event)\">\n</ng-template>\n",
        providers: [TimeParserPipe],
        styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:right}.timepicker-dial__control_editable:focus{color:#00bfff;background-color:#fff;outline:#00bfff}@supports (color:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{color:var(--dial-editable-active-color)}}@supports (background-color:var(--dial-editable-background-color)){.timepicker-dial__control_editable:focus{background-color:var(--dial-editable-background-color)}}@supports (outline:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{outline:var(--dial-editable-active-color)}}.timepicker-dial__control:disabled{cursor:default}"]
    }),
    __metadata("design:paramtypes", [TimeParserPipe])
], NgxMaterialTimepickerDialControlComponent);
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    const selectedTime = timeList.find(value => value.time === +time);
    return !selectedTime || (selectedTime && selectedTime.disabled);
}

let NgxMaterialTimepickerPeriodComponent = class NgxMaterialTimepickerPeriodComponent {
    constructor() {
        this.timePeriod = TimePeriod;
        this.isPeriodAvailable = true;
        this.periodChanged = new EventEmitter();
    }
    changePeriod(period) {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    }
    animationDone() {
        this.isPeriodAvailable = true;
    }
    isSwitchPeriodAvailable(period) {
        const time = this.getDisabledTimeByPeriod(period);
        return !time.every(t => t.disabled);
    }
    getDisabledTimeByPeriod(period) {
        switch (this.activeTimeUnit) {
            case TimeUnit.HOUR:
                return disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            case TimeUnit.MINUTE:
                return disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            default:
                throw new Error('no such TimeUnit');
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxMaterialTimepickerPeriodComponent.prototype, "selectedPeriod", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerPeriodComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxMaterialTimepickerPeriodComponent.prototype, "activeTimeUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxMaterialTimepickerPeriodComponent.prototype, "hours", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxMaterialTimepickerPeriodComponent.prototype, "minutes", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerPeriodComponent.prototype, "minTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", DateTime)
], NgxMaterialTimepickerPeriodComponent.prototype, "maxTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerPeriodComponent.prototype, "selectedHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxMaterialTimepickerPeriodComponent.prototype, "meridiems", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerPeriodComponent.prototype, "periodChanged", void 0);
NgxMaterialTimepickerPeriodComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-period',
        template: "<div class=\"timepicker-period\">\n\t\t\t<button class=\"timepicker-dial__item timepicker-period__btn\"\n                  [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.AM}\"\n                  (click)=\"changePeriod(timePeriod.AM)\"\n                  type=\"button\">{{meridiems[0]}}</button>\n    <button class=\"timepicker-dial__item timepicker-period__btn\"\n          [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.PM}\"\n          (click)=\"changePeriod(timePeriod.PM)\"\n          type=\"button\">{{meridiems[1]}}</button>\n    <div class=\"timepicker-period__warning\" [@scaleInOut] (@scaleInOut.done)=\"animationDone()\" *ngIf=\"!isPeriodAvailable\">\n        <p>Current time would be invalid in this period.</p>\n    </div>\n</div>\n",
        animations: [
            trigger('scaleInOut', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate('.2s', style({ transform: 'scale(1)' })),
                    sequence([
                        animate('3s', style({ opacity: 1 })),
                        animate('.3s', style({ opacity: 0 }))
                    ])
                ])
            ])
        ],
        styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn,.timepicker-period__warning>p{font-family:var(--primary-font-family)}}"]
    })
], NgxMaterialTimepickerPeriodComponent);

let TimeFormatterPipe = class TimeFormatterPipe {
    transform(time, timeUnit) {
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
    }
};
TimeFormatterPipe = __decorate([
    Pipe({
        name: 'timeFormatter'
    })
], TimeFormatterPipe);

let OverlayDirective = class OverlayDirective {
    constructor(eventService) {
        this.eventService = eventService;
    }
    onClick(e) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    }
};
__decorate([
    Input('overlay'),
    __metadata("design:type", Boolean)
], OverlayDirective.prototype, "preventClick", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OverlayDirective.prototype, "onClick", null);
OverlayDirective = __decorate([
    Directive({
        selector: '[overlay]'
    }),
    __metadata("design:paramtypes", [NgxMaterialTimepickerEventService])
], OverlayDirective);

let MinutesFormatterPipe = class MinutesFormatterPipe {
    transform(minute, gap = 5) {
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    }
};
MinutesFormatterPipe = __decorate([
    Pipe({
        name: 'minutesFormatter'
    })
], MinutesFormatterPipe);

let AutofocusDirective = class AutofocusDirective {
    constructor(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    ngOnChanges() {
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(() => this.element.nativeElement.focus({ preventScroll: true }));
        }
    }
    ngOnDestroy() {
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(() => this.activeElement.focus({ preventScroll: true }));
    }
};
__decorate([
    Input('timepickerAutofocus'),
    __metadata("design:type", Boolean)
], AutofocusDirective.prototype, "isFocusActive", void 0);
AutofocusDirective = __decorate([
    Directive({
        selector: '[timepickerAutofocus]'
    }),
    __param(1, Optional()), __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ElementRef, Object])
], AutofocusDirective);

var NgxTimepickerFieldComponent_1;
let NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = class NgxTimepickerFieldComponent {
    constructor(timepickerService, locale) {
        this.timepickerService = timepickerService;
        this.locale = locale;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this.timeChanged = new EventEmitter();
        this._format = 12;
        this.unsubscribe$ = new Subject();
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        this.minHour = this._format === 12 ? 1 : 0;
        this.maxHour = this._format === 12 ? 12 : 23;
        this.hoursList = getHours(this._format);
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.defaultTime = this.timepickerTime;
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set defaultTime(val) {
        const time = TimeAdapter.formatTime(val, { locale: this.locale, format: this._format });
        this.timepickerService.setDefaultTimeIfAvailable(time, null, null, this._format);
        this._defaultTime = time;
        this.timepickerTime = time;
        this.isDefaultTime = !!time;
    }
    get defaultTime() {
        return this._defaultTime;
    }
    ngOnInit() {
        this.period$ = this.timepickerService.selectedPeriod;
        this.hour$ = this.timepickerService.selectedHour;
        this.minute$ = this.timepickerService.selectedMinute;
        this.hoursList = getHours(this._format);
        this.minutesList = getMinutes();
    }
    writeValue(val) {
        if (val) {
            this.defaultTime = val;
        }
        else {
            this.resetTime();
        }
    }
    registerOnTouched(fn) {
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    changeHour(hour) {
        this.timepickerService.hour = this.hoursList.find(h => h.time === hour);
        this.changeTime();
    }
    changeMinute(minute) {
        this.timepickerService.minute = this.minutesList.find(m => m.time === minute);
        this.changeTime();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.changeTime();
    }
    onTimeSet(time) {
        this.defaultTime = time;
        this.emitLocalTimeChange(time);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    changeTime() {
        const time = this.timepickerService.getFullTime(this._format);
        this.timepickerTime = time;
        this.emitLocalTimeChange(time);
    }
    resetTime() {
        this.timepickerService.hour = { angle: 0, time: null };
        this.timepickerService.minute = { angle: 0, time: null };
    }
    emitLocalTimeChange(time) {
        const localTime = TimeAdapter.toLocaleTimeString(time, { format: this.format, locale: this.locale });
        this.onChange(localTime);
        this.timeChanged.emit(localTime);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerFieldComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "toggleIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxTimepickerFieldComponent.prototype, "buttonAlign", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxTimepickerFieldComponent.prototype, "clockTheme", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerFieldComponent.prototype, "controlOnly", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "cancelBtnTmpl", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NgxTimepickerFieldComponent.prototype, "confirmBtnTmpl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgxTimepickerFieldComponent.prototype, "format", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgxTimepickerFieldComponent.prototype, "defaultTime", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxTimepickerFieldComponent.prototype, "timeChanged", void 0);
NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = __decorate([
    Component({
        selector: 'ngx-timepicker-field',
        template: "<div class=\"ngx-timepicker\" [ngClass]=\"{'ngx-timepicker--disabled': disabled}\">\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--first\"\n        [placeholder]=\"'HH'\"\n        [time]=\"(hour$ | async)?.time\"\n        [min]=\"minHour\"\n        [max]=\"maxHour\"\n        [timeUnit]=\"timeUnit.HOUR\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeHour($event)\"></ngx-timepicker-time-control>\n    <span class=\"ngx-timepicker__time-colon ngx-timepicker__control--second\">:</span>\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--third\"\n        [placeholder]=\"'MM'\"\n        [time]=\"(minute$ | async)?.time\"\n        [min]=\"0\"\n        [max]=\"59\"\n        [timeUnit]=\"timeUnit.MINUTE\"\n        [disabled]=\"disabled\"\n        [isDefaultTimeSet]=\"isDefaultTime\"\n        (timeChanged)=\"changeMinute($event)\"></ngx-timepicker-time-control>\n    <ngx-timepicker-period-selector\n        class=\"ngx-timepicker__control--forth\"\n        [selectedPeriod]=\"period$|async\"\n        [disabled]=\"disabled\"\n        (periodSelected)=\"changePeriod($event)\"\n        *ngIf=\"format !== 24\"></ngx-timepicker-period-selector>\n    <ngx-material-timepicker-toggle\n        class=\"ngx-timepicker__toggle\"\n        *ngIf=\"!controlOnly\"\n        [ngClass]=\"{'ngx-timepicker__toggle--left': buttonAlign === 'left'}\"\n        [for]=\"timepicker\"\n        [disabled]=\"disabled\">\n        <span ngxMaterialTimepickerToggleIcon>\n            <!--suppress HtmlUnknownAttribute -->\n            <ng-container *ngTemplateOutlet=\"toggleIcon || defaultIcon\"></ng-container>\n        </span>\n    </ngx-material-timepicker-toggle>\n</div>\n<ngx-material-timepicker\n    [theme]=\"clockTheme\"\n    [defaultTime]=\"timepickerTime\"\n    [format]=\"format\"\n    [cancelBtnTmpl]=\"cancelBtnTmpl\"\n    [confirmBtnTmpl]=\"confirmBtnTmpl\"\n    (timeSet)=\"onTimeSet($event)\" #timepicker></ngx-material-timepicker>\n\n<ng-template #defaultIcon>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\">\n        <!--suppress CheckEmptyScriptTag -->\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n</ng-template>\n",
        providers: [
            NgxMaterialTimepickerService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: NgxTimepickerFieldComponent_1,
                multi: true
            }
        ],
        styles: [".ngx-timepicker{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon{margin-left:10px}.ngx-timepicker__control--first{order:1}.ngx-timepicker__control--second{order:2}.ngx-timepicker__control--third{order:3}.ngx-timepicker__control--forth,.ngx-timepicker__toggle{order:4}.ngx-timepicker__toggle--left{order:0}"]
    }),
    __param(1, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [NgxMaterialTimepickerService, String])
], NgxTimepickerFieldComponent);

let NgxTimepickerTimeControlComponent = class NgxTimepickerTimeControlComponent {
    constructor(timeParser) {
        this.timeParser = timeParser;
        this.timeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        const timeChanges = changes['time'];
        const isTimeNotProvided = timeChanges && timeChanges.isFirstChange() && !this.isDefaultTimeSet;
        if (isTimeNotProvided) {
            this.time = null;
        }
    }
    changeTime(event) {
        if (!isDigit(event)) {
            event.preventDefault();
        }
        const char = String.fromCharCode(event.keyCode);
        const time = concatTime(String(this.time), char);
        this.changeTimeIfValid(time);
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
    }
    increase() {
        if (!this.disabled) {
            let nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            this.timeChanged.emit(nextTime);
        }
    }
    decrease() {
        if (!this.disabled) {
            let previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            this.timeChanged.emit(previousTime);
        }
    }
    onFocus() {
        this.isFocused = true;
        this.previousTime = this.time;
    }
    onBlur() {
        this.isFocused = false;
        if (this.previousTime !== this.time) {
            this.changeTimeIfValid(+this.time);
        }
    }
    onModelChange(value) {
        this.time = +this.timeParser.transform(value, this.timeUnit);
    }
    changeTimeIfValid(value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                const timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxTimepickerTimeControlComponent.prototype, "time", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxTimepickerTimeControlComponent.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxTimepickerTimeControlComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxTimepickerTimeControlComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxTimepickerTimeControlComponent.prototype, "timeUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerTimeControlComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerTimeControlComponent.prototype, "isDefaultTimeSet", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxTimepickerTimeControlComponent.prototype, "timeChanged", void 0);
NgxTimepickerTimeControlComponent = __decorate([
    Component({
        selector: 'ngx-timepicker-time-control',
        template: "<div class=\"ngx-timepicker-control\" [ngClass]=\"{'ngx-timepicker-control--active': isFocused}\">\n    <!--suppress HtmlFormInputWithoutLabel -->\n    <input class=\"ngx-timepicker-control__input\"\n           maxlength=\"2\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [placeholder]=\"placeholder\"\n           [disabled]=\"disabled\"\n           (keypress)=\"changeTime($event)\"\n           (focus)=\"onFocus()\"\n           (blur)=\"onBlur()\">\n    <div class=\"ngx-timepicker-control__arrows\">\n            <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"increase()\">\n                &#9650;\n            </span>\n        <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"decrease()\">\n                &#9660;\n            </span>\n    </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [TimeParserPipe],
        styles: [".ngx-timepicker-control{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input:disabled{background-color:transparent}.ngx-timepicker-control__arrows{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow:hover{color:rgba(0,0,0,.9)}"]
    }),
    __metadata("design:paramtypes", [TimeParserPipe])
], NgxTimepickerTimeControlComponent);
function concatTime(currentTime, nextTime) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return +time;
    }
}

let NgxTimepickerPeriodSelectorComponent = class NgxTimepickerPeriodSelectorComponent {
    constructor(locale) {
        this.locale = locale;
        this.periodSelected = new EventEmitter();
        this.period = TimePeriod;
        this.meridiems = Info.meridiems({ locale: this.locale });
    }
    set selectedPeriod(period) {
        if (period) {
            const periods = [TimePeriod.AM, TimePeriod.PM];
            this.localizedPeriod = this.meridiems[periods.indexOf(period)];
        }
    }
    open() {
        if (!this.disabled) {
            this.isOpened = true;
        }
    }
    select(period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    }
    backdropClick() {
        this.isOpened = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerPeriodSelectorComponent.prototype, "isOpened", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxTimepickerPeriodSelectorComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgxTimepickerPeriodSelectorComponent.prototype, "periodSelected", void 0);
NgxTimepickerPeriodSelectorComponent = __decorate([
    Component({
        selector: 'ngx-timepicker-period-selector',
        template: "<div class=\"period\">\n    <div class=\"period-control\">\n        <button class=\"period-control__button period__btn--default\"\n                [ngClass]=\"{'period-control__button--disabled': disabled}\"\n                type=\"button\"\n                (click)=\"open()\">\n            <span>{{localizedPeriod}}</span>\n            <span class=\"period-control__arrow\">&#9660;</span>\n        </button>\n    </div>\n    <ul class=\"period-selector\" @scaleInOut *ngIf=\"isOpened\" [timepickerAutofocus]=\"true\">\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.AM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[0]}\">{{meridiems[0]}}</button>\n        </li>\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.PM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[1]}\">{{meridiems[1]}}</button>\n        </li>\n    </ul>\n</div>\n<div class=\"overlay\" (click)=\"backdropClick()\" *ngIf=\"isOpened\"></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('scaleInOut', [
                transition(':enter', [
                    style({ transform: 'scale(0)', opacity: 0 }),
                    animate(200, style({ transform: 'scale(1)', opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(200, style({ transform: 'scale(0)', opacity: 0 }))
                ])
            ])
        ],
        styles: [".period{position:relative}.period__btn--default{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control{position:relative}.period-control__button{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active{color:#00bfff}.period-selector__button:focus{background-color:#eee}.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"]
    }),
    __param(0, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [String])
], NgxTimepickerPeriodSelectorComponent);

let TimeLocalizerPipe = class TimeLocalizerPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(time, timeUnit, isKeyboardEnabled = false) {
        if (time == null || time === '') {
            return '';
        }
        switch (timeUnit) {
            case TimeUnit.HOUR: {
                const format = (time === 0 || isKeyboardEnabled) ? 'HH' : 'H';
                return this.formatTime('hour', time, format);
            }
            case TimeUnit.MINUTE:
                return this.formatTime('minute', time, 'mm');
            default:
                throw new Error(`There is no Time Unit with type ${timeUnit}`);
        }
    }
    formatTime(timeMeasure, time, format) {
        try {
            return DateTime.fromObject({ [timeMeasure]: +time }).setLocale(this.locale).toFormat(format);
        }
        catch (_a) {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this.locale}`);
        }
    }
};
TimeLocalizerPipe = __decorate([
    Pipe({
        name: 'timeLocalizer'
    }),
    __param(0, Inject(TIME_LOCALE)),
    __metadata("design:paramtypes", [String])
], TimeLocalizerPipe);

let ActiveHourPipe = class ActiveHourPipe {
    transform(hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    }
};
ActiveHourPipe = __decorate([
    Pipe({
        name: 'activeHour'
    })
], ActiveHourPipe);

let ActiveMinutePipe = class ActiveMinutePipe {
    transform(minute, currentMinute, gap, isClockFaceDisabled) {
        if (minute == null || isClockFaceDisabled) {
            return false;
        }
        const defaultGap = 5;
        return ((currentMinute === minute) && (minute % (gap || defaultGap) === 0));
    }
};
ActiveMinutePipe = __decorate([
    Pipe({
        name: 'activeMinute'
    })
], ActiveMinutePipe);

let NgxMaterialTimepickerContentComponent = class NgxMaterialTimepickerContentComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NgxMaterialTimepickerContentComponent.prototype, "appendToInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxMaterialTimepickerContentComponent.prototype, "inputElement", void 0);
NgxMaterialTimepickerContentComponent = __decorate([
    Component({
        selector: 'ngx-material-timepicker-content',
        template: "<div [ngxAppendToInput]=\"inputElement\" *ngIf=\"appendToInput;else timepickerModal\">\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</div>\n\n<ng-template #timepickerModal>\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</ng-template>\n\n<ng-template #timepickerOutlet>\n    <ng-content></ng-content>\n</ng-template>\n"
    })
], NgxMaterialTimepickerContentComponent);

let AppendToInputDirective = class AppendToInputDirective {
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    get inputCords() {
        return this.inputElement.getBoundingClientRect();
    }
    get direction() {
        const height = this.element.offsetHeight;
        const { bottom, top } = this._inputCords;
        const isElementFit = (window && window.innerHeight) - bottom < height;
        const isTop = isElementFit && top > height;
        const isCenter = isElementFit && top < height;
        if (isTop) {
            return 'top';
        }
        else if (isCenter) {
            return 'center';
        }
        return 'bottom';
    }
    ngAfterViewInit() {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    }
    changePosition() {
        const { bottom, top } = this.inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', `${y}px`);
    }
    append() {
        const { left, bottom, top } = this._inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', `${left}px`);
        this.setStyle('top', `${y}px`);
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.element, style, value);
    }
    defineElementYByDirection(inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
    }
};
__decorate([
    Input('ngxAppendToInput'),
    __metadata("design:type", Object)
], AppendToInputDirective.prototype, "inputElement", void 0);
__decorate([
    HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppendToInputDirective.prototype, "changePosition", null);
AppendToInputDirective = __decorate([
    Directive({
        selector: '[ngxAppendToInput]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2])
], AppendToInputDirective);

var NgxMaterialTimepickerModule_1;
const ɵ0 = TimeAdapter.DEFAULT_LOCALE;
let NgxMaterialTimepickerModule = NgxMaterialTimepickerModule_1 = class NgxMaterialTimepickerModule {
    static setLocale(locale) {
        return {
            ngModule: NgxMaterialTimepickerModule_1,
            providers: [
                { provide: TIME_LOCALE, useValue: locale }
            ]
        };
    }
};
NgxMaterialTimepickerModule = NgxMaterialTimepickerModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [
            NgxMaterialTimepickerComponent,
            NgxMaterialTimepickerToggleComponent,
            NgxTimepickerFieldComponent,
            TimepickerDirective,
            NgxMaterialTimepickerToggleIconDirective,
            NgxMaterialTimepickerThemeDirective,
            NgxMaterialTimepicker24HoursFaceComponent,
            NgxMaterialTimepicker12HoursFaceComponent,
            NgxMaterialTimepickerMinutesFaceComponent,
            NgxMaterialTimepickerFaceComponent,
            NgxMaterialTimepickerDialComponent,
            NgxMaterialTimepickerDialControlComponent
        ],
        declarations: [
            NgxMaterialTimepickerComponent,
            NgxMaterialTimepicker24HoursFaceComponent,
            NgxMaterialTimepicker12HoursFaceComponent,
            NgxMaterialTimepickerMinutesFaceComponent,
            NgxMaterialTimepickerFaceComponent,
            NgxMaterialTimepickerToggleComponent,
            NgxMaterialTimepickerButtonComponent,
            NgxMaterialTimepickerDialComponent,
            NgxMaterialTimepickerDialControlComponent,
            NgxMaterialTimepickerPeriodComponent,
            TimeFormatterPipe,
            TimepickerDirective,
            OverlayDirective,
            NgxMaterialTimepickerToggleIconDirective,
            AutofocusDirective,
            MinutesFormatterPipe,
            NgxMaterialTimepickerThemeDirective,
            NgxTimepickerFieldComponent,
            NgxTimepickerTimeControlComponent,
            NgxTimepickerPeriodSelectorComponent,
            TimeLocalizerPipe,
            TimeParserPipe,
            ActiveHourPipe,
            ActiveMinutePipe,
            NgxMaterialTimepickerContainerComponent,
            NgxMaterialTimepickerContentComponent,
            AppendToInputDirective
        ],
        providers: [
            { provide: TIME_LOCALE, useValue: ɵ0 },
        ],
        entryComponents: [NgxMaterialTimepickerContainerComponent]
    })
], NgxMaterialTimepickerModule);

export { NgxMaterialTimepicker12HoursFaceComponent, NgxMaterialTimepicker24HoursFaceComponent, NgxMaterialTimepickerComponent, NgxMaterialTimepickerDialComponent, NgxMaterialTimepickerDialControlComponent, NgxMaterialTimepickerFaceComponent, NgxMaterialTimepickerMinutesFaceComponent, NgxMaterialTimepickerModule, NgxMaterialTimepickerThemeDirective, NgxMaterialTimepickerToggleIconDirective, NgxTimepickerFieldComponent, TimepickerDirective, ɵ0, NgxMaterialTimepickerEventService as ɵa, DomService as ɵb, NgxMaterialTimepickerToggleComponent as ɵc, NgxMaterialTimepickerService as ɵd, TIME_LOCALE as ɵe, NgxMaterialTimepickerHoursFace as ɵf, TimeParserPipe as ɵg, NgxMaterialTimepickerButtonComponent as ɵh, NgxMaterialTimepickerPeriodComponent as ɵi, TimeFormatterPipe as ɵj, OverlayDirective as ɵk, AutofocusDirective as ɵl, MinutesFormatterPipe as ɵm, NgxTimepickerTimeControlComponent as ɵn, NgxTimepickerPeriodSelectorComponent as ɵo, TimeLocalizerPipe as ɵp, ActiveHourPipe as ɵq, ActiveMinutePipe as ɵr, AnimationState as ɵs, NgxMaterialTimepickerContainerComponent as ɵt, NgxMaterialTimepickerContentComponent as ɵu, AppendToInputDirective as ɵv, TimeAdapter as ɵw };
//# sourceMappingURL=ngx-material-timepicker.js.map
