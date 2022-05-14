import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {Link} from'react-router-dom';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function Ostossisalto ({tuoteMaara,valitutTuotteet,summa,setvalitutTuotteet}) {
  
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  /*const poistaTuote = (idx)=>{

    const uusiLista = [...valitutTuotteet];
    uusiLista.splice = (idx,1);
    setvalitutTuotteet=uusiLista;
   
  }*/

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center',  }}>
        <Button onClick={toggleDrawer(true)}>Näytä kori</Button>
      </Box><div style={{height:"50px"}}></div>
      <SwipeableDrawer
        
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          
          <Typography align='center' sx={{ p: 2, color: 'text.secondary' }} >
              {tuoteMaara} tuotetta Ostoskorissa | Yhteissumma: {summa}</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        > 


<div
        style={{
            display : "flex",
            flexWrap : "wrap",
            justifyContent: "center",
            
          }}
        >
        {
            valitutTuotteet && valitutTuotteet.map (tuote=>{

                return (

        <Card key={tuote.id} sx={{ maxWidth: 120, margin:2 }} >

          { (tuote.id)?
          <div>
      <CardMedia
        component="img"
        height="100"
        image={tuote.kuva}
        alt="pelit"
      />
      <CardContent>
        <Typography gutterBottom variant="Body1" component="div">
          {tuote.nimi}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hinta: {tuote.hinta} &euro;
        </Typography>
        
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={ ()=>{
            
        }}>poista</Button>
      </CardActions>
       </div>
      :
      null
            }
      
    </Card>
    )})
  }
    </div>


          {(summa>0)?
            <div style={{display:"flex", justifyContent:"center",}}>
          <Button variant="contained" size="small"
           component={Link}
           to="/Tilaus"
          >Tilaamaan</Button>
          </div>
        :
        null  
        }
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}


export default Ostossisalto;