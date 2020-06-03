import * as tslib_1 from "tslib";
var NgxMaterialTimepickerModule_1;
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
export { NgxMaterialTimepickerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21hdGVyaWFsLXRpbWVwaWNrZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUN0SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0SCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRyxPQUFPLEVBQ0gseUNBQXlDLEVBQzVDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUNILHlDQUF5QyxFQUM1QyxNQUFNLHVGQUF1RixDQUFDO0FBQy9GLE9BQU8sRUFDSCx5Q0FBeUMsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzNJLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3pILE9BQU8sRUFDSCx5Q0FBeUMsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzNJLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzNHLE9BQU8sRUFDSCxpQ0FBaUMsRUFDcEMsTUFBTSw2RkFBNkYsQ0FBQztBQUNyRyxPQUFPLEVBQ0gsb0NBQW9DLEVBQ3ZDLE1BQU0sbUdBQW1HLENBQUM7QUFDM0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFDSCx1Q0FBdUMsRUFDMUMsTUFBTSw0RkFBNEYsQ0FBQztBQUNwRyxPQUFPLEVBQ0gscUNBQXFDLEVBQ3hDLE1BQU0sd0ZBQXdGLENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7V0FvRHZDLFdBQVcsQ0FBQyxjQUFjO0FBSW5FLElBQWEsMkJBQTJCLG1DQUF4QyxNQUFhLDJCQUEyQjtJQUVwQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSw2QkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBVlksMkJBQTJCO0lBckR2QyxRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osV0FBVztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsOEJBQThCO1lBQzlCLG9DQUFvQztZQUNwQywyQkFBMkI7WUFDM0IsbUJBQW1CO1lBQ25CLHdDQUF3QztZQUN4QyxtQ0FBbUM7WUFDbkMseUNBQXlDO1lBQ3pDLHlDQUF5QztZQUN6Qyx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLGtDQUFrQztZQUNsQyx5Q0FBeUM7U0FDNUM7UUFDRCxZQUFZLEVBQUU7WUFDViw4QkFBOEI7WUFDOUIseUNBQXlDO1lBQ3pDLHlDQUF5QztZQUN6Qyx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLG9DQUFvQztZQUNwQyxvQ0FBb0M7WUFDcEMsa0NBQWtDO1lBQ2xDLHlDQUF5QztZQUN6QyxvQ0FBb0M7WUFDcEMsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsd0NBQXdDO1lBQ3hDLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsbUNBQW1DO1lBQ25DLDJCQUEyQjtZQUMzQixpQ0FBaUM7WUFDakMsb0NBQW9DO1lBQ3BDLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtZQUNoQix1Q0FBdUM7WUFDdkMscUNBQXFDO1lBQ3JDLHNCQUFzQjtTQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNQLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLElBQTRCLEVBQUM7U0FDL0Q7UUFDRCxlQUFlLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztLQUM3RCxDQUFDO0dBQ1csMkJBQTJCLENBVXZDO1NBVlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLXRvZ2dsZS1idXR0b24vbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC10aW1lcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUb2dnbGVJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZS1pY29uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci10aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXIyNEhvdXJzRmFjZUNvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXBpY2tlci0yNC1ob3Vycy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLTI0LWhvdXJzLWZhY2UuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyMTJIb3Vyc0ZhY2VDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItMTItaG91cnMtZmFjZS9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci0xMi1ob3Vycy1mYWNlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1pbnV0ZXNGYWNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItbWludXRlcy1mYWNlL25neC1tYXRlcmlhbC10aW1lcGlja2VyLW1pbnV0ZXMtZmFjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRmFjZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZmFjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItYnV0dG9uL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRGlhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLWRpYWwvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLWRpYWwtY29udHJvbC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlclBlcmlvZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLXBlcmlvZC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1wZXJpb2QuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVGb3JtYXR0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lLWZvcm1hdHRlci5waXBlJztcbmltcG9ydCB7IE92ZXJsYXlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvb3ZlcmxheS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWludXRlc0Zvcm1hdHRlclBpcGUgfSBmcm9tICcuL3BpcGVzL21pbnV0ZXMtZm9ybWF0dGVyLnBpcGUnO1xuaW1wb3J0IHsgQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZmllbGQvbmd4LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmd4VGltZXBpY2tlclRpbWVDb250cm9sQ29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cy90aW1lcGlja2VyLWZpZWxkL3RpbWVwaWNrZXItdGltZS1jb250cm9sL25neC10aW1lcGlja2VyLXRpbWUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBOZ3hUaW1lcGlja2VyUGVyaW9kU2VsZWN0b3JDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVwaWNrZXItZmllbGQvdGltZXBpY2tlci1wZXJpb2Qtc2VsZWN0b3Ivbmd4LXRpbWVwaWNrZXItcGVyaW9kLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lTG9jYWxpemVyUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1sb2NhbGl6ZXIucGlwZSc7XG5pbXBvcnQgeyBUSU1FX0xPQ0FMRSB9IGZyb20gJy4vdG9rZW5zL3RpbWUtbG9jYWxlLnRva2VuJztcbmltcG9ydCB7IFRpbWVBZGFwdGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHsgVGltZVBhcnNlclBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtcGFyc2VyLnBpcGUnO1xuaW1wb3J0IHsgQWN0aXZlSG91clBpcGUgfSBmcm9tICcuL3BpcGVzL2FjdGl2ZS1ob3VyLnBpcGUnO1xuaW1wb3J0IHsgQWN0aXZlTWludXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvYWN0aXZlLW1pbnV0ZS5waXBlJztcbmltcG9ydCB7XG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1jb250YWluZXIvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRlbnQvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwZW5kVG9JbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hcHBlbmQtdG8taW5wdXQuZGlyZWN0aXZlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCxcbiAgICAgICAgTmd4VGltZXBpY2tlckZpZWxkQ29tcG9uZW50LFxuICAgICAgICBUaW1lcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUb2dnbGVJY29uRGlyZWN0aXZlLFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZURpcmVjdGl2ZSxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyMjRIb3Vyc0ZhY2VDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlcjEySG91cnNGYWNlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNaW51dGVzRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRGlhbENvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyRGlhbENvbnRyb2xDb21wb25lbnRcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlcjI0SG91cnNGYWNlQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXIxMkhvdXJzRmFjZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTWludXRlc0ZhY2VDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckZhY2VDb21wb25lbnQsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29tcG9uZW50LFxuICAgICAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJEaWFsQ29udHJvbENvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyUGVyaW9kQ29tcG9uZW50LFxuICAgICAgICBUaW1lRm9ybWF0dGVyUGlwZSxcbiAgICAgICAgVGltZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgT3ZlcmxheURpcmVjdGl2ZSxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZSxcbiAgICAgICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgICAgICBNaW51dGVzRm9ybWF0dGVyUGlwZSxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWVEaXJlY3RpdmUsXG4gICAgICAgIE5neFRpbWVwaWNrZXJGaWVsZENvbXBvbmVudCxcbiAgICAgICAgTmd4VGltZXBpY2tlclRpbWVDb250cm9sQ29tcG9uZW50LFxuICAgICAgICBOZ3hUaW1lcGlja2VyUGVyaW9kU2VsZWN0b3JDb21wb25lbnQsXG4gICAgICAgIFRpbWVMb2NhbGl6ZXJQaXBlLFxuICAgICAgICBUaW1lUGFyc2VyUGlwZSxcbiAgICAgICAgQWN0aXZlSG91clBpcGUsXG4gICAgICAgIEFjdGl2ZU1pbnV0ZVBpcGUsXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyQ29udGVudENvbXBvbmVudCxcbiAgICAgICAgQXBwZW5kVG9JbnB1dERpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBUSU1FX0xPQ0FMRSwgdXNlVmFsdWU6IFRpbWVBZGFwdGVyLkRFRkFVTFRfTE9DQUxFfSxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW05neE1hdGVyaWFsVGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIHtcblxuICAgIHN0YXRpYyBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogVElNRV9MT0NBTEUsIHVzZVZhbHVlOiBsb2NhbGV9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19