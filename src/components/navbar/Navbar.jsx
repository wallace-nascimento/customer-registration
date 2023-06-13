import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(){

    const[active, setActive] = useState(false)

    const toggleMode = () =>{
        setActive(!active)
        console.log("toggleMode Aqui")
    }

    return(

        <nav className={styles.nav}>

            <img src={logo} alt='client management' className={styles.image} />
            <div className={styles.menu_web}>
                <ul className={styles.list_web}>
                    <li className={styles.item_web}><Link to='/' className={styles.link}> Home </Link></li>
                    <li className={styles.item_web}> <Link to='/read' className={styles.link}>Clients registrad</Link> </li>
                </ul>
            </div>

            <div className={styles.menu_mobile}>
                {!active ? 
                    <MenuIcon className={styles.menuIcon} onClick={()=>toggleMode()} fontSize='large'/>
                    : 
                    <CloseIcon className={styles.menuIcon} onClick={()=>toggleMode()}/>
                     
                    
                }
                    {active && (
                        <div className={styles.menu}>
                            <ul className={styles.list_mobile}>
                                <li className={styles.item_mobile}><Link to='/' > Home </Link></li>
                                <li className={styles.item_mobile}> <Link to='/read'>Clients registrad</Link> </li>
                            </ul>
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default Navbar;