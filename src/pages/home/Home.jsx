import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import styles from './Home.module.css';

export default function Home(){

    return(
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1>Welcome to client manager</h1>
                    
                    <div className={styles.button}>
                        <Link to='/read'>
                            <Button
                                text='Start'
                            />
                        </Link>
                    </div>

                </div>
        </div>
    )
}