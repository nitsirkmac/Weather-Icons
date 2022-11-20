import React from "react";
import "./styles.css";
import weatherData from "./weatherData.js"
import WeatherForecast from "./components/WeatherForecast"


const icons = weatherData.map((ele, index) => {
  return <WeatherForecast {...ele} key={index} />
})

export default function App() {
  return (
    <div className="App">
      {icons}
    </div>
  );
}
