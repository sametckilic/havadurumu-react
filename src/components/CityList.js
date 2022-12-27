import React from 'react'

function CityList({cities,getCity}) {

    
  return (
    <>
    <ul>
    {cities && cities.map(cities =>(
        
        <button onClick={()=>getCity(cities.SEHIRSTUB,cities.SEHIRADI)} key = {cities.ID} id={cities.ID}>
            {cities.SEHIRADI}
        </button>
    )
    )}
    </ul>
    </>
  )
}


export default CityList