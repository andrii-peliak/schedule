import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss']
})
export class CalendarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(123)
  }

}
