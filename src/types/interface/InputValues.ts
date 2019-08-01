import { Moment } from "moment";

export interface InputValues {
  startOfWork: Moment;
  endOfWork: Moment;
  breakTime: number;
  workTime: number;
}
