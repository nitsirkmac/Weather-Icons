import React from 'react'
import Time from "./Time"
import Image from "./Image"
import Conditions from "./Conditions"

const WeatherForecast = ({ img, conditions, time }) => {
    return (
        <div className="weather">
        <Image img={ img } />
        <Conditions conditions={ conditions }/>
        < Time time={ time }/>
        </div>
    )
}

export default WeatherForecast