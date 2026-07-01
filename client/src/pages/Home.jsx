import Dashboard from "../components/Dashboard/Dashboard"
import Navbar from "../components/Navbar/Navbar"
import SideBar from "../components/Sidebar/SideBar"
import styles from '../styles/Home.module.css'

export default function Home() {
    return(
        <>
            <Navbar />
            <div className={styles["body-wrap"]}>
                <SideBar />
                <Dashboard />
            </div>
        </>
    )
}