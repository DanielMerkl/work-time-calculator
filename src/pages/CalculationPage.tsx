import React, { FC, useReducer } from "react";
import ResultDisplay from "../components/ResultDisplay";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import {
  calculationReducer,
  CalculationState
} from "../utils/reducer/calculationReducer";
import moment from "moment";

const initialState: CalculationState = {
  inputValues: {
    startOfWork: moment("08:00", "HH:mm"),
    endOfWork: moment("16:00", "HH:mm"),
    breakTime: 30,
    workTime: 7.5
  },
  calculationTarget: CalculationTarget.StartOfWork
};

const CalculationPage: FC = () => {
  const [state, dispatch] = useReducer(calculationReducer, initialState);

  return (
    <>
      <ResultDisplay
        inputValues={state.inputValues}
        calculationTarget={state.calculationTarget}
      />
    </>
  );
};

export default CalculationPage;
