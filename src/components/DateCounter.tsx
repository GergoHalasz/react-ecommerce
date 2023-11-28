import { useReducer } from "react";
import { IconButton, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });

  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "setCount", payload: 0 });
  };

  return (
    <div className="counter">
      <Slider min={0} max={10} value={state.step} onChange={defineStep} />

      <span style={{ fontFamily: "cursive" }}>{state.step}</span>
      <div>
        <IconButton size="large" onClick={dec} aria-label="delete">
          <RemoveIcon
            style={{ width: "50px", height: "50px" }}
            color="primary"
          />
        </IconButton>
        <TextField
          inputProps={{
            style: { color: "white", fontSize: 26, textAlign: "center" },
          }}
          focused
          label="Value"
          color="primary"
          value={state.count}
          onChange={defineCount}
          id="filled-basic"
          variant="outlined"
        />
        <IconButton size="large" onClick={inc} aria-label="delete">
          <AddIcon style={{ width: "50px", height: "50px" }} color="primary" />
        </IconButton>
      </div>
      <p style={{ fontFamily: "cursive" }}>{date.toDateString()}</p>
      <div>
        <Button variant="outlined" size="large" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
export default DateCounter;