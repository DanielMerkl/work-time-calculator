import React, { FC, useState } from "react";
import ResultDisplay from "../components/ResultDisplay";

import moment from "moment";
import Inputs from "../components/Inputs";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { calculateNewInputValues } from "../utils/calculateNewInputValues";
import { InputValues } from "../types/interface/InputValues";
import CalculationTargetSelection from "../components/CalculationTargetSelection";

const CalculationPage: FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    startOfWork: moment("08:00", "HH:mm"),
    endOfWork: moment("16:00", "HH:mm"),
    breakTime: 30,
    workTime: 7.5
  });
  const [calculationTarget, setCalculationTarget] = useState(
    CalculationTarget.EndOfWork
  );

  const handleInputValuesChange = (updatedInputValues: InputValues) => {
    const { breakTime, workTime, startOfWork, endOfWork } = updatedInputValues;

    const eachInputIsValid =
      startOfWork !== null &&
      startOfWork.isValid() &&
      endOfWork !== null &&
      endOfWork.isValid() &&
      breakTime >= 0 &&
      workTime >= 0;

    if (eachInputIsValid) {
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
    <>
      <ResultDisplay
        inputValues={inputValues}
        calculationTarget={calculationTarget}
      />
      <Inputs
        inputValues={inputValues}
        calculationTarget={calculationTarget}
        onInputValuesChange={handleInputValuesChange}
      />
      <CalculationTargetSelection
        calculationTarget={calculationTarget}
        onCalculationTargetChange={setCalculationTarget}
      />
    </>
  );
};

export default CalculationPage;
