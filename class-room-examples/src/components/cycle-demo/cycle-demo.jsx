import { useEffect, useState } from "react"

export function Login(){


    useEffect(()=>{

        console.log(`Login Component Mounted`);

        return()=>{
            console.log(`Login Component Unmounted`);
        }

    },[])

    return(
        <h3>User Login</h3>
    )
}

export function Register(){
    useEffect(()=>{

        console.log(`Register Component Mounted`);

        return()=>{
            console.log(`Register Component Unmounted`);
        }

    },[])
    return(
        <h3>Register User</h3>
    )
}



export function CycleDemo(){


    const [component, setComponent] = useState('');

    function handleLoginClick(){
        setComponent(<Login />);
    }
    function handleRegisterClick(){
        setComponent(<Register />);
    }

    return(
        <div>
            <h2>Component Life Cycle</h2>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
            <hr />
            <div>
                {component}
            </div>
        </div>
    )
}