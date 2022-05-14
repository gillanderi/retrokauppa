import Header from './Header'
import { Box, Container } from '@mui/material';
import Tuotekortti from './Tuotekortti';
import Ostossisalto from './Ostossisalto';
import { useState, useRef } from 'react';

function Etusivu (){

    const [valitutTuotteet, setvalitutTuotteet] = useState([{}]);
    const [tuoteMaara, setTuotemaara] = useState (0);
    const [summa,setSumma] = useState (0);

    
    
    return(


        <div>
            <Container maxWidth='md'>

            <Header/>

                <Box>
                    <Tuotekortti 
                    valitutTuotteet={valitutTuotteet}
                    setvalitutTuotteet={setvalitutTuotteet}
                    tuoteMaara={tuoteMaara}
                    setTuotemaara={setTuotemaara}
                    summa={summa}
                    setSumma={setSumma}
                    />
                </Box>
                <Ostossisalto
                valitutTuotteet={valitutTuotteet}
                setvalitutTuotteet={setvalitutTuotteet}
                tuoteMaara={tuoteMaara}
                summa={summa}
                />
            </Container>
        </div>
    
        );
}
export default Etusivu;