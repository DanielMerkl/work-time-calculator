import React, { FC, useEffect, useState } from "react";
import ResultDisplay from "../components/ResultDisplay";

import Inputs from "../components/Inputs";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { calculateNewInputValues } from "../utils/calculateNewInputValues";
import { InputValues } from "../types/interface/InputValues";
import CalculationTargetSelection from "../components/CalculationTargetSelection";
import { localStorageUtils } from "../utils/localStorageUtils";

const CalculationPage: FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>(
    loadInitialInputValues()
  );
  const [calculationTarget, setCalculationTarget] = useState<CalculationTarget>(
    loadInitialCalculationTarget()
  );

  useEffect(() => {
    localStorageUtils.saveInputValues(inputValues);
  }, [inputValues]);

  useEffect(() => {
    localStorageUtils.saveCalculationTarget(calculationTarget);
  }, [calculationTarget]);

  const handleInputValuesChange = (updatedInputValues: InputValues) => {
    if (everyInputIsValid(updatedInputValues)) {
      const newCalculatedValues = calculateNewInputValues(
        updatedInputValues,
        calculationTarget
      );
      setInputValues(newCalculatedValues);
    } else {
      setInputValues(updatedInputValues);
    }
  };

  return (
    <div>
      <ResultDisplay
        inputValues={inputValues}
        calculationTarget={calculationTarget}
      />
      <CalculationTargetSelection
        calculationTarget={calculationTarget}
        onCalculationTargetChange={setCalculationTarget}
      />
      <Inputs
        inputValues={inputValues}
        calculationTarget={calculationTarget}
        onInputValuesChange={handleInputValuesChange}
      />
    </div>
  );
};

export default CalculationPage;

const everyInputIsValid = (inputValues: InputValues): boolean => {
  const { startOfWork, endOfWork, breakTime, workTime } = inputValues;
  return (
    startOfWork !== "" &&
    endOfWork !== "" &&
    !isNaN(breakTime) &&
    breakTime >= 0 &&
    !isNaN(workTime) &&
    workTime >= 0
  );
};

const loadInitialInputValues = (): InputValues => {
  const savedInputValues = localStorageUtils.getInputValues();

  return savedInputValues !== null
    ? savedInputValues
    : {
        startOfWork: "08:00",
        endOfWork: "16:00",
        breakTime: 30,
        workTime: 7.5,
      };
};

const loadInitialCalculationTarget = (): CalculationTarget => {
  const savedCalculationTarget = localStorageUtils.getCalculationTarget();

  return savedCalculationTarget !== null
    ? savedCalculationTarget
    : CalculationTarget.EndOfWork;
};
