// React Hooks
import { useState, createContext } from 'react';

// App CSS
import './App.css'

// Components
import { Card } from "./components/Card/Card";
import { Search } from "./components/Search/Search";

// Axios
import axios from 'axios'

// Context API
export const WeatherContext = createContext();

export function App() {

  const [ search, setSearch ] = useState('');
  const [ weatherData, setWeatherData ] = useState([]);
  const [showCard, setShowCard] = useState(false)

  function handleSubmitSearch(event){
    event.preventDefault();
    if (search.length > 0) {
        axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=15b56dd8&city_name=${search}`)
        .then(({data}) => {
          setWeatherData(data.results);
          setShowCard(true)
        })
        .catch((error) => {
          console.log(error);
        });
      }else{
        alert('Digite alguma cidade!')
      }
  };

  return (
      <div className="app">

        <div className='appContainer'>
          <h1 className='appTitle'>PREVISÃO DO TEMPO</h1>

          {showCard &&
            (<WeatherContext.Provider value={{ weatherData, setShowCard }}>
              <Card />
            </WeatherContext.Provider>)
          }
          <Search
            search={setSearch}
            onHandleSubmitSearch={handleSubmitSearch}
          />
        </div>

      </div>
  )
}
