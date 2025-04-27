import React from 'react';
import ReactDOM from 'react-dom/client';


//Bootstrap y font awesome
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import '../styles/index.css'


// components
import Home from './components/Home';
let seconds = 0;

       const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {

  const uno = Math.floor(seconds % 10);
  const dos = Math.floor((seconds % 100) / 10);
  const tres = Math.floor((seconds % 1000) / 100);
  const cuatro = Math.floor((seconds % 10000) / 1000);
  const cinco = Math.floor((seconds % 100000) / 10000);
  const seis = Math.floor((seconds % 1000000) / 100000);

  root.render(
    <React.StrictMode>
      <Home uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />
    </React.StrictMode>
  );

    seconds ++;
}, 1000)

