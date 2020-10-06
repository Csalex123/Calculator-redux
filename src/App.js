import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';

/* Forma atual de store com hooks */

function App() {
  const result = useSelector((state) => {
    return state.calculator;
  });

  return (
    <div className="App">
      <input type="text" placeholder="Valor 1" />
      <input type="text" placeholder="Valor 2" />
      <button>Calcular</button>

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
