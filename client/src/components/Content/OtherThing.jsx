import React from "react";
import styles from './Content.module.css'
import otherthing from '../../data/otherthing.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity, faBookOpen, faCheckDouble, faTrash, faGear, faFilter, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

function OtherThing() {

    const icons = {
        faInfinity: faInfinity,
        faBookOpen: faBookOpen,
        faCheckDouble: faCheckDouble,
        faTrash: faTrash,
        faGear: faGear,
        faFilter: faFilter,
        faClockRotateLeft: faClockRotateLeft
    }
    return(
       <div id={styles.OtherThing}>
            {otherthing.buttons.map(thing => (
                <button key={thing.id}><FontAwesomeIcon icon={icons[thing.icon]}/>{thing.id}</button>
            ))}
       </div>
    )
}

export default OtherThing;