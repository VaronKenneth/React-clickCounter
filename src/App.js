import './App.css';
import Boton from './Components/Boton.jsx';
import Contador from './Components/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumclick] = useState(0);

  const click  = () => {
    setNumclick(numClicks+ 1);
  };
  
  const reiniciar = () => {
    setNumclick(0);
  };
  
  return (
          <div className="App">
        <div className='title-container'>
          <h1 className='title }'>Click Counter PR</h1>
        </div>
        <div className='btn-container'>
          <Contador 
            numClicks={numClicks} 
            />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={click}
            />
          <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciar}
          />
        </div>
    </div>
  );
}

export default App;
