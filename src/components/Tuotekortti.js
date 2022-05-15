import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tuotteet from "./Tuotteet";
import { useState } from "react";

function Tuotekortti({
  setvalitutTuotteet,
  valitutTuotteet,
  setTuotemaara,
  tuoteMaara,
  laskeSumma,
  setapuHinta,
  apuHinta,
  summa,
  setSumma,
}) {
  const [valittuNimi, setValittunimi] = useState();
  const [valittuTieto, setValittutieto] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Tuotteet &&
        Tuotteet.map((tuote, idx) => {
          return (
            <Card sx={{ maxWidth: 200, margin: 3 }} key={idx}>
              <CardMedia
                component="img"
                height="140"
                image={tuote.kuva}
                alt="pelit"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {tuote.nimi}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Hinta: {tuote.hinta} &euro;
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    let ostosapu = {
                      id: tuote.id,
                      nimi: tuote.nimi,
                      hinta: tuote.hinta,
                      kuva: tuote.kuva,
                    };
                    setvalitutTuotteet([...valitutTuotteet, ostosapu]);
                    setTuotemaara(tuoteMaara + 1);
                  }}
                >
                  Osta
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    setOpen(true);
                    setValittunimi(tuote.nimi);
                    setValittutieto(tuote.tietoa);
                  }}
                >
                  Lue lisää
                </Button>
              </CardActions>
            </Card>
          );
        })}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{valittuNimi}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {valittuTieto}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Sulje
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Tuotekortti;
