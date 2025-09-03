import { useContext } from "react";
import {CalcContext} from '../components/context/CalcContext'


const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    "x": "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const {calc, setCalc} = useContext(CalcContext)

// User click comma
const commaClick = () => {
setCalc({
  ...calc,
  num: !calc.num.toString().includes('.') ? calc.num + value : calc.num

})
}

// User click C
const resetClick = () => {
setCalc({ sign: '', num:0, res:0 })
}


  const handleBtnClick = () => {
    const result = {
      ".": commaClick,
      "C": resetClick
    };
    return result[value]()
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
