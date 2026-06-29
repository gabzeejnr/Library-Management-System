import styles from './Content.module.css';
import Library from './LibraryHeader.jsx';
import OtherThing from './OtherThing.jsx';
import Books from './Books.jsx'

function Content() {
    return(
        <div id={styles.Content}>
            <Library />
            <OtherThing />
            <Books />
        </div>
    );
}

export default Content;