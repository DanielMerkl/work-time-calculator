import React, { ChangeEvent, FC } from "react";
import { InputValues } from "../types/interface/InputValues";
import { makeStyles, TextField } from "@material-ui/core";
import { CalculationTarget } from "../types/enum/CalculationTarget";

interface Props {
  inputValues: InputValues;
  calculationTarget: CalculationTarget;
  onInputValuesChange: (updatedInputValues: InputValues) => void;
}

const Inputs: FC<Props> = props => {
  const { inputValues, calculationTarget, onInputValuesChange } = props;
  const { breakTime, workTime, startOfWork, endOfWork } = inputValues;
  const classes = useStyles();

  const handleStartOfWorkChange = (newValue: ChangeEvent<HTMLInputElement>) => {
    onInputValuesChange({
      ...inputValues,
      startOfWork: newValue.target.value
    });
  };

  const handleEndOfWorkChange = (newValue: ChangeEvent<HTMLInputElement>) => {
    onInputValuesChange({
      ...inputValues,
      endOfWork: newValue.target.value
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
        <TextField
          value={startOfWork}
          label="Arbeitsbeginn"
          variant="outlined"
          type="time"
          InputLabelProps={{ shrink: true }}
          disabled={calculationTarget === CalculationTarget.StartOfWork}
          onChange={handleStartOfWorkChange}
        />
        <TextField
          value={endOfWork}
          label="Arbeitsbeginn"
          variant="outlined"
          type="time"
          InputLabelProps={{ shrink: true }}
          disabled={calculationTarget === CalculationTarget.EndOfWork}
          onChange={handleEndOfWorkChange}
        />
        <TextField
          type="number"
          label="Pausezeit"
          variant="outlined"
          value={isNaN(breakTime) ? "" : breakTime}
          onChange={handleBreakTimeChange}
          disabled={calculationTarget === CalculationTarget.BreakTime}
          error={isNaN(breakTime) || breakTime < 0}
          inputProps={{ min: 0 }}
        />
        <TextField
          type="number"
          label="Arbeitszeit"
          variant="outlined"
          value={isNaN(workTime) ? "" : workTime}
          onChange={handleWorkTimeChange}
          inputProps={{ step: 0.1 }}
          disabled={calculationTarget === CalculationTarget.WorkTime}
          error={isNaN(workTime) || workTime < 0}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    margin: "auto",
    maxWidth: 800,
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "@media (max-width: 600px)": {
    gridWrapper: {
      gridTemplateColumns: "1fr 1fr"
    }
  }
});

export default Inputs;
