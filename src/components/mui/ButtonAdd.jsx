import { Link } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import styles from './button.module.css';

export default function FloatingActionButtons() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 }}} className={styles.button}>
        
        <Link to='/create'>
          <Fab color="primary" aria-label="add">
          
          <AddIcon />
       
        </Fab>
        </Link>
        
       
      </Box>
    );
  }