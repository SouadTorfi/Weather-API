import React from 'react'
import partlycloudy from './../img/weather-icons/mostlycloudy.svg'

function Body() {
    return (
        <div>
             <div className="website">
         <img className="maining" alt=""src={partlycloudy}/>
         <h4>overcast clouds</h4>
        <p className="p1"> <strong>Temperature </strong>10° to 11°C</p>
        <p className="p2"><strong>Humidity </strong>78% <strong>Pressure</strong> 1008.48  </p>
         </div>
        </div>
    )
}

export default Body
