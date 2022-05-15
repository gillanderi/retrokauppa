import { Link, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Container, FormHelperText } from "@mui/material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fi } from "date-fns/locale";
import { useState } from "react";
import { addDays } from "date-fns";

function Tilaus({ lomakkeentiedot, aika, setAika }) {
  const maxAika = new Date();
  const [maxPaiva] = useState(addDays(maxAika, +14));
  const [checked, setChecked] = useState(false);

  const handleAika = (newValue) => {
    setAika(newValue);
  };

  const [virheilmoitus, setVirheilmoitus] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const formHandle = (e) => {
    e.preventDefault();

    let virheet = {};

    if (!lomakkeentiedot.current.etunimi) {
      virheet = { ...virheet, etunimi: "Syötä etunimi" };
    } else {
      if (lomakkeentiedot.current.etunimi.length < 2) {
        virheet = { ...virheet, etunimi: "Syötä kunnollinen nimi" };
      }
    }
    if (!lomakkeentiedot.current.sukunimi) {
      virheet = { ...virheet, sukunimi: "Syötä sukunimi" };
    } else {
      if (lomakkeentiedot.current.sukunimi.length < 2) {
        virheet = { ...virheet, sukunimi: "Syötä kunnollinen nimi" };
      }
    }
    if (!lomakkeentiedot.current.osoite) {
      virheet = { ...virheet, osoite: "Syötä kotiosoite" };
    } else {
      if (lomakkeentiedot.current.osoite.length < 2) {
        virheet = { ...virheet, osoite: "Syötä kunnollinen osoite" };
      }
    }

    if (!lomakkeentiedot.current.postinumero) {
      virheet = { ...virheet, postinumero: "Syötä postinumero" };
    } else {
      if (lomakkeentiedot.current.postinumero.length < 2) {
        virheet = { ...virheet, postinumero: "Syötä kunnollinen postinumero" };
      }
    }

    if (!lomakkeentiedot.current.kaupunki) {
      virheet = { ...virheet, kaupunki: "Syötä kaupunki" };
    } else {
      if (lomakkeentiedot.current.kaupunki.length < 2) {
        virheet = { ...virheet, kaupunki: "Syötä kunnollinen kaupunki" };
      }
    }

    if (!lomakkeentiedot.current.puhelin && !lomakkeentiedot.current.email) {
      virheet = { ...virheet, puh: "Syötä puhelin tai email" };
    }
    if (!lomakkeentiedot.current.lahetys) {
      virheet = { ...virheet, lahetys: "Valitse lähetys muoto" };
    }
    if (aika > maxPaiva) {
      virheet = { ...virheet, aika: "Aseta eräpäivä kahden viikon sisälle" };
    }
    if (aika < maxAika) {
      virheet = {
        ...virheet,
        aika: "eräpäivä ei voi olla tänään tai menneisyydessä",
      };
    }
    if (!aika) {
      virheet = { ...virheet, aika: "Valitse eräpäivä" };
    }
    if (!checked) {
      virheet = { ...virheet, tilausehdot: "Tilaushdot on hyväksyttävä" };
    }

    if (Object.entries(virheet).length > 0) {
      setVirheilmoitus({ ...virheet });
    } else {
      setVirheilmoitus({});
      history.push({
        pathname: "/Yhteenveto",
      });
    }
  };

  const inputHandler = (e) => {
    lomakkeentiedot.current[e.target.name] = e.target.value;
  };

  return (
    <Container maxWidth="md">
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
            image="/images/retro.jpg"
            alt="retro"
          />
          <CardContent>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={fi}>
              <form onSubmit={formHandle}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1.5em",
                  }}
                >
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="etunimi"
                    id="outlined-required"
                    label="Etunimi *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.etunimi}
                    error={Boolean(virheilmoitus.etunimi)}
                  />
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="sukunimi"
                    id="outlined-required"
                    label="Sukunimi *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.sukunimi}
                    error={Boolean(virheilmoitus.sukunimi)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="osoite"
                    id="outlined-required"
                    label="Kotiosoite *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.osoite}
                    error={Boolean(virheilmoitus.osoite)}
                  />
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="postinumero"
                    id="outlined-required"
                    label="postinumero *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.postinumero}
                    error={Boolean(virheilmoitus.postinumero)}
                  />
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="kaupunki"
                    id="outlined-required"
                    label="kaupunki *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.kaupunki}
                    error={Boolean(virheilmoitus.kaupunki)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="puhelin"
                    id="yksi-required"
                    label="Puhelinnumero *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.puh}
                    error={Boolean(virheilmoitus.puh)}
                  />
                  <TextField
                    style={{ margin: "0.5em" }}
                    name="email"
                    id="yksi-required"
                    label="Sähköposti *"
                    onChange={inputHandler}
                    helperText={virheilmoitus.puh}
                    error={Boolean(virheilmoitus.puh)}
                  />
                </div>
                <FormControl
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "1.5em",
                  }}
                >
                  <FormLabel id="radiobutton" style={{ margin: "1em" }}>
                    Tilauksen toimitus:
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="radiobutton"
                    name="radiobuttonsgroup"
                    style={{ maxWidth: 500 }}
                  >
                    <FormControlLabel
                      value="Kotiovelle"
                      control={<Radio name="lahetys" onChange={inputHandler} />}
                      label="Kotiovelle"
                    />

                    <FormControlLabel
                      value="Postin pakettiautomaatti"
                      control={<Radio name="lahetys" onChange={inputHandler} />}
                      label="Postin pakettiautomaatti"
                    />

                    <FormControlLabel
                      value="Postin toimipaikka"
                      control={<Radio name="lahetys" onChange={inputHandler} />}
                      label="Postin toimipaikka"
                    />
                  </RadioGroup>
                  <FormHelperText error={Boolean(virheilmoitus.lahetys)}>
                    {virheilmoitus.lahetys}
                  </FormHelperText>
                </FormControl>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                  }}
                >
                  <DatePicker
                    name="erapaiva"
                    label="Valitse laskun eräpäivä:"
                    value={aika}
                    onChange={handleAika}
                    disableMaskedInput={true}
                    minDate={new Date(addDays(maxAika, +1))}
                    maxDate={new Date(addDays(maxAika, +14))}
                    error={Boolean(virheilmoitus.aika)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ m: 1 }}
                        helperText={virheilmoitus.aika}
                      />
                    )}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                  }}
                >
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          color="secondary"
                          name="tilausehdot"
                          onChange={handleChange}
                        />
                      }
                      label="Hyväksyn tilausehdot *"
                    />
                    <FormHelperText error={Boolean(virheilmoitus.tilausehdot)}>
                      {virheilmoitus.tilausehdot}
                    </FormHelperText>
                  </FormControl>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button size="small" component={Link} to="/">
                    Palaa / nollaa tilaus
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Lähetä Tilaus
                  </Button>
                </div>
              </form>
            </LocalizationProvider>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
export default Tilaus;
