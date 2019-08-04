import React, { FC, useState } from "react";
import ResultDisplay from "../components/ResultDisplay";

import Inputs from "../components/Inputs";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { calculateNewInputValues } from "../utils/calculateNewInputValues";
import { InputValues } from "../types/interface/InputValues";
import CalculationTargetSelection from "../components/CalculationTargetSelection";

const CalculationPage: FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    startOfWork: "08:00",
    endOfWork: "16:00",
    breakTime: 30,
    workTime: 7.5
  });
  const [calculationTarget, setCalculationTarget] = useState(
    CalculationTarget.EndOfWork
  );

  const handleInputValuesChange = (updatedInputValues: InputValues) => {
    const { startOfWork, endOfWork } = updatedInputValues;
    const dateInputsAreValid = !startOfWork && !endOfWork;

    if (dateInputsAreValid) {
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
      <Inputs
        inputValues={inputValues}
        calculationTarget={calculationTarget}
        onInputValuesChange={handleInputValuesChange}
      />
      <CalculationTargetSelection
        calculationTarget={calculationTarget}
        onCalculationTargetChange={setCalculationTarget}
      />
    </div>
  );
};

export default CalculationPage;
