import { Moment } from "moment";

export interface InputValues {
  startOfWork: Moment | null;
  endOfWork: Moment | null;
  breakTime: number;
  workTime: number;
}
