import { useRef } from "react";
import { useState } from "react";
enum Operators {
  add,
  subtract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [number, setNumber] = useState("0");
  const [numberPrevius, setNumberPrevius] = useState("0");

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber("0");
    setNumberPrevius("0");
  };

  const createNamber = (numberText: string) => {
    console.log(number);
    if (number.includes(".") && numberText === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberText === ".") {
        setNumber(number + numberText);
      } else if (numberText === "0" && number.includes(".")) {
        setNumber(number + numberText);
      } else if (numberText !== "0" && !number.includes(".")) {
        setNumber(numberText);
      } else if (numberText === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", " "));
    } else {
      setNumber("-" + number);
    }
  };

  const btnDelete = () => {
    let negativo = "";
    let numeroTemp = number;
    if (number.includes("-")) {
      negativo = "-";
      numeroTemp = number.substring(1);
    }
    if (numeroTemp.length > 1) {
      setNumber(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumber("0");
    }
  };

  const giveNumberToPrevius = () => {
    if (number.endsWith(".")) {
      setNumberPrevius(number.slice(0, -1));
    } else {
      setNumberPrevius(number);
    }
    setNumber("0");
  };

  const btnDivide = () => {
    giveNumberToPrevius();
    lastOperation.current = Operators.divide;
  };
  const btnMultiply = () => {
    giveNumberToPrevius();
    lastOperation.current = Operators.multiply;
  };
  const btnAdd = () => {
    giveNumberToPrevius();
    lastOperation.current = Operators.add;
  };
  const btnSubtract = () => {
    giveNumberToPrevius();
    lastOperation.current = Operators.subtract;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(numberPrevius);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
      default:
        break;
    }
  };
  return {
    number,
    numberPrevius,
    clean,
    createNamber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    calcular,
    positiveNegative
  };
};
