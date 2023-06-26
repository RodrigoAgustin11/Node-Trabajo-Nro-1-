
import './App.css';

import { Button } from 'primereact/button';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese primer valor:
          <input type="text" name="text1" />
        </p>
        <p>
        <Button label="Otro boton" /> 
          <input type="submit" value="Frase escrita" />
        </p>
      </form>
      <form onSubmit={presion}>
          <Button label="Submit" />
          <input type="submit" value="Lautarito" />
          </form>
    </div>
  );
}



function presion(e) {
  e.preventDefault();
  const  text1=String(e.target.text1.value,10);
  const  text=text1;
  alert('La frase que se eligió fue: '+text);
}

export default App;