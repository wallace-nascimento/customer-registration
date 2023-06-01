import { Link } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function FloatingActionButtons() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 }, position:'relative', display:'flex', justifyContent:'end', marginRight:4}}>
        
        <Link to='/customer-registration/create'>
          <Fab color="primary" aria-label="add">
          
          <AddIcon />
       
        </Fab>
        </Link>
        
       
      </Box>
    );
  }