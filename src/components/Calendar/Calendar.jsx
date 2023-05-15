// CSS Modules for Calendar
import styles from './Calendar.module.css'

// Context API
import { WeatherContext } from '../../App';
import { useContext, useState } from 'react';

export function Calendar(){

    const dayFilter = window.innerWidth <= 500 ? 5 : 8;

    const { weatherData } = useContext(WeatherContext)

    return (
        <div className={styles.calendar}>

            {weatherData.forecast.slice(1, dayFilter).map((data, index) => {
                return (
                    <div key={index} className={styles.day}>
                            <h4>{data.weekday}</h4>
                            <div className={styles.minMaxContainer}>
                                <b>{data.min}°</b>
                                <b>{data.max}°</b>
                            </div>
                        </div>
                )
            })}
        </div>
    );
};