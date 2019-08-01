import { Moment } from "moment";

export interface CurrentInputValues {
  startOfWork: Moment;
  endOfWork: Moment;
  breakTime: number;
  workTime: number;
}
