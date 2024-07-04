import * as React from 'react';
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Rooms = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh", 
        paddingTop: "2rem",
        backgroundColor: "#f0f0f0",
      }}
      maxWidth="md"
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
      <Button
        variant="contained"
        style={{
          marginBottom: "1rem",
        }}
      >
        Buscar
      </Button>

      <Typography
        variant="h6"
        style={{
          marginRight: "11.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Vistos anteriormente
      </Typography>

  
      <Card sx={{ width: 280, marginBottom: '1rem'}}>
        <Box sx={{ width: '100%', height: 0, paddingBottom: '75%', position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} // Añadido border radius
          />
        </Box>
        <CardContent>
          <Typography variant="h6">Yosemite National Park</Typography>
          <Typography variant="body2">April 24 to May 02, 2021</Typography>
          <IconButton
            aria-label="bookmark Yosemite National Park"
            size="small"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            <BookmarkAdd />
          </IconButton>
          <Typography variant="body2">Total price:</Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>$2,900</Typography>
        </CardContent>
      </Card>
 

 
      <Typography variant="h6" style={{ marginRight: "13.5rem" }}>
        Sitios Cercanos
      </Typography>


      <Box sx={{ width: 380, marginBottom: '1rem', borderRadius: '10px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt="Sitios cercanos"
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </Box>

      <Box sx={{ position: 'fixed', bottom: '2rem', right: '11rem', '& > :not(style)': { m: 1 } }}>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Container>
  );
};

export default Rooms;