// src/app/(home)/page.tsx


import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata = { title: "Domov | ZoškaSnap" };

export default function Home() {

  return (

    <Container>
      <Typography> Domovská stránka </Typography>
      <Divider></Divider>
      <Typography>Vitajte! </Typography>
    </Container>
  );
}

