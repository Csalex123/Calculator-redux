import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subtract, sum } from './store/Calculator/Calculator.actions';

import './App.css';

/* Forma atual de store com hooks */

/* Hooks 

- useSelector: ele pega o estado da entidade
- useDispatch: envie uma action pro reduce pra atualizar o estado

*/

function App() {
  const [typeCalculator, setTypeCalculator] = useState(0);
  const [values, setValues] = useState({
    a: 0,
    b: 0
  });

  const dispatch = useDispatch();

  const result = useSelector(state => {
    return state.calculator;
  });

  const onChangeForm = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  /* Disparando uma ação pro reduce */
  const handleSendSum = () => {
    const { a, b } = values;

    dispatch(typeCalculator === 0 ? sum(parseInt(a), parseInt(b)) : subtract(parseInt(a), parseInt(b)));

  }

  return (
    <div className="App">
      <select onChange={(event) => setTypeCalculator( parseInt(event.target.value) )}>
        <option value="0">Somar</option>
        <option value="1">Diminuir</option>
      </select>
      <input type="text" name="a" value={values.a} placeholder="Valor 1" onChange={onChangeForm} />
      <input type="text" name="b" value={values.b} placeholder="Valor 2" onChange={onChangeForm} />
      <button onClick={() => handleSendSum(1, 2)}>Calcular</button>

      <div className="result">
        Resultado: {result}
      </div>
    </div>
  );
}

export default App;

/* ----- Forma antiga de chamar o store do redux ------ */

// import { connect } from 'react-redux';

// function App({ result }) {
//   return (
//     <div className="App">
//       <input type="text" placeholder="Valor 1" />
//       <input type="text" placeholder="Valor 2" />
//       <button>Calcular</button>

//       <div className="result">
//         Resultado: {result}
//       </div>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     result: state.calculator
//   }
// }

// export default connect(mapStateToProps)(App);
