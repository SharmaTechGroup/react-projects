import { useState } from "react"


export function ButtonDemo(){

   
    const [msg, setMsg] = useState('');

    function handleCopy(){
        setMsg('Number Copied');
    }

    function handlePaste(){
        document.onpaste = function(){
            return false;
        }
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleCopy}  /></dd>
                <dd>{msg}</dd>
                <dt>Verify Account Number</dt>
                <dd><input type="text" onPaste={handlePaste} /></dd>
            </dl>
        </div>
    )
}