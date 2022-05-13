import './App.css';
import Etusivu from './components/Etusivu';
import Yhteenveto from './components/Yhteenveto';
import Tilaus from './components/Tilaus';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {



  return (

    <div>
      <Router>
      <Route path="/" exact component={Etusivu}/>

      <Route path="/tilaus">
        <Tilaus/>
      </Route>

      <Route path="/yhteenveto">
        <Yhteenveto/>
      </Route>

      </Router>
    </div>
  );
}

export default App;
