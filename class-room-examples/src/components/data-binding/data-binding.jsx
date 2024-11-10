import { useEffect, useState } from "react";
import axios from "axios";

export function DataBinding(){

    
    const [userName, setUserName] = useState('');

        
    useEffect(()=>{
        
        setUserName('John');
        
    },[])

    return(
        <div className="container-fluid">
            <h3>Register</h3>
            <dt>User Name</dt>
            <dd><input type="text" value={userName} /></dd>
            <h5>Hello ! { userName }</h5>
        </div>
    )
}