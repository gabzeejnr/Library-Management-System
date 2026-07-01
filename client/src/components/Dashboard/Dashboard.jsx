import { faBook, faBookOpen, faTriangleExclamation, faUsers } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Components.module.css'
import StatCard from './StatCard'

export default function Dashboard() {
    return(
        <div id={styles.Dashboard}>
            <div className={styles["stat-holder"]}>
                <StatCard
                  title='Total Books'
                  value='1250'
                  icon={faBook} />
                <StatCard
                  title='Members'
                  value='324'
                  icon={faUsers} />

                <StatCard
                  title='Borrowed'
                  value='96'
                  icon={faBookOpen} />

                <StatCard
                  title='Overdue'
                  value='5'
                  icon={faTriangleExclamation} />
            </div>
        </div>
    )
}