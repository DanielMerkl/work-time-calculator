import React, { FC } from "react";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { InputValues } from "../types/interface/InputValues";
import { Paper, Typography } from "@material-ui/core";

interface Props {
  inputValues: InputValues;
  calculationTarget: CalculationTarget;
}

const ResultDisplay: FC<Props> = props => (
  <div style={{ margin: 16 }}>
    <Paper style={{ maxWidth: 800, padding: 16, margin: "auto" }}>
      <Typography variant="h6" align="center" gutterBottom>
        {toGerman(props.calculationTarget)}
      </Typography>
      <Typography variant="h3" align="center">
        {getCorrectValue(props.inputValues, props.calculationTarget)}
      </Typography>
    </Paper>
  </div>
);

export default ResultDisplay;

const toGerman = (calculationTarget: CalculationTarget): string => {
  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      return "Arbeitsbeginn";
    case CalculationTarget.EndOfWork:
      return "Arbeitsende";
    case CalculationTarget.BreakTime:
      return "Pausezeit";
    case CalculationTarget.WorkTime:
      return "Arbeitszeit";
  }
};

const getCorrectValue = (
  inputValues: InputValues,
  calculationTarget: CalculationTarget
) => {
  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      return inputValues.startOfWork.format("HH:mm");
    case CalculationTarget.EndOfWork:
      return inputValues.endOfWork.format("HH:mm");
    case CalculationTarget.BreakTime:
      return inputValues.breakTime;
    case CalculationTarget.WorkTime:
      return inputValues.workTime;
  }
};
