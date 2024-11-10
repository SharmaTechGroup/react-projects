import { useEffect, useState } from "react";
import moment from "moment";


export function DateDemo(){

    const [today, setToday] = useState(Date());

    useEffect(()=>{
        setToday()
    },[]);

    return(
        <div className="container-fluid">
            <p>{moment(today).format('Do dddd MMMM YYYY')}</p>
        </div>
    )
}