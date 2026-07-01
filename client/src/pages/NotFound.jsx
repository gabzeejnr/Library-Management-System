import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/NotFound.module.css';
import '@fontsource/orbitron';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function NotFound(){
    return(
        <div id={styles['ErrorPage']}>
            <FontAwesomeIcon className={styles['cry-emoji']} icon={faFaceSadTear} />
            <div className={styles["big-error-text"]}>
                <font size='7' style={{fontFamily: 'Orbitron'}}>4&ensp;
                    <FontAwesomeIcon icon={faRobot} />
                    &ensp;4</font>
                <div style={{alignSelf: 'center'}}><font size='5'><tt>Page not Found</tt></font></div>
            </div>
            <p className={styles['small-error-text']}>The Page you are looking for doesn't exist or another error occured.</p>
            <button>Go Back Home</button>
        </div>
    )
}