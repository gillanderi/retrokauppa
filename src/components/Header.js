import { Container,Typography } from '@mui/material';


function Yhteenveto (){


    return(
        <div>
            <Container maxWidth='md'>
        <div
        style={{

            textAlign : "center",
            marginTop: "10px",
            paddingTop : "10px",
            paddingBottom : "10px",
            color : "#f8fbfb",
            background: "linear-gradient(4deg, rgba(0,0,0,0.026237252713585457) 0%, rgba(67,70,69,1) 34%, rgba(73,76,75,1) 37%, rgba(81,84,83,1) 57%, rgba(116,121,120,1) 59%, rgba(120,125,124,1) 61%, rgba(126,131,130,1) 64%, rgba(132,137,136,1) 67%, rgba(148,153,152,1) 75%, rgba(136,141,140,1) 75%, rgba(164,169,168,1) 87%, rgba(198,204,202,1) 100%)",
            display: "block",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
}} 
        >
            <Typography 
                variant='h4'
                align='center'
                style={{
                margin : "1em"
                }}
                >Retropelit.
            </Typography>
            <Typography 
                variant='body1'
                align='center'
                style={{
                margin : "1em"
                }}
                >Tilaa käytetyt konsolit meiltä nopeasti!
            </Typography>
            </div>
            </Container>
            
        </div>
    );
}
export default Yhteenveto;