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
  const [ showCard, setShowCard ] = useState(false);
  const [ showErrorBox, setShowErrorBox ] = useState(false);

  function handleSubmitSearch(event){
    event.preventDefault();

    if (search.length > 0) {

        axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=f93cb03c&city_name=${search}`)
        .then(({data}) => {

          if (data.by === 'default') {
            setShowErrorBox(true);
          }
          else{
            setShowErrorBox(false);
          }
          setShowCard(true)
          setWeatherData(data.results);
          

          
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
            showErrorBox &&
            <div className='boxMessage'>
              <h5 className='errorMessage'>Cidade não encontrada. <br></br> por padrão, a resposta será: </h5>
            </div>
          }

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
