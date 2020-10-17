import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';
import {SharedModule} from "../_shared/shared.module";
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';


@NgModule({
  declarations: [CalendarItemComponent, RightSidenavComponent, CalendarComponent, LeftSidenavComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ],
  exports: [
    CalendarItemComponent,
    CalendarComponent
  ]
})
export class CalendarModule { }
