import { useMetar } from '../../Context/MetarContext';
import styles from './Home.module.css'

export function Home(){
    const { metarJson } = useMetar();

    console.log("Estado no Home:", metarJson);

    if (!metarJson || !metarJson.data || metarJson.data.length === 0) {
        return (
            <div className={styles.homeContainer}>
                <div className={styles.loadingCard}>
                    <p>Pesquise um ICAO acima para ver os dados detalhados...</p>
                </div>
            </div>
        );
    }

    const data = metarJson.data[0];

    return (
        <div className={styles.homeContainer}>
            <div className={styles.headerArea}>
                <span className={styles.icaoBadge}>{data.icao}</span>
                <h2 className={styles.stationName}>{data.station.name}</h2>
            </div>

            <div className={styles.infoCard}>
                <div className={styles.cardRow}>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>IATA</p>
                        <p className={styles.value}>{data.station.iata || 'N/A'}</p>
                    </div>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Category</p>
                        <p className={`${styles.value} ${styles.category} styles[data.flight_category]`}>
                            {data.flight_category}
                        </p>
                    </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.cardRow}>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Temperature</p>
                        <p className={styles.value}>{data.temperature.celsius}°C</p>
                    </div> 
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Dewpoint</p>
                        <p className={styles.value}>{data.dewpoint.celsius}°C</p>
                    </div>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Barometer</p>
                        <p className={styles.value}>{data.barometer.mb} hPa</p>
                    </div>
                </div>

                <hr className={styles.divider} />
                <div className={styles.cardRow}>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Wind</p>
                        <p className={styles.value}>
                            {data.wind.degrees}° @ {data.wind.speed_kts} kts
                        </p>
                    </div>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Visibility</p>
                        <p className={styles.value}>{data.visibility.meters.toLocaleString('pt-BR')} m</p>
                    </div>
                </div>

                <hr className={styles.divider} />
                <div className={styles.cardRow}>
                    <div className={styles.groupInfo}>
                        <p className={styles.label}>Clouds Report</p>
                        <p className={styles.value}>
                            {data.clouds[0]?.text || 'Clear'} 
                            {data.clouds[0]?.base_feet_agl ? ` at ${data.clouds[0].base_feet_agl}ft` : ''}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.rawMetar}>
                <p className={styles.label}>Raw METAR</p>
                <code>{data.raw_text}</code>
            </div>
        </div>
    )
}