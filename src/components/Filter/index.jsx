import { links } from "../../assets/images-links";
import "./styles.css";
import { list } from "./../../assets/cards-list";
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button, Input, InputAdornment, InputLabel, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { filterKey } from "../../redux/filterSlice";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Slider from '@mui/material/Slider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '0.2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
};


function Filter() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [prices, setPrices] = React.useState([20, 250]);
  const [rooms, setRooms] = useState('');
  const [bed, setBed] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [type, setType] = useState('');

  const handleFilters = () => {
    console.log(prices,rooms,bed,bathrooms,type)
  }

  const handleChange = (event, newValue) => {
    setPrices(newValue);
  };
  
  function valuetext(prices) {
    return `${prices}°C`;
  }

  return (
    <div className="filter-div">
      {
      links.map((item, i) => (
        <div onClick={()=> dispatch(filterKey(item.label))} key={i} className={`links-box ${i == list && "selected-box"}`}>
          <img src={item.img} className="links-img" />
          <p className={`links-label ${i == list && "selected-label"}`}>
            {item.label}
          </p>
        </div>
      ))
      }

      <button onClick={handleOpen} className="filter-btn">
        <TuneIcon sx={{marginRight: '5px'}}/> Filter </button>

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', pt: 2}}>
        <CloseIcon fontSize="large" sx={{m: 1}}/>
        <Typography sx={{display: 'flex', justifyContent: 'center'}} variant="h6">
         Filters
        </Typography>
        </Box>
        <hr style={{opacity: '0.4'}}/>

        <div style={{padding: '1rem'}}>
        <Typography variant="h5">
          Rooms and Beds
        </Typography>
        <Typography variant="body1" sx={{my:2}}>
          Price Range
        </Typography>
        <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

        <Box sx={{ width: 500 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={prices}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{color: 'black'}}
            min={0}
            step={5}
            max={300}
          />
        </Box>

        <Box style={{display: 'flex', justifyContent: 'space-around'}}>
        <Box>
        <InputLabel htmlFor="standard-adornment-amount">Minimum</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={prices[0]}
            onChange={(e)=> setPrices([e.target.value, prices[1]])}
          />
        </Box>
        <Box sx={{ml: 5}}>
        <InputLabel htmlFor="standard-adornment-amount">Maximum</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={prices[1]}
            onChange={(e)=> setPrices([e.target.value, prices[0]])}
          />
        </Box>
        </Box>
        </div>

        <Typography variant="body1" sx={{my:2}}>
          Rooms
        </Typography>
        <div className="rooms" onClick={(e)=> setRooms(e.target.innerText)}>
          <div className="rooms-data">Any</div>
          <div className="rooms-data">1</div>
          <div className="rooms-data">2</div>
          <div className="rooms-data">3</div>
          <div className="rooms-data">4</div>
          <div className="rooms-data">5</div>
          <div className="rooms-data">6</div>
          <div className="rooms-data">7</div>
          <div className="rooms-data">8+</div>
        </div>
        <Typography variant="body1" sx={{my:2}}>
          Beds
        </Typography>
        <div className="rooms" onClick={(e)=> setBed(e.target.innerText)}>
          <div className="rooms-data">Any</div>
          <div className="rooms-data">1</div>
          <div className="rooms-data">2</div>
          <div className="rooms-data">3</div>
          <div className="rooms-data">4</div>
          <div className="rooms-data">5</div>
          <div className="rooms-data">6</div>
          <div className="rooms-data">7</div>
          <div className="rooms-data">8+</div>
        </div>
        <Typography variant="body1" sx={{my:2}}>
          Bathrooms
        </Typography>
        <div className="rooms" onClick={(e)=> setBathrooms(e.target.innerText)}>
          <div className={`rooms-data ${ bathrooms === 'Any' ? 'conditional-bg': 'null'}`}>Any</div>
          <div className={`rooms-data ${ bathrooms === '1' ? 'conditional-bg': 'null'}`}>1</div>
          <div className={`rooms-data ${ bathrooms === '2' ? 'conditional-bg': 'null'}`}>2</div>
          <div className={`rooms-data ${ bathrooms === '3' ? 'conditional-bg': 'null'}`}>3</div>
          <div className={`rooms-data ${ bathrooms === '4' ? 'conditional-bg': 'null'}`}>4</div>
          <div className={`rooms-data ${ bathrooms === '5' ? 'conditional-bg': 'null'}`}>5</div>
          <div className={`rooms-data ${ bathrooms === '6' ? 'conditional-bg': 'null'}`}>6</div>
          <div className={`rooms-data ${ bathrooms === '7' ? 'conditional-bg': 'null'}`}>7</div>
          <div className={`rooms-data ${ bathrooms === '8+' ? 'conditional-bg': 'null'}`}>8+</div>
        </div>
        <hr style={{marginTop: '20px', opacity: '0.4'}}/>
        <Typography variant="h5" sx={{my:2}}>
          Property Type
        </Typography>
        <div onClick={(e)=> setType(e.target.innerText)} className="type">
          <div className={`type-data ${ type === 'House' ? 'conditional-bg': 'null'}`}><HouseOutlinedIcon variant="outlined" fontSize="large"/> House</div>
          <div className={`type-data ${ type === 'Apartment' ? 'conditional-bg': 'null'}`}><ApartmentOutlinedIcon fontSize="large"/> Apartment</div>
          <div className={`type-data ${ type === 'GuestHouse' ? 'conditional-bg': 'null'}`}> <MapsHomeWorkIcon fontSize="large"/>  GuestHouse</div>
          <div className={`type-data ${ type === 'Hotel' ? 'conditional-bg': 'null'}`}><HotelIcon fontSize="large"/> Hotel</div>
        </div>
      <Box sx={{mt:2, display:'flex', justifyContent: 'end'}}>
      <Button onClick={handleFilters} variant="contained" sx={{color: 'white', backgroundColor: 'black'}}>Show Results</Button>
      </Box>
      </div>
    </Box>
    </Modal>

    </div>
  );
}

export default Filter;
