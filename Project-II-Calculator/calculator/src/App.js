import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const CalculatorData = {
  numberbutton: { backgroundColor: "white" },
  actionbutton: { backgroundColor: "white" },
  mathbutton: { backgroundColor: "red" },
  display: { backgroundColor: "gray" },
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbol: ['clear', '÷', '×', '−', '+', '='],
  value: 0
};

const App = () => {
  return (
    <div class='app'>
      <CalculatorDisplay />
      <ActionButton
        buttonStyle={CalculatorData.actionbutton}
        text={CalculatorData.symbol[0]}
      />
      <NumberButton
        buttonStyle={CalculatorData.mathbutton}
        text={CalculatorData.symbol[1]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[7]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[8]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[9]}
      />
      <NumberButton
        buttonStyle={CalculatorData.mathbutton}
        text={CalculatorData.symbol[2]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[4]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[5]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[6]}
      />
      <NumberButton
        buttonStyle={CalculatorData.mathbutton}
        text={CalculatorData.symbol[3]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[1]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[2]}
      />
      <NumberButton
        buttonStyle={CalculatorData.numberbutton}
        text={CalculatorData.number[3]}
      />
      <NumberButton
        buttonStyle={CalculatorData.mathbutton}
        text={CalculatorData.symbol[4]}
      />
      <ActionButton
        buttonStyle={CalculatorData.actionbutton}
        text={CalculatorData.number[0]}
      />
      <NumberButton
        buttonStyle={CalculatorData.mathbutton}
        text={CalculatorData.symbol[5]}
      />
    </div>
    /* <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div> */
  );
};

export default App;
