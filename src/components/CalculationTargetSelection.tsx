import React, { FC } from "react";
import { CalculationTarget } from "../types/enum/CalculationTarget";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

interface Props {
  calculationTarget: CalculationTarget;
  onCalculationTargetChange: (newCalculationTarget: CalculationTarget) => void;
}

const CalculationTargetSelection: FC<Props> = ({
  calculationTarget,
  onCalculationTargetChange
}) => {
  const classes = useStyles();
  const { BreakTime, StartOfWork, WorkTime, EndOfWork } = CalculationTarget;

  return (
    <div style={{ margin: "32px 16px" }}>
      <div className={classes.gridWrapper}>
        <Button
          variant={calculationTarget === StartOfWork ? "contained" : "outlined"}
          color="primary"
          onClick={() => onCalculationTargetChange(StartOfWork)}
        >
          Arbeitsbeginn
        </Button>
        <Button
          variant={calculationTarget === EndOfWork ? "contained" : "outlined"}
          color="primary"
          onClick={() => onCalculationTargetChange(EndOfWork)}
        >
          Arbeitsende
        </Button>
        <Button
          variant={calculationTarget === BreakTime ? "contained" : "outlined"}
          color="primary"
          onClick={() => onCalculationTargetChange(BreakTime)}
        >
          Pausezeit
        </Button>
        <Button
          variant={calculationTarget === WorkTime ? "contained" : "outlined"}
          color="primary"
          onClick={() => onCalculationTargetChange(WorkTime)}
        >
          Arbeitszeit
        </Button>
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

export default CalculationTargetSelection;
