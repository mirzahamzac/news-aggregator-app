
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreferences } from '../redux/preferencesActions';
import { FormControl, InputLabel, MenuItem, Select , Container, Modal, Box,Typography , Button} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PreferencesForm = ({open , close}) => {
  const dispatch = useDispatch();
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPreferences(sources, categories, authors));
  };

  return (
    <Modal
    open={open}
    onClose={close}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
     <Box sx={style}>

     <form onSubmit={handleSubmit}>
   
   <FormControl fullWidth>
   <InputLabel>Select Source</InputLabel>
   <Select
     label="Filter by"
     onChange={(e) => setSources( e.target.value)}
     defaultValue=""
   >
     <MenuItem value="">None</MenuItem>
     {/* Add filter options dynamically */}
     <MenuItem value="news_api_org">NewsAPI.org</MenuItem>
     <MenuItem value="ny_times">New York Times</MenuItem>
     <MenuItem value="guardian">The Guardian</MenuItem>
   </Select>

   
 </FormControl>

 
  

   
   <Button type="submit" className='primary' color='primary'>Save Preferences</Button>
 </form>
     </Box>
    
    </Modal>
  );
};

export default PreferencesForm;
