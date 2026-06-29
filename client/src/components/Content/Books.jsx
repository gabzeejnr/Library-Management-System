import React from "react";
import styles from './Content.module.css'
import books from '../../data/Books.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Books() {
    return (
        <div id={styles.Books}>
            {books.books.map((book, index) => (
                <div className={styles['book-wrap']} key={index - 1}>
                    <div key={index} className={styles['book']}>
                        <img src={book.image} alt={book.title}
                            className={styles['book-image']} />
                        <a href={book.href}><p className={styles['book-title']}>{book.title}</p></a>
                    </div>
                    <span>
                        <span>Continue</span>
                        <span style={{gap: "10px"}}>
                            <FontAwesomeIcon icon={faBookOpen} />
                            Reading
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Books;