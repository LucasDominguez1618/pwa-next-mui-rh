import * as React from 'react';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const options = ['1 huésped', '2 huéspedes', '3 huéspedes','4 huéspedes'];

const ControllableStates = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: '100%', marginBottom: '1rem' }}
      renderInput={(params) => <TextField {...params} label="Seleccione huéspedes" variant="outlined" />}
    />
  );
};

const LabelBottomNavigation = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
};

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
     

      
      <Typography
        variant="h6"
        sx={{ alignSelf: 'flex-start', marginLeft: '1rem' }}
      >
        Home
      </Typography>
      <Box sx={{ width: '100%', padding: '1rem', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <TextField
            placeholder="Ingrese ubicación"
            variant="outlined"
            sx={{ width: '100%', marginRight: '1rem' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="inherit">
            <FilterListIcon />
          </IconButton>
        </Box>
        <ControllableStates />
        <TextField
          placeholder="Ingrese fechas"
          variant="outlined"
          sx={{ width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: '50%', marginBottom: '1rem' }}
      >
        Buscar
      </Button>

      <Typography
        variant="h6"
        sx={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}
      >
        Vistos anteriormente
      </Typography>

      <Card sx={{ width: 240, marginBottom: '1rem' }}>
        <Box sx={{ width: '100%', height: 0, paddingBottom: '75%', position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
          />
        </Box>
        <CardContent>
          <Typography variant="h6">Dormitorio Individual</Typography>
   
          <IconButton
            aria-label="bookmark Yosemite National Park"
            size="small"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            <BookmarkAdd />
          </IconButton>
          <Typography variant="body2">Precio</Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>$2,900</Typography>
        </CardContent>
      </Card>

      <Typography variant="h6" sx={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
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

      <Box sx={{ position: 'fixed', bottom: '4rem', width: '100%' }}>
        <LabelBottomNavigation />
      </Box>
      
      <Box sx={{ position: 'fixed', bottom: '2rem' }}>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Container>
  );
};

export default Rooms;