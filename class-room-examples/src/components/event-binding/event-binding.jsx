import { useState } from "react";
import { useEffect } from "react";


export function EventBinding(){

   const [userName, setUserName] = useState('');
   const [city, setCity] = useState('Select City');

    useEffect(()=>{
        setUserName('david');
    },[]);

    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleCityChange(e){
        setCity(e.target.value);
    }

    return(
        <div className="container-fluid">
            <h2>Event Demo</h2>
            <input type="text" onChange={handleNameChange} value={userName} />
            <p>Hello ! {userName} </p>
            <select onChange={handleCityChange}>
                <option>Select City</option>
                <option>Delhi</option>
                <option>Hyd</option>
            </select>
            <p>Selected City : {city}</p>
        </div>
    )
}