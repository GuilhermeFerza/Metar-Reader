import { Outlet } from "react-router-dom";
import { Header } from "../Components/Layout/Header";
import styles from './App.module.css'

export default function App(){
    return(
        <div className={styles.appContainer}>
            <Header />
            <main>
                <Outlet />
            </main>
            
        </div>
        
    )
}