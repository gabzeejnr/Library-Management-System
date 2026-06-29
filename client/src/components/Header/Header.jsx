import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faArchive, faUserGear } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <header id="Header">
            <div className="left">
                <button><FontAwesomeIcon icon={faBars} /></button>
                <p>WTR-LAB</p>
            </div>
            <div className="right">
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <button><FontAwesomeIcon icon={faArchive} /></button>
                <button><FontAwesomeIcon icon={faUserGear} /></button>
            </div>
        </header>
    )
}

export default Header;