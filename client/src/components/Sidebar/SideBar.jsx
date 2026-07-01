import { Link } from 'react-router-dom';
import styles from '../../styles/Components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faHouse, faUser, faExternalLink, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '@fontsource/poppins'
import { useState } from 'react';

export default function SideBar() {

    const [isActive, setIsActive] = useState(false);

    return(
        <section id={styles.Sidebar}>
            <div className={styles.links}>
                <div className={styles['button-wrap']}>
                    <FontAwesomeIcon icon={faHouse} />
                    <button type="button" className={styles.link}>DASHBOARD</button>
                </div>
                <div className={styles['button-wrap']}>
                    <FontAwesomeIcon icon={faUser} />
                    <button type="button" className={styles.link}>PROFILE</button>
                </div>
                <div className={styles['button-wrap']}>
                    <FontAwesomeIcon icon={faBookBookmark} />
                    <button type="button" className={styles.link}>BORROW BOOK</button>
                </div>
            </div>
            <div className={styles['button-wrap']}>
                <FontAwesomeIcon icon={faSignOut} />
                <button type="button" className={`${styles.logout} ${styles.link}`}>
                    LOGOUT
                </button>
            </div>
        </section>
    )
}