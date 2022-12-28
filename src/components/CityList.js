import React from 'react'

function CityList({cities,getCity}) {

    
  return (
    <div className = "cityList">
    <ul>
    {cities && cities.map(cities =>(
        <li key={cities.ID} id={cities.ID}>
        <button className = "cityButton" onClick={()=>getCity(cities.SEHIRSTUB,cities.SEHIRADI)} key = {cities.ID} id={cities.ID}>
          <span>{cities.ID}</span>{cities.SEHIRADI}
        </button>
        </li>
    )
    )}
    </ul>
    </div>
  )
}


export default CityList