import React, { useState, useEffect } from 'react';
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setsearch] = useState("");

    useEffect(() => {
        const fetchApi = async () =>
        {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7c527340dab8377894d72efc72686cef`;
        const response = await fetch(url);
        const resjson  = await response.json();
        setCity(resjson.main)
        }
        fetchApi();
        }, [search])
        return (
<>
    <div className="box">
                <div className="inputData">
                        <input type="search" className="inputFeild" placeholder="Enter City"
                            onChange=
                            {
                                (event) =>
                                    {
                                    setsearch(event.target.value)
                                    }
                            } />
                </div>
        { !city ?(
                        <p className="errormsg">No Data Found</p>
                    ) :
        (
            <div>
                <div className="info">
                        <h2  className="location">
                        <i class="fas fa-cloud">
                        </i>{search}
                        </h2>
                        <h1 className="temp">{city.temp}°</h1>
                        <h3 className="tempmin_max"> Min :   {city.temp_min} °Cel | Max  : {city.temp_max}  °Cel</h3>
                </div>
                    <div className="wave-one"></div>
                    <div className="wave-two"></div>
                    <div className="wave-three"></div>
            </div>
        )
        } 
    </div>
</>
    )
}
export default Tempapp;