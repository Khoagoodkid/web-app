
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState } from 'react';
import Button from './components/Buttons';
import { choices } from './helpers/getInfo';


function App() {
  const [locationName, setLocationName] = useState("Location Name")
  const [temperature, setTemperature] = useState("Temperature")
  const [weatherDescription, setweatherDescription] = useState("Weather Description")
  const [background, setBackground] = useState(null)
  const [info, setInfo] = useState (null)
  const onUserChoose = locations => {
    const location = choices[locations]


    const locationsName = location.name
    const locationsTemperature = location.temp
    const locationsWeatherDescription = location.description
    const locationsBackground = location.url
    setLocationName(locationsName)
    setTemperature(locationsTemperature)
    setweatherDescription(locationsWeatherDescription)
    setBackground(locationsBackground)


  }
  const apiCall = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=401c35c93affd4c077e6d97b06f8ab2e`
    const response =  await fetch(url)
    const data = await response.json()
   
    setInfo(data.main.temp)
  }

  return (
    <div>



      <div className="App" style={{ backgroundImage: `url(${background})` }} >
        <Button onUserChoose={onUserChoose} />
        <div className="container-fluid text-white my-auto">
          <div className="container mx-auto my-4 py-4">
            <div className="row justify-content-center text-center">
              <h1 className="col-12 display-4 my-2 py-3 text-success">
                Awesome Weather App
              </h1>
              <h2 className="col-12">{locationName}</h2>
              <h3 className="col-12 text-danger">{temperature}</h3>
              <h3 className="col-12">{weatherDescription}</h3>
              <h1>{info}</h1>
              <button onClick={() => apiCall("London")}>London</button>
              <button onClick={() => apiCall("Seoul")}>Seoul</button>
              <button onClick={() => apiCall("Washington")}>Washington</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
