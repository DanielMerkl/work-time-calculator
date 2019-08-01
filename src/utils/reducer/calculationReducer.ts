import { Moment } from "moment";
import { CalculationTarget } from "../../types/enum/CalculationTarget";
import { InputValues } from "../../types/interface/InputValues";
import moment from "moment";

export interface CalculationState {
  inputValues: InputValues;
  calculationTarget: CalculationTarget;
}

type CalculationActions =
  | {
      type: "changeInputValue";
      key: keyof InputValues;
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
        inputValues: {
          ...state.inputValues,
          [action.key]: action.newValue
        }
      };
    case "changeCalculationTarget":
      return { ...state, calculationTarget: action.newTarget };
    case "calculateNewValues":
      return {
        ...state,
        inputValues: calculateNewInputValues(
          state.inputValues,
          state.calculationTarget
        )
      };
  }
};

const calculateNewInputValues = (
  currentInputValues: InputValues,
  calculationTarget: CalculationTarget
): InputValues => {
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
