import styles from '../../styles/Components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookOpen, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins';
import SearchBar from '../SearchBar/SearchBar';
import ProfileImage from '../../assets/randPic.jpg';
import userData from '../../data/test.json'

export default function Navbar(){

    return(
        <div id={styles['Navbar']}>
            <div className={styles["left"]}>
                <FontAwesomeIcon icon={faBookOpen} />
                <h3>My Logo</h3>
            </div>
            <div className={styles["right"]}>
                <SearchBar />
                <FontAwesomeIcon icon={faBell} />
                <div className={styles["user"]}>
                    <div className={styles['profile-image-holder']}>
                        <img src={ProfileImage} alt="Profile Image" />
                    </div>
                    <span>
                        {userData.testUser.name}
                        <FontAwesomeIcon icon={faArrowDown} />
                    </span>
                </div>
            </div>
        </div>
    )
}