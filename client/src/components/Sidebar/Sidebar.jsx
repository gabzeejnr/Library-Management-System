import React, { useState} from "react";
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return(
        <section id={styles.Sidebar} className={styles["left side"]}>
            <h2>Library Pro</h2>
        </section>
    );
}