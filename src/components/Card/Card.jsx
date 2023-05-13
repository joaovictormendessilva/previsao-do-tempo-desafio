// Images
import arrowDown from '../../assets/img/arrow-down.svg';
import arrowUp from '../../assets/img/arrow-up.svg';
import closeButton from '../../assets/img/x-lg.svg';

// CSS Modules for Card
import styles from './Card.module.css'

// Components
import { Calendar } from '../Calendar/Calendar';

// Context API
import { WeatherContext } from '../../App';
import { useContext } from 'react';

export function Card(){

    const { weatherData, setShowCard } = useContext(WeatherContext);
    
    
        return (
            <div className={styles.card}>
                
                <div className={styles.cardHeader}>
                    <h4>{weatherData.city}</h4>
                    <button onClick={() => setShowCard(false)}>
                        <img src={closeButton} alt="Fechar" />
                    </button>
                </div>

                <div className={styles.container}>
                    <h2>{weatherData.temp}°C {weatherData.description}</h2>
                    <div className={styles.principalInfo}>
                        <div className={styles.infoControl}>
                            <div className={styles.minMaxContainer}>
                                <b>
                                    <img src={arrowDown} alt="Mímina" />
                                    {weatherData.forecast[0].min}°
                                </b>

                                <b>
                                    <img src={arrowUp} alt="Máxima" />
                                    {weatherData.forecast[0].max}°
                                </b>
                            </div>

                            <div>
                                <span>Vento <b>{weatherData.forecast[0].wind_speedy}</b></span>
                            </div>
                        </div>

                        <div className={styles.infoControl}>

                            <div>
                                <span>Chance de Chuva <b>{weatherData.forecast[0].rain_probability}%</b></span>
                            </div>
                            <div>
                                <span>Humidade <b>{weatherData.humidity}%</b></span>
                            </div>
                        </div>
                    </div>
                </div>

                <Calendar />
                
            </div>
        );
};