import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import "../css/style.css"


function City(props) {

    return (
        
        <div className="degreeSite">
            <div className="degree-image">
                <img src="images/bulut.png" alt="">
                </img>
            </div>
            <div className="city-name">
                <span>
                    {props.city.city.SEHIRADI}
                </span>
            </div>
            <div className="city-degree">
                {props.city.value}
            </div>
        </div>

    )
}

export default City