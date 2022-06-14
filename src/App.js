import {BrowserRouter} from 'react-router-dom'
import './App.css';
import PrincipalTablasSecundarias from './components/principalTablasSecundarias/PrincipalTablasSecundarias';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <PrincipalTablasSecundarias/>       
    </div>
    </BrowserRouter>
  );
}

export default App;
