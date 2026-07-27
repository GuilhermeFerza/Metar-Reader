import { useMetar } from '../../Context/MetarContext';
import styles from './Home.module.css'

export function Home(){
    const { metarJson } = useMetar();

    console.log("Estado no Home:", metarJson);

    if (!metarJson) return null;

    return (
        <div className={styles.homeContainer}>
            teste
            <pre className={styles.info}>{JSON.stringify(metarJson)}</pre>
            <pre className={styles.info}>{JSON.stringify(metarJson)}</pre>
        </div>
    )
}