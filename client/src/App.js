import React from 'react';

import Calculator from './Components/Calculator/Calculator.jsx';
import History from './Components/History/History.jsx';

function App() {
  return (
    <div className='app'>
      {/* Calc */}
      <Calculator />
      <div className='app__breaker'></div>
      {/* History Block */}
      <History />
    </div>
  );
}

export default App;
