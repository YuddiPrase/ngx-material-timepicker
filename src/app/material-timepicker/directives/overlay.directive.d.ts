import { NgxMaterialTimepickerEventService } from '../services/ngx-material-timepicker-event.service';
export declare class OverlayDirective {
    private eventService;
    preventClick: boolean;
    constructor(eventService: NgxMaterialTimepickerEventService);
    onClick(e: any): void;
}
