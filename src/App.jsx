import React, { useState, useEffect } from 'react';
import Cards from './Components/Cards'
import axios from 'axios';
import './App.css';
const API_KEY = "78872b499149036415d75305243de5d8";


const App = () => {
    const [cities, setCities] = useState([""]);
    const [tempCity, setTempCity] = useState("");
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(false);
    const updateCities = (submitted, event) => { // data will be obtained from input
        if(submitted){
            setCities(prevData => [...prevData, tempCity]);
        }
        else setTempCity(event.target.value);
    }
    useEffect(() => {
        // ComponentDidUpdate
        let city = cities[cities.length - 1]; // City is last element
        // let city = cities;


        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API_KEY+"&units=metric")
            .catch(function (error) {
                if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                setError(true);
                // console.log(error.response.headers);
                }
             });


        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API_KEY+"&units=metric")
            .then((res) => {
                let data = res.data;
                setError(false);
                // console.log(res);
                setCityData( prevData => [...prevData, data]);
                // console.log(res.data);
        })
    }, [cities])

    const showErrorMessage = () => {
        return(
            <div>
                Not a valid city name
            </div>
        );
    }
    return(
        <div className="firstPage container-fluid" style={{background:"#0a1f44", paddingTop: "50px"}} >
      
        <h1 >Simple Weather App</h1>
        <h4 className="error-message">{error?showErrorMessage():<span></span>}</h4>
        <div className="my-form">
        <input type="text" onChange={(event) => updateCities(false, event)} placeholder="Search for a City"/>
        <button type = "submit" className="btn btn-danger submitButton btn-lg" onClick={() => updateCities(true, "")}>Submit</button>
        </div>
            <div className="weather-container">
            {cityData &&cityData.map( (item) => 
                <div className="weather-item">
                    <Cards
                        key={item.id}
                        City = {item.name}
                        Temp = {item.main.temp}
                        country = {item.sys.country}
                        description = {item.weather[0].description}
                        icon={"https://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"}
                    />
                </div>
            )}
            </div>
            <footer><h5 className="Footer"><i class="fab fa-react"></i>  App By Ashish</h5></footer>
      </div>
    );
}
export default App;
