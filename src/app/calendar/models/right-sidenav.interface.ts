
export enum DayOptionsEnum {
  MONDAY = 'mo',
  TUESDAY = 'tu',
  WEDNESDAY = 'we',
  THURSDAY = 'th',
  FRIDAY = 'fr',
  SATURDAY = 'sa',
  SUNDAY = 'su'
}

export interface IDay {
  title: string;
  value: DayOptionsEnum
}
