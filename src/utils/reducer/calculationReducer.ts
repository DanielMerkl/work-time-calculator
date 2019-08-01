import { Moment } from "moment";
import { CalculationTarget } from "../../types/enum/CalculationTarget";
import { CurrentInputValues } from "../../types/interface/CurrentInputValues";
import moment from "moment";

interface CalculationState {
  currentInputValues: CurrentInputValues;
  calculationTarget: CalculationTarget;
}

type CalculationActions =
  | {
      type: "changeInputValue";
      key: keyof CurrentInputValues;
      newValue: Moment | number;
    }
  | {
      type: "changeCalculationTarget";
      newTarget: CalculationTarget;
    }
  | { type: "calculateNewValues" };

export const calculationReducer = (
  state: CalculationState,
  action: CalculationActions
): CalculationState => {
  switch (action.type) {
    case "changeInputValue":
      return {
        ...state,
        currentInputValues: {
          ...state.currentInputValues,
          [action.key]: action.newValue
        }
      };
    case "changeCalculationTarget":
      return { ...state, calculationTarget: action.newTarget };
    case "calculateNewValues":
      return {
        ...state,
        currentInputValues: calculateNewInputValues(
          state.currentInputValues,
          state.calculationTarget
        )
      };
  }
};

const calculateNewInputValues = (
  currentInputValues: CurrentInputValues,
  calculationTarget: CalculationTarget
): CurrentInputValues => {
  const { startOfWork, endOfWork, breakTime, workTime } = currentInputValues;

  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      const updatedStartOfWork = endOfWork
        .subtract(workTime, "hours")
        .subtract(breakTime, "minutes");
      return { ...currentInputValues, startOfWork: updatedStartOfWork };

    case CalculationTarget.EndOfWork:
      const updatedEndOfWork = startOfWork
        .add(workTime, "hours")
        .add(breakTime, "minutes");
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
