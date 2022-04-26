import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from './elements/Basic';
import Counter from './elements/Counter';
import List from './elements/List';
import Forms from './elements/Forms';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic" element={<Basic />} />
        <Route path="counter" element={<Counter />} />
        <Route path="list" element={<List />} />
        <Route path="forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * Props: são argumentos que permitem a passagem
de dados dinâmicos pelos componentes do React.
Esses dados são passados por meio de atributos.
 */

/**
 * const Person = (props) => {
  return (
    <div>
      <p>Nome: {props.name}</p>
      <p>Grupo: {props.group}</p>
    </div>
  );
};
 */

/**
 * const App = () => {
  return (
    <div className="App">
      <Person name="Yoongi" group="BTS" />
      <Person name="Hyoyeon" group="SNSD" />
      <Person name="Jennie" group="Blackpink" />
      <Person name="Sakura" group="Lesserafim" />
    </div>
  );
};
 */

/**
const App = () => {
  // Valor inicial do contador (estado inicial)
  const [counter, setCounter] = useState(0)

  const mais = () => setCounter(counter + 1)

  const menos = () => setCounter(counter - 1)

  useEffect(() => {}, [])
  
  return (
    <div className="App">
     <button onClick={menos} disabled={counter === 0}>-</button>
     <h1>{counter}</h1>
     <button onClick={mais}>+</button>
    </div>
  );
};
 */