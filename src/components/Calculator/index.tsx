import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styles from "./Calculator.module.css";
import calculate from "../../utils/calculation";

const STR_TO_ARR_SPLIT = /([+\-*/])/;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isError, setIsError] = useState(false);
  const HEADLING = "React Calculator";

  const calculator_value = [
    { label: 7, type: "number" },
    { label: 8, type: "number" },
    { label: 9, type: "number" },
    { label: "+", type: "operator" },

    { label: 4, type: "number" },
    { label: 5, type: "number" },
    { label: 6, type: "number" },
    { label: "-", type: "operator" },

    { label: 1, type: "number" },
    { label: 2, type: "number" },
    { label: 3, type: "number" },
    { label: "*", type: "operator" },

    { label: "C", type: "action" },
    { label: 0, type: "number" },
    { label: "=", type: "action" },
    { label: "/", type: "operator" },
  ];

  const hancleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value;

    if (input == "" && val == "=") {
      setIsError(true);
    } else {
      setIsError(false);
      if (val == "=") {
        const inputStr = input;
        const convertStrToArr = inputStr
          .split(STR_TO_ARR_SPLIT)
          .filter(Boolean);
        const cal = calculate(convertStrToArr);

        setResult(cal);
      } else if (val == "C") {
        setInput("");
        setResult(null);

        setIsError(false);
      } else {
        handleCalculation(val);
      }
    }
  };

  const handleCalculation = (val: string) => {
    // if last value is operator then remove it and add new operator
    const updatedInput = input;
    const lastValue = updatedInput.split(/([+\-*/])/).filter(Boolean);

    if (
      isOperator.includes(lastValue[lastValue.length - 1]) &&
      isOperator.includes(val)
    ) {
      handleDuplicateOperator(val);
    } else {
      setInput((prev) => {
        return prev + val;
      });
    }
  };

  const isOperator = ["+", "-", "*", "/"];

  const handleDuplicateOperator = (val: string) => {
    // remove last operator and insert new operator if user click operator multiple time at once
    setInput((prev) => {
      const tempInput = prev.split(STR_TO_ARR_SPLIT).filter(Boolean);

      tempInput.pop();
      tempInput.push(val);
      return tempInput.join("");
    });
  };

  return (
    <div className="parent">
      <h1 className="heading">{HEADLING}</h1>
      <Input
        value={input}
        id="number"
        type="text"
        name="number"
        readOnly={true}
      />

      <p>
        {isError
          ? "Error"
          : Number.isNaN(result)
            ? "NaN"
            : result !== null
              ? result
              : ""}
      </p>

      <div className={styles.calculator_btn}>
        {calculator_value.map((item) => {
          return (
            <Button onClick={hancleClick} key={item.label} value={item.label} />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
