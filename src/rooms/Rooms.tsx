import * as React from 'react';
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import AspectRatio from '@mui/joy/AspectRatio'; // Importa AspectRatio desde MUI
import Button from '@mui/material/Button'; // Importa Button desde MUI
import Card from '@mui/material/Card'; // Importa Card desde MUI
import CardContent from '@mui/material/CardContent'; // Importa CardContent desde MUI
import IconButton from '@mui/material/IconButton'; // Importa IconButton desde MUI
import Typography from '@mui/material/Typography'; // Importa Typography desde MUI
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const Rooms = () => {

  return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh", // Ajusta el contenedor a toda la altura de la pantalla
          paddingTop: "2rem", // Espacio superior para separar del borde superior de la pantalla
          backgroundColor: "#f0f0f0",
        }}
        maxWidth="md" // Ancho máximo del contenedor ajustado según tus necesidades
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Input placeholder="Ingrese ubicación" />
        </div>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Input placeholder="Seleccione huéspedes" />
        </div>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Input placeholder="Ingrese fechas" />
        </div>

        <Card sx={{ width: 320 }}>
          <div style={{ position: 'relative' }}>
            <Typography variant="h6">Yosemite National Park</Typography>
            <Typography variant="body2" color="text.secondary">April 24 to May 02, 2021</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              color="primary"
              size="small"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
              <BookmarkAdd />
            </IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography variant="body2" color="text.secondary">Total price:</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>$2,900</Typography>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              sx={{ mt: 2, alignSelf: 'flex-end' }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
      </Container>
  );
};

export default Rooms;