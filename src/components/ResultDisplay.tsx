import React, { FC } from "react";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { CurrentInputValues } from "../types/interface/CurrentInputValues";
import { Paper, Typography } from "@material-ui/core";

interface Props {
  currentInputValues: CurrentInputValues;
  calculationTarget: CalculationTarget;
}

const ResultDisplay: FC<Props> = props => (
  <div style={{ margin: 16 }}>
    <Paper style={{ maxWidth: 800, padding: 16, margin: "auto" }}>
      <Typography variant="h6" align="center" gutterBottom>
        {toGerman(props.calculationTarget)}
      </Typography>
      <Typography variant="h3" align="center">
        {getCorrectValue(props.currentInputValues, props.calculationTarget)}
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
  currentInputValues: CurrentInputValues,
  calculationTarget: CalculationTarget
) => {
  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      return currentInputValues.startOfWork.format("HH:mm");
    case CalculationTarget.EndOfWork:
      return currentInputValues.endOfWork.format("HH:mm");
    case CalculationTarget.BreakTime:
      return currentInputValues.breakTime;
    case CalculationTarget.WorkTime:
      return currentInputValues.workTime;
  }
};
