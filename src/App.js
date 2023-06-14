
import "./styles.css";
import ClickNumber from "./ClickNumber";
import { useState } from "react";

export default function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

// uses child component to run onclick. 
// button clicks are given values.
  const clickNumber = (value) => {
    if (!isNaN(value) && !operator) {
      setNum1(num1 + value)
    }
    if (isNaN(value) && value !== "=") {
      setOperator(value)
    }

    if (!isNaN(value) && operator) {
      setNum2(num2 + value)
    }
    if (value === "=") {
      equalFunction()
    }

    if (value === "AC"){
      clear()
    }
  }

  //handles the calculation using the equals button, defined in clickNumber()
  const equalFunction = () => {
    if (operator === "+") {
      setResult(Number(num1) + Number(num2))
    }
    if (operator === "-") {
      setResult(Number(num1) - Number(num2))
    }
    if (operator === "x") {
      setResult(Number(num1) * Number(num2))
    }
    if (operator === "/") {
      setResult(Number(num1) / Number(num2))
    }
  }

  const clear = () => {
      setNum1("")
      setNum2("")
      setOperator("")
      setResult("")
  }

  return (
    <>
      <div className="title">Calculator App</div>
      <div className="display">
        <input readOnly value={num1 + " " + operator + " " + num2} className="data" />
        <input readOnly value={result} className="result" />
      </div>
      <div className="grid">
        <ClickNumber className={"clear"} clickNumber={clickNumber} number={"AC"} />
        <ClickNumber className={"brackets"} clickNumber={clickNumber} number={"()"} />
        <ClickNumber className={"percent"} clickNumber={clickNumber} number={"%"} />
        <ClickNumber className={"calc"} clickNumber={clickNumber} number={"/"} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={9} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={8} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={7} />
        <ClickNumber className={"calc"} clickNumber={clickNumber} number={"x"} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={6} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={5} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={4} />
        <ClickNumber className={"calc"} clickNumber={clickNumber} number={"-"} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={3} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={2} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={1} />
        <ClickNumber className={"calc"} clickNumber={clickNumber} number={"+"} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={0} />
        <ClickNumber className={"number"} clickNumber={clickNumber} number={"."} />
        <ClickNumber className={"delete"} clickNumber={clickNumber} number={"Del"} />
        <ClickNumber className={"equal"} clickNumber={clickNumber} number={"="} />
      </div >
    </>
  );
}
