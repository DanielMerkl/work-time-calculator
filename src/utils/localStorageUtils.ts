import { InputValues } from "../types/interface/InputValues";
import { CalculationTarget } from "../types/enum/CalculationTarget";

const INPUT_VALUES = "inputValues";
const CALCULATION_TARGET = "calculationTarget";

const saveInputValues = (inputValues: InputValues) => {
  localStorage.setItem(INPUT_VALUES, JSON.stringify(inputValues));
};

const getInputValues = (): InputValues | null => {
  const inputValuesString = localStorage.getItem(INPUT_VALUES);
  if (inputValuesString === null) return null;

  try {
    return JSON.parse(inputValuesString);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const saveCalculationTarget = (calculationTarget: CalculationTarget) => {
  localStorage.setItem(CALCULATION_TARGET, JSON.stringify(calculationTarget));
};

const getCalculationTarget = (): CalculationTarget | null => {
  const calculationTargetString = localStorage.getItem(CALCULATION_TARGET);
  if (calculationTargetString === null) return null;

  try {
    return JSON.parse(calculationTargetString);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default {
  saveInputValues: saveInputValues,
  getInputValues: getInputValues,
  saveCalculationTarget: saveCalculationTarget,
  getCalculationTarget: getCalculationTarget
};
