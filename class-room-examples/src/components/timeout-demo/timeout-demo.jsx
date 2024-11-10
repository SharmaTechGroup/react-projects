import { useRef, useState } from "react"

export function TimeoutDemo(){

    const [msg, setMsg] = useState('');
  

    function Msg1(){
        setMsg('Hello !');
    }

    function Msg2(){
        setMsg('How are you?');
    }

    function Msg3(){
        setMsg('Welcome to React');
    }

  
    function handleButtonClick(){
         setTimeout(Msg1, 3000);
         setTimeout(Msg2, 6000);
         setTimeout(Msg3, 10000);
    }
    
    function handleCancelClick(){
        clearTimeout();
    }

    return(
        <div className="container-fluid">
            <button onClick={handleButtonClick} className="btn btn-primary mt-2"> Show Messages </button>
            <button onClick={handleCancelClick} className="btn btn-warning mt-2">Cancel Msg2</button>
            <p className="text-center fs-3 fw-bold">{msg}</p>
        </div>
    )
}