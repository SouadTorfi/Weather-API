import React, { Component } from "react";
//import Search from "./components/Search";
//import SayHi, { SayHello } from "./components/WeatherItem";
//import fakeWeatherData from "./fakeWeatherData.json";
//import partlycloudy from './img/weather-icons/mostlycloudy.svg'
//import clear from './img/weather-icons/clear.svg'
import Search1 from "./components/Search1";
import Body from "./components/Body";
import CurrentWeather from "./components/CurrentWeather";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Souad"
    };  
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
         <Search1/>
         <Body/>
         <CurrentWeather/>
      </div>
    );
  }}  

export default App;
