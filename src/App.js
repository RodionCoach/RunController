import React from 'react';
import Header from './components/Header/Header'
import { Provider } from './context/context'
import './App.css';


function App() {
  let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(window.navigator.userAgent);
  return ( 
    <Provider value={mobile}>
      <div className="App">
        <Header/>
      </div>
    </Provider>
  )
}

export default App;
