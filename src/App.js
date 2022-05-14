import './App.css';
import Etusivu from './components/Etusivu';
import Yhteenveto from './components/Yhteenveto';
import Tilaus from './components/Tilaus';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useState,useRef } from 'react';

function App() {

  const lomakkeentiedot =useRef({});

  return (

    <div>
      <Router>
      <Route path="/" exact component={Etusivu}/>
      <Route path="/Tilaus">
        <Tilaus lomakkeentiedot={lomakkeentiedot}/>
      </Route>
      <Route path="/Yhteenveto">
        <Yhteenveto lomakkeentiedot={lomakkeentiedot}/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
