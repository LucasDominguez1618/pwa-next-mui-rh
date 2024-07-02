import { Stack, useTheme } from "@mui/material";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const subtitle =
    "¡Usar roomsite es realmente sencillo! Sigue estos tips para que tu experiencia sea realmente sensacional";
  const skip = "¿No deseas ver esto?";
  const sm = useMediaQuery("(min-width:600px)");

  return (
    <Container sx={{ background: "none" }}>
      <Stack>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
          }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            xs: "'title' 'img' 'subtitle' 'btn'",
            sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
          }}
          columnGap={{
            xs: 0,
            sm: 2,
          }}
          height={{
            xs: "92vh",
          }}
        >
         
          
          <Box
            gridArea={"img"}
            sx={{
              backgroundImage: `url('https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "300px", // Ajustar el tamaño de la imagen según sea necesario
            }}
          />

          {/* Subtítulo */}
          <Box
            gridArea={"subtitle"}
            textAlign={sm ? "left" : "center"}
            alignSelf={"center"}
          >
            <Typography variant="body1" color={"inherit"}>
              {subtitle}
            </Typography>
          </Box>

          {/* Botón */}
          <Box
            gridArea={"btn"}
            alignSelf={sm ? "start" : "center"}
            display={"flex"}
            justifyContent={sm ? "left" : "center"}
          >
            <Button variant="contained">Siguiente</Button>
          </Box>
        </Box>

        {/* Mensaje de "Saltar" */}
        <Box textAlign={sm ? "left" : "center"}>
          <Typography variant="body1" color={"inherit"}>
            {skip}
          </Typography>
        </Box>
        <Button variant="text">Saltar</Button>
      </Stack>
    </Container>
  );
};

export default MainSection;