import Products from './components/products';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import PrincipalTablasSecundarias from './components/principalTablasSecundarias/PrincipalTablasSecundarias';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <h1>
      Hola mundo, somos script this
    </h1>
    <main className='dashboard'>
      <section className='dash-component-container'><Products/></section>
    </main>



        <PrincipalTablasSecundarias/>       
    </div>
    </BrowserRouter>
  );
}

export default App;
