import { Component, OnInit } from '@angular/core';
import {IDay, DayOptionsEnum} from "../../models/right-sidenav.interface";

const DAYS: IDay[] = [
  {title: 'Monday', value: DayOptionsEnum.MONDAY},
  {title: 'Tuesday', value: DayOptionsEnum.TUESDAY},
  {title: 'Wednesday', value: DayOptionsEnum.WEDNESDAY},
  {title: 'Thursday', value: DayOptionsEnum.THURSDAY},
  {title: 'Friday', value: DayOptionsEnum.FRIDAY},
  {title: 'Saturday', value: DayOptionsEnum.SATURDAY},
  {title: 'Sunday', value: DayOptionsEnum.SUNDAY},
]

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {
  public dayOptions: IDay[] = DAYS;
  constructor() { }

  ngOnInit(): void {
  }

}
