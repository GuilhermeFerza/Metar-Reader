import { Outlet } from "react-router-dom";
import { Header } from "../Components/Layout/Header";
import styles from './App.module.css'
import { MetarProvider } from "../Context/MetarContext";

export default function App(){
    return(
        <MetarProvider>
            <div className={styles.appContainer}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </MetarProvider>
    )
}