type Operator = "+" | "-" | "*" | "/";
type CalculatorInput = (string | Operator)[];

const calculate = (arr: CalculatorInput): number => {
  const stack: number[] = [];
  let operator: Operator = "+";

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (!isNaN(Number(curr))) {
      const num = Number(curr);

      if (operator === "+") {
        stack.push(num);
      } else if (operator === "-") {
        stack.push(-num);
      } else if (operator === "*") {
        stack.push(stack.pop()! * num);
      } else if (operator === "/") {
        stack.push(stack.pop()! / num);
      }
    } else {
      operator = curr as Operator;
    }
  }

  const result = stack.some((val) => isNaN(val))
    ? NaN
    : stack.reduce((acc, curr) => acc + curr, 0);

  return result;
};

export default calculate;
