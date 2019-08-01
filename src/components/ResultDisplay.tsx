import React, { FC } from "react";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { InputValues } from "../types/interface/InputValues";
import { Paper, Typography } from "@material-ui/core";

interface Props {
  inputValues: InputValues;
  calculationTarget: CalculationTarget;
}

const ResultDisplay: FC<Props> = ({ inputValues, calculationTarget }) => (
  <div style={{ margin: "32px 16px" }}>
    <Paper style={{ maxWidth: 800, padding: 16, margin: "auto" }}>
      <Typography variant="h6" align="center" gutterBottom>
        {toGerman(calculationTarget)}
      </Typography>
      <Typography variant="h3" align="center" gutterBottom>
        {getCorrectValue(inputValues, calculationTarget)}
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
  { breakTime, endOfWork, startOfWork, workTime }: InputValues,
  calculationTarget: CalculationTarget
) => {
  switch (calculationTarget) {
    case CalculationTarget.StartOfWork:
      return startOfWork !== null && startOfWork.isValid()
        ? startOfWork.format("HH:mm")
        : "-";
    case CalculationTarget.EndOfWork:
      return endOfWork !== null && endOfWork.isValid()
        ? endOfWork.format("HH:mm")
        : "-";
    case CalculationTarget.BreakTime:
      return breakTime;
    case CalculationTarget.WorkTime:
      return workTime;
  }
};
