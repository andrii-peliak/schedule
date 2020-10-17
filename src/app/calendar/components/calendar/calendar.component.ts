import { Component, OnInit } from '@angular/core';
import {PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public scrollConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  }
  public smallScreenMatcher = this.breakPointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).pipe(map(val => val.matches))
  constructor(public breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
