import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'

function Navbar(){

    return(
        <nav className={styles.nav}>
            <img src={logo} alt='client management' className={styles.image} />
            <ul>
                <li><Link to='/customer-registration' className={styles.link}> Home </Link></li>
                <li> <Link to='/customer-registration/read' className={styles.link}>Clients registrad</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;