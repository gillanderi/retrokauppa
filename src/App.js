import "./App.css";
import Etusivu from "./components/Etusivu";
import Yhteenveto from "./components/Yhteenveto";
import Tilaus from "./components/Tilaus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useRef } from "react";

function App() {
  const lomakkeentiedot = useRef({});
  const [aika, setAika] = useState();

  return (
    <div>
      <Router>
        <Route path="/" exact component={Etusivu} />
        <Route path="/Tilaus">
          <Tilaus
            lomakkeentiedot={lomakkeentiedot}
            aika={aika}
            setAika={setAika}
          />
        </Route>
        <Route path="/Yhteenveto">
          <Yhteenveto lomakkeentiedot={lomakkeentiedot} aika={aika} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
