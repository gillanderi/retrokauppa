import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Yhteenveto({ lomakkeentiedot, aika }) {
  return (
    <Container maxWidth="md">
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          paddingTop: "2px",
          paddingBottom: "10px",
          color: "#f8fbfb",
          background:
            "linear-gradient(4deg, rgba(0,0,0,0.026237252713585457) 0%, rgba(67,70,69,1) 34%, rgba(73,76,75,1) 37%, rgba(81,84,83,1) 57%, rgba(116,121,120,1) 59%, rgba(120,125,124,1) 61%, rgba(126,131,130,1) 64%, rgba(132,137,136,1) 67%, rgba(148,153,152,1) 75%, rgba(136,141,140,1) 75%, rgba(164,169,168,1) 87%, rgba(198,204,202,1) 100%)",
          display: "block",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            margin: "0.5em",
          }}
        >
          Kiitos tilauksesta!
        </Typography>
      </div>

      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Card sx={{ maxWidth: 400 }} style={{ margin: "2em" }}>
          <CardMedia
            component="img"
            height="140"
            image="images/controllers.jpg"
            alt="controllers"
          />
          <CardContent>
            <Typography variant="h6">Yhteenveto tilauksesta:</Typography>
            <Typography>
              <br />
              Etunimi: {lomakkeentiedot.current.etunimi}
              <br />
              Sukunimi: {lomakkeentiedot.current.sukunimi}
              <br />
              <br />
              Kotiosoite: {lomakkeentiedot.current.osoite}
              <br />
              Postinumero: {lomakkeentiedot.current.postinumero}
              <br />
              Kaupunki:{lomakkeentiedot.current.kaupunki}
              <br />
              <br />
            </Typography>

            {lomakkeentiedot.current.puhelin ? (
              <Typography>
                Puhelinnumero: {lomakkeentiedot.current.puhelin}
              </Typography>
            ) : null}
            {lomakkeentiedot.current.email ? (
              <Typography>
                Sähköposti: {lomakkeentiedot.current.email}
                <br />
                <br />
              </Typography>
            ) : null}
            <Typography>
              Toimitustapa: {lomakkeentiedot.current.lahetys}
            </Typography>

            <Typography>
              Valittu laskun eräpäivä:
              {format(new Date(aika), "dd/MM/yyyy")}
            </Typography>

            <Typography
              variant="body1"
              style={{
                margin: "1em",
                color: "#888c8b",
              }}
            >
              Saat laskun tiedot sähköpostiisi pian!
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              component={Link}
              to="/"
              onClick={() => {
                lomakkeentiedot.current.etunimi = null;
                lomakkeentiedot.current.sukunimi = null;
                lomakkeentiedot.current.osoite = null;
                lomakkeentiedot.current.postinumero = null;
                lomakkeentiedot.current.kaupunki = null;
                lomakkeentiedot.current.puhelin = null;
                lomakkeentiedot.current.email = null;
                lomakkeentiedot.current.lahetys = null;
              }}
            >
              Etusivulle
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
export default Yhteenveto;
