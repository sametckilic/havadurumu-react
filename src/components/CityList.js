import React from 'react'

function CityList(props) {

    
  return (
    <>
    <ul>
    {props.cities && props.cities.map(cities =>(
        
        <button onClick={()=>props.getCity(cities.SEHIRSTUB)} key = {cities.ID} id={cities.ID}>
            {cities.SEHIRADI}
        </button>
    )
    )}
    </ul>
    </>
  )
}


export default CityList