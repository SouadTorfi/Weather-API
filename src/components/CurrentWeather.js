import React from 'react'
import partlycloudy from './../img/weather-icons/mostlycloudy.svg'
import clear from './../img/weather-icons/clear.svg'

function CurrentWeather() {
    return (
        <div>
             <div className="temp">
           <div className="img1">
             <p>03:00</p>
             <img className="img1-1" alt=""src={partlycloudy}/>
             <p>8°C</p>
             </div>


             <div className="img2">
             <p>06:00</p>
             <img className="img2-2" alt=""src={partlycloudy}/>
             <p>9°C</p>
             </div>

             <div className="img3">
             <p>09:00</p>
             <img className="img3-3" alt=""src={clear}/>
             <p>14°C</p>
             </div>

             <div className="img4">
             <p>12:00</p>
             <img className="img4-4" alt=""src={clear}/>
             <p>17°C</p>
             </div>

             <div className="img5">
             <p>15:00</p>
             <img className="img5-5" alt=""src={clear}/>
             <p>18°C</p>
             </div>

             <div className="img6">
             <p>18:00</p>
             <img className="img6-6" alt=""src={clear}/>
             <p>16°C</p>
             </div>

             <div className="img7">
             <p>21:00</p>
             <img className="img7-7" alt=""src={partlycloudy}/>
             <p>13°C</p>
             </div>
         </div>
        </div>
    )
}

export default CurrentWeather
