import styles from '../../styles/Components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(){
    return(
        <>
            <div className={styles["search-wrapper"]}>
                <span className={styles["search-icon-wrapper"]}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input type="search" aria-label="Search"
                    name="search" id="search" placeholder='Search...' />
            </div>
        </>
    )
}