import { useState } from "react";
import { Login } from "../login/login";
import { Register } from "../register/register";


export function ConditionalRender()
{
    const [component, setComponent] = useState();

    function handleButtonClick(e){
         if(e.target.value==="Register"){
            setComponent(<Register />);
         } else {
            setComponent(<Login/>);
         }
    }

    return(
        <div className="container-fluid">
            <h2>Conditional Render</h2>
            <button onClick={handleButtonClick} value="Register" className="btn btn-primary">Register</button>
            <button onClick={handleButtonClick} value="Login" className="btn btn-warning ms-2">Login</button>
            <hr />
            {
                component
            }
        </div>
    )
}