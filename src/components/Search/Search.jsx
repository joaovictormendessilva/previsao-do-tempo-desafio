// CSS Modules for Search
import styles from './Search.module.css';

import searchButton from '../../assets/img/search.svg'

export function Search({ search, onHandleSubmitSearch }){
    return (
        <div className={styles.search}>
            <form onSubmit={onHandleSubmitSearch}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder='Insira aqui o nome da cidade' 
                    onChange={(event) => search(event.target.value)}
                />
                <button type='submit' className={styles.searchButton} >
                    <img
                        src={searchButton} 
                        alt="Botão de Pesquisa" 
                    />
                </button>
            </form>
        </div>
    );
};