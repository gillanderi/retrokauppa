import Header from './Header'
import { Box, Container } from '@mui/material';
import Tuotekortti from './Tuotekortti';
function Etusivu (){


    

    return(


        <div>
            <Container maxWidth='md'>

            <Header/>

                <Box>
                    <Tuotekortti/>
                </Box>

            </Container>
        </div>
    
        );
}
export default Etusivu;