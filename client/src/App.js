import React, { useState, useEffect } from 'react';

import Calculator from './Components/Calculator/Calculator.jsx';
import History from './Components/History/History.jsx';

import { connect } from 'react-redux';
import { setEquations } from './Redux/Actions';

import io from 'socket.io-client';

export function App({ setEquations }) {

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io('https://websocketcalculator.herokuapp.com/'));
    return () => socket.disconnect();
  }, [])

  const newEquation = equation => {
    if(!socket) return;
    socket.emit('NewEquation', { equation })
  }

  useEffect(() => {
    if(!socket) return;
    socket.on('NewList', data => {
      setEquations(data)
    })
  }, [socket])

  return (
    <div className='app'>
      {/* Calc */}
      <Calculator newEquation={newEquation} />
      <div className='app__breaker'></div>
      {/* History Block */}
      <History />
    </div>
  );
}
export default connect(
  null,
  { setEquations },
)(App);