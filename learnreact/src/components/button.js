import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function TheButton(props) {
  const classes = useStyles();

  const handleClick = () => props.onClickFunction(props.increment);

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        +{props.increment}
      </Button>
    </div>
  );
}

export default TheButton;
