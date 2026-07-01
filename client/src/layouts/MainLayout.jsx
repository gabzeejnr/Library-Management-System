import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SideBar from '../components/Sidebar/Sidebar';
import styles from '../styles/MainLayout.module.css';

export default function MainLayout({children}){
    return(
        <>
            <Navbar />
            <div className={styles["body-wrap"]}>
                <SideBar />

                <main>
                    {children}
                </main>
            </div>
        </>
    )
}