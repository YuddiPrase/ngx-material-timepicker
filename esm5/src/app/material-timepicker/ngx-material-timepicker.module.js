import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaterialTimepickerComponent } from './ngx-material-timepicker.component';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerToggleComponent } from './components/timepicker-toggle-button/ngx-material-timepicker-toggle.component';
import { TimepickerDirective } from './directives/ngx-timepicker.directive';
import { NgxMaterialTimepickerToggleIconDirective } from './directives/ngx-material-timepicker-toggle-icon.directive';
import { NgxMaterialTimepickerThemeDirective } from './directives/ngx-material-timepicker-theme.directive';
import { NgxMaterialTimepicker24HoursFaceComponent } from './components/timepicker-24-hours-face/ngx-material-timepicker-24-hours-face.component';
import { NgxMaterialTimepicker12HoursFaceComponent } from './components/timepicker-12-hours-face/ngx-material-timepicker-12-hours-face.component';
import { NgxMaterialTimepickerMinutesFaceComponent } from './components/timepicker-minutes-face/ngx-material-timepicker-minutes-face.component';
import { NgxMaterialTimepickerFaceComponent } from './components/timepicker-face/ngx-material-timepicker-face.component';
import { NgxMaterialTimepickerButtonComponent } from './components/timepicker-button/ngx-material-timepicker-button.component';
import { NgxMaterialTimepickerDialComponent } from './components/timepicker-dial/ngx-material-timepicker-dial.component';
import { NgxMaterialTimepickerDialControlComponent } from './components/timepicker-dial-control/ngx-material-timepicker-dial-control.component';
import { NgxMaterialTimepickerPeriodComponent } from './components/timepicker-period/ngx-material-timepicker-period.component';
import { TimeFormatterPipe } from './pipes/time-formatter.pipe';
import { OverlayDirective } from './directives/overlay.directive';
import { MinutesFormatterPipe } from './pipes/minutes-formatter.pipe';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NgxTimepickerFieldComponent } from './components/timepicker-field/ngx-timepicker-field.component';
import { NgxTimepickerTimeControlComponent } from './components/timepicker-field/timepicker-time-control/ngx-timepicker-time-control.component';
import { NgxTimepickerPeriodSelectorComponent } from './components/timepicker-field/timepicker-period-selector/ngx-timepicker-period-selector.component';
import { TimeLocalizerPipe } from './pipes/time-localizer.pipe';
import { TIME_LOCALE } from './tokens/time-locale.token';
import { TimeAdapter } from './services/time-adapter';
import { TimeParserPipe } from './pipes/time-parser.pipe';
import { ActiveHourPipe } from './pipes/active-hour.pipe';
import { ActiveMinutePipe } from './pipes/active-minute.pipe';
import { NgxMaterialTimepickerContainerComponent } from './components/ngx-material-timepicker-container/ngx-material-timepicker-container.component';
import { NgxMaterialTimepickerContentComponent } from './components/ngx-material-timepicker-content/ngx-material-timepicker-content.component';
import { AppendToInputDirective } from './directives/append-to-input.directive';
var ɵ0 = TimeAdapter.DEFAULT_LOCALE;
var NgxMaterialTimepickerModule = /** @class */ (function () {
    function NgxMaterialTimepickerModule() {
    }
    NgxMaterialTimepickerModule_1 = NgxMaterialTimepickerModule;
    NgxMaterialTimepickerModule.setLocale = function (locale) {
        return {
            ngModule: NgxMaterialTimepickerModule_1,
            providers: [
                { provide: TIME_LOCALE, useValue: locale }
            ]
        };
    };
    var NgxMaterialTimepickerModule_1;
    NgxMaterialTimepickerModule = NgxMaterialTimepickerModule_1 = tslib_1.__decorate([
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
    return NgxMaterialTimepickerModule;
}());
export { NgxMaterialTimepickerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNHLE9BQU8sRUFDSCx5Q0FBeUMsRUFDNUMsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQ0gseUNBQXlDLEVBQzVDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUNILHlDQUF5QyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDM0ksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDekgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDL0gsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDekgsT0FBTyxFQUNILHlDQUF5QyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDM0ksT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1B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UHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItdG9nZ2xlLWJ1dHRvbi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LXRpbWVwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUljb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdG9nZ2xlLWljb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlcjI0SG91cnNGYWNlQ29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLTI0LWhvdXJzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItMjQtaG91cnMtZmFjZS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXIxMkhvdXJzRmFjZUNvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci0xMi1ob3Vycy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLTEyLWhvdXJzLWZhY2UuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTWludXRlc0ZhY2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJGYWNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZmFjZS9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci1idXR0b24vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZGlhbC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckRpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZGlhbC1jb250cm9sL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWRpYWwtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyUGVyaW9kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItcGVyaW9kL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXBlcmlvZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZUZvcm1hdHRlclBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtZm9ybWF0dGVyLnBpcGUnO1xuaW1wb3J0IHsgT3ZlcmxheURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9vdmVybGF5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNaW51dGVzRm9ybWF0dGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvbWludXRlcy1mb3JtYXR0ZXIucGlwZSc7XG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hUaW1lcGlja2VyRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC9uZ3gtdGltZXBpY2tlci1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBOZ3hUaW1lcGlja2VyVGltZUNvbnRyb2xDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZmllbGQvdGltZXBpY2tlci10aW1lLWNvbnRyb2wvbmd4LXRpbWVwaWNrZXItdGltZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5neFRpbWVwaWNrZXJQZXJpb2RTZWxlY3RvckNvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci1maWVsZC90aW1lcGlja2VyLXBlcmlvZC1zZWxlY3Rvci9uZ3gtdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVMb2NhbGl6ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWxvY2FsaXplci5waXBlJztcbmltcG9ydCB7IFRJTUVfTE9DQUxFIH0gZnJvbSAnLi90b2tlbnMvdGltZS1sb2NhbGUudG9rZW4nO1xuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL3RpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBUaW1lUGFyc2VyUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1wYXJzZXIucGlwZSc7XG5pbXBvcnQgeyBBY3RpdmVIb3VyUGlwZSB9IGZyb20gJy4vcGlwZXMvYWN0aXZlLWhvdXIucGlwZSc7XG5pbXBvcnQgeyBBY3RpdmVNaW51dGVQaXBlIH0gZnJvbSAnLi9waXBlcy9hY3RpdmUtbWludXRlLnBpcGUnO1xuaW1wb3J0IHtcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lci9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGVudENvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGVudC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBlbmRUb0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FwcGVuZC10by1pbnB1dC5kaXJlY3RpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlQ29tcG9uZW50LFxuICAgICAgICBOZ3hUaW1lcGlja2VyRmllbGRDb21wb25lbnQsXG4gICAgICAgIFRpbWVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUljb25EaXJlY3RpdmUsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lRGlyZWN0aXZlLFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXIyNEhvdXJzRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyMTJIb3Vyc0ZhY2VDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1pbnV0ZXNGYWNlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJGYWNlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29udHJvbENvbXBvbmVudFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyMjRIb3Vyc0ZhY2VDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlcjEySG91cnNGYWNlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNaW51dGVzRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckRpYWxDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckRpYWxDb250cm9sQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJQZXJpb2RDb21wb25lbnQsXG4gICAgICAgIFRpbWVGb3JtYXR0ZXJQaXBlLFxuICAgICAgICBUaW1lcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBPdmVybGF5RGlyZWN0aXZlLFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUb2dnbGVJY29uRGlyZWN0aXZlLFxuICAgICAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXG4gICAgICAgIE1pbnV0ZXNGb3JtYXR0ZXJQaXBlLFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZURpcmVjdGl2ZSxcbiAgICAgICAgTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50LFxuICAgICAgICBOZ3hUaW1lcGlja2VyVGltZUNvbnRyb2xDb21wb25lbnQsXG4gICAgICAgIE5neFRpbWVwaWNrZXJQZXJpb2RTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgVGltZUxvY2FsaXplclBpcGUsXG4gICAgICAgIFRpbWVQYXJzZXJQaXBlLFxuICAgICAgICBBY3RpdmVIb3VyUGlwZSxcbiAgICAgICAgQWN0aXZlTWludXRlUGlwZSxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb250ZW50Q29tcG9uZW50LFxuICAgICAgICBBcHBlbmRUb0lucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IFRJTUVfTE9DQUxFLCB1c2VWYWx1ZTogVGltZUFkYXB0ZXIuREVGQVVMVF9MT0NBTEV9LFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUge1xuXG4gICAgc3RhdGljIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBUSU1FX0xPQ0FMRSwgdXNlVmFsdWU6IGxvY2FsZX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=