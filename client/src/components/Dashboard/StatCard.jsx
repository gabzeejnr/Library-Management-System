import styles from '../../styles/Components.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StatCard( {title, value, icon} ) {
    return(
        <div className={styles["stat-card"]}>
            <p className={styles.title}>
                <FontAwesomeIcon icon={icon} />&ensp;
                {title}
            </p>
            <p>{value}</p>
        </div>

    )
}