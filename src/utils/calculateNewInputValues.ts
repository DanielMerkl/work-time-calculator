import { InputValues } from "../types/interface/InputValues";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import moment from "moment";

export const calculateNewInputValues = (
  currentInputValues: InputValues,
  calculationTarget: CalculationTarget
): InputValues => {
  const { startOfWork, endOfWork, breakTime, workTime } = currentInputValues;
  if (!endOfWork || !startOfWork) return currentInputValues;

  const endOfWorkMoment = moment(endOfWork, "HH:mm");
  const startOfWorkMoment = moment(startOfWork, "HH:mm");

  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      const updatedStartOfWork = endOfWorkMoment
        .subtract(workTime, "hours")
        .subtract(breakTime, "minutes");
      return {
        ...currentInputValues,
        startOfWork: updatedStartOfWork.format("HH:mm")
      };

    case CalculationTarget.EndOfWork:
      const updatedEndOfWork = startOfWorkMoment
        .add(breakTime, "minutes")
        .add(workTime, "hours");
      return {
        ...currentInputValues,
        endOfWork: updatedEndOfWork.format("HH:mm")
      };

    case CalculationTarget.BreakTime:
      const updatedBreakTime = endOfWorkMoment
        .subtract(workTime, "hours")
        .diff(startOfWork, "minutes");
      return { ...currentInputValues, breakTime: updatedBreakTime };

    case CalculationTarget.WorkTime:
      const updatedWorkTime = endOfWorkMoment
        .subtract(breakTime, "minutes")
        .diff(startOfWork, "hours", true);
      return { ...currentInputValues, workTime: updatedWorkTime };
  }
};
