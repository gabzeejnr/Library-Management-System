import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import styles from './Content.module.css';
import library from '../../data/library.json'

function LibraryHeader() {

    const icons = {
        fire: faFire
    }

    const [activeTab, setActiveTab] = useState('library')

    const changeTab = (tab) => {
        setActiveTab(tab)
    };

    return(
        <div id={styles.Library}>
            {library.tabs.map(tab => (
                <span key={tab.id} onClick={() => changeTab(tab.name)}
                    className={activeTab === tab.name ? styles['set-border'] : ""}><FontAwesomeIcon icon={icons[tab.icon]} />{tab.name}</span>
            ))}
        </div>
    )
}

export default LibraryHeader;