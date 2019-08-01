import moment from "moment";
import { InputValues } from "../types/interface/InputValues";
import { CalculationTarget } from "../types/enum/CalculationTarget";

export const calculateNewInputValues = (
  currentInputValues: InputValues,
  calculationTarget: CalculationTarget
): InputValues => {
  const { startOfWork, endOfWork, breakTime, workTime } = currentInputValues;
  if (!endOfWork || !startOfWork) return currentInputValues;

  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      const updatedStartOfWork = endOfWork
        .clone()
        .subtract(workTime, "hours")
        .subtract(breakTime, "minutes");
      return { ...currentInputValues, startOfWork: updatedStartOfWork };

    case CalculationTarget.EndOfWork:
      const updatedEndOfWork = startOfWork
        .clone()
        .add(breakTime, "minutes")
        .add(workTime, "hours");
      return { ...currentInputValues, endOfWork: updatedEndOfWork };

    case CalculationTarget.BreakTime:
      const updatedBreakTime =
        startOfWork.diff(endOfWork, "minutes") -
        moment.duration(workTime, "hours").asMinutes();
      return { ...currentInputValues, breakTime: updatedBreakTime };

    case CalculationTarget.WorkTime:
      const updatedWorkTime = moment
        .duration(startOfWork.diff(endOfWork, "minutes") - breakTime, "minutes")
        .asHours();
      return { ...currentInputValues, workTime: updatedWorkTime };
  }
};
