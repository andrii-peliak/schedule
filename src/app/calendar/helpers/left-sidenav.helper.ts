import {IPartOfDay, PartOfDayEnum} from "../models/left-sidenav.interface";

export const getPartsOfDay = (): IPartOfDay[] => PARTS_OF_DAY;

const PARTS_OF_DAY: IPartOfDay[] = [
  {title: 'Morning', value: PartOfDayEnum.MORNING},
  {title: 'Midday', value: PartOfDayEnum.MIDDAY},
  {title: 'Evening', value: PartOfDayEnum.EVENING},
  {title: 'Night', value: PartOfDayEnum.NIGHT}
]
