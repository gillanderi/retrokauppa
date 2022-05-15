import Header from "./Header";
import { Box, Container } from "@mui/material";
import Tuotekortti from "./Tuotekortti";
import Ostossisalto from "./Ostossisalto";
import { useState, useEffect } from "react";

function Etusivu() {
  const [valitutTuotteet, setvalitutTuotteet] = useState([]);
  const [tuoteMaara, setTuotemaara] = useState(0);
  const [summa, setSumma] = useState(0);
  const [apuHinta, setapuHinta] = useState(0);

  /*useEffect(() => {
    laskeSumma();
  }, [tuoteMaara]);

  const laskeSumma = () => {
    let tulos = 0;
    valitutTuotteet.map((item) => {
      tulos = tulos + item.hinta;
    });
    setSumma(tulos);
  };
  */
  useEffect(() => {
    setSumma(valitutTuotteet.reduce((total, cur) => total + cur.hinta, 0));
  }, [valitutTuotteet]);

  return (
    <div>
      <Container maxWidth="md">
        <Header />

        <Box>
          <Tuotekortti
            valitutTuotteet={valitutTuotteet}
            setvalitutTuotteet={setvalitutTuotteet}
            tuoteMaara={tuoteMaara}
            setTuotemaara={setTuotemaara}
            summa={summa}
            setSumma={setSumma}
            apuHinta={apuHinta}
            setapuHinta={setapuHinta}
          />
        </Box>
        <Ostossisalto
          valitutTuotteet={valitutTuotteet}
          setvalitutTuotteet={setvalitutTuotteet}
          setTuotemaara={setTuotemaara}
          setSumma={setSumma}
          tuoteMaara={tuoteMaara}
          summa={summa}
        />
      </Container>
    </div>
  );
}
export default Etusivu;
