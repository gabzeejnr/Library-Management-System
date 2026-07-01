import { NavLink } from 'react-router-dom';
import styles from '../../styles/Components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faHouse, faUser, faExternalLink, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '@fontsource/poppins'

export default function SideBar() {

    return(
        <section id={styles.Sidebar}>
            <div className={styles.links}>
                <div className={styles['button-wrap']}>
                    <NavLink className={styles.link}>
                        <FontAwesomeIcon icon={faHouse} />
                        DASHBOARD
                    </NavLink>
                </div>
                <div className={styles['button-wrap']}>
                    <NavLink className={styles.link}>
                        <FontAwesomeIcon icon={faUser} />
                        PROFILE
                    </NavLink>
                </div>
                <div className={styles['button-wrap']}>
                    <NavLink className={styles.link}>
                        <FontAwesomeIcon icon={faBookBookmark} />
                        BORROW BOOK
                    </NavLink>
                </div>
            </div>
            <div className={styles['button-wrap']}>
                <NavLink className={`${styles.logout} ${styles.link}`}>
                    <FontAwesomeIcon icon={faSignOut} />
                    LOGOUT
                </NavLink>
            </div>
        </section>
    )
}