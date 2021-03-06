import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { NgxMaterialTimepickerContainerComponent } from '../components/ngx-material-timepicker-container/ngx-material-timepicker-container.component';
import { TimepickerConfig } from '../models/timepicker-config.interface';
export declare class DomService {
    private cfr;
    private appRef;
    private injector;
    private document;
    private componentRef;
    constructor(cfr: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector, document: any);
    appendTimepickerToBody(timepicker: Type<NgxMaterialTimepickerContainerComponent>, config: TimepickerConfig): void;
    destroyTimepicker(): void;
}
