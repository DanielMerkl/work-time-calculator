import React, { ChangeEvent, FC } from "react";
import { InputValues } from "../types/interface/InputValues";
import {
  KeyboardTimePicker,
  MaterialUiPickersDate
} from "@material-ui/pickers";
import { makeStyles, TextField } from "@material-ui/core";
import moment from "moment";
import { CalculationTarget } from "../types/enum/CalculationTarget";

interface Props {
  inputValues: InputValues;
  calculationTarget: CalculationTarget;
  onInputValuesChange: (updatedInputValues: InputValues) => void;
}

const Inputs: FC<Props> = ({
  inputValues,
  calculationTarget,
  onInputValuesChange
}) => {
  const classes = useStyles();

  const handleStartOfWorkChange = (newValue: MaterialUiPickersDate) => {
    onInputValuesChange({
      ...inputValues,
      startOfWork: newValue !== null ? moment(newValue) : null
    });
  };

  const handleEndOfWorkChange = (newValue: MaterialUiPickersDate) => {
    onInputValuesChange({
      ...inputValues,
      endOfWork: newValue !== null ? moment(newValue) : null
    });
  };

  const handleBreakTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(event.target.value);
    onInputValuesChange({ ...inputValues, breakTime: newValue });
  };

  const handleWorkTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseFloat(event.target.value);
    onInputValuesChange({ ...inputValues, workTime: newValue });
  };

  return (
    <div style={{ margin: "32px 16px" }}>
      <div className={classes.gridWrapper}>
        <KeyboardTimePicker
          ampm={false}
          autoOk
          invalidDateMessage="Ungültige Eingabe"
          inputVariant="outlined"
          label="Arbeitsbeginn"
          value={inputValues.startOfWork}
          onChange={handleStartOfWorkChange}
          disabled={calculationTarget === CalculationTarget.StartOfWork}
        />
        <KeyboardTimePicker
          ampm={false}
          invalidDateMessage="Ungültige Eingabe"
          inputVariant="outlined"
          label="Arbeitsende"
          value={inputValues.endOfWork}
          onChange={handleEndOfWorkChange}
          disabled={calculationTarget === CalculationTarget.EndOfWork}
        />
        <TextField
          type="number"
          label="Pausezeit"
          variant="outlined"
          value={inputValues.breakTime}
          onChange={handleBreakTimeChange}
          disabled={calculationTarget === CalculationTarget.BreakTime}
        />
        <TextField
          type="number"
          label="Arbeitszeit"
          variant="outlined"
          value={inputValues.workTime}
          onChange={handleWorkTimeChange}
          inputProps={{ step: 0.1 }}
          disabled={calculationTarget === CalculationTarget.WorkTime}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    margin: "auto",
    maxWidth: 832,
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: "repeat(4, 1fr)"
  }
});

export default Inputs;
