import { createContext, useContext, useState } from "react";

let userContext = createContext(null);

export function Level1Component(){
     const username = useContext(userContext);
     return(
        <div className="bg-danger text-white p-4">
            <h3>Level-1 Component - {username} </h3>
            <Level2Component />
        </div>
     )
}

export function Level2Component(){
    const username = useContext(userContext);
    return(
       <div className="bg-warning text-dark p-4">
           <h3>Level-2 Component - {username}</h3>
       </div>
    )
}


export function ContextDemo(){
    const [userName, setUserName] = useState()

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid bg-dark text-white p-4">
            <div className="my-2">
                <input type="text" onChange={handleNameChange}  placeholder="Enter User Name" />
            </div>
            <h2>Context Demo - Parent Component - {userName} </h2>
            <userContext.Provider value={userName} >
                <Level1Component />
            </userContext.Provider>

        </div>
    )
}