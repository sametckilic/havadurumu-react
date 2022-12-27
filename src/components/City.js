import React from 'react'



function City({loading, city}) {

    return (
       
        <div className="degreeSite">
            {loading ? (
                <>
                <div className="city-name">
                            <span>
                                {city.city.SEHIRADI}
                            </span>
                </div>
                <span class="loader"></span>
                </>
            ) :
                (
                    <>
                        <div className="degree-image">
                            <img src="images/bulut.png" alt="">
                            </img>
                        </div>
                        <div className="city-name">
                            <span>
                                {city.city.SEHIRADI}
                            </span>
                        </div>
                        <div className="city-degree">
                            {"Bir şehir arayın veya haritadan seçin."=== city.value ? city.value : city.value + " °C"}
                        </div>
                    </>
                )}
        </div>
       

    )
}

export default City