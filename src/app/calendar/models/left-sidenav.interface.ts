import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";

export interface IPartOfDay {
  title: string;
  value: PartOfDayEnum;
}

export enum PartOfDayEnum {
  MORNING = 'mo',
  MIDDAY = 'mi',
  EVENING = 'ev',
  NIGHT = 'ni'
}

export const DARK_THEME: NgxMaterialTimepickerTheme = {
  container: {
    bodyBackgroundColor: '#424242',
    buttonColor: '#fff'
  },
  dial: {
    dialBackgroundColor: '#555',
  },
  clockFace: {
    clockFaceBackgroundColor: '#555',
    clockHandColor: '#c2185b',
    clockFaceTimeInactiveColor: '#fff'
  }
};
