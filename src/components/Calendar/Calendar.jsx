// CSS Modules for Calendar
import styles from './Calendar.module.css'

export function Calendar(){

    const days = [
         {
            day: "Terça",
            min: "18°",
            max: "26°"
        },
        {
            day: "Quarta",
            min: "18°",
            max: "26°"
        },
        {
            day: "Quinta",
            min: "18°",
            max: "26°"
        },
        {
            day: "Sexta",
            min: "18°",
            max: "26°"
        },
        {
            day: "Sábado",
            min: "18°",
            max: "26°"
        },
        {
            day: "Domingo",
            min: "18°",
            max: "26°"
        },
        
    ]

    return (
        <div className={styles.calendar}>

            {days.map((day) => {
                return (
                        <div className={styles.day}>
                            <h4>{day.day}</h4>
                            <div className={styles.minMaxContainer}>
                                <b>{day.min}</b>
                                <b>{day.max}</b>
                            </div>
                        </div>
                    )
            })}
        </div>
    );
};