import { useState } from "react"


export function KeyDemo(){

    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [styleObj, setStyleObject] = useState({width:''});

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleKeyUp(){
         if(password.match(/(?=.*[A-Z])\w{4,15}/)) {
              setMsg('Strong Password');
              setStyleObject({width:'100%'})
         } else {
             if(password.length<4){
                setMsg('Poor Password');
                setStyleObject({width:'30%'});
             } else {
                setMsg('Weak Password');
                setStyleObject({width:'70%'});
             }
         }
    }

    return(
        <div className="container-fluid">
            <dl className="w-25">
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={handleKeyUp} onChange={handlePasswordChange} /></dd>
                <dd>
                   <div className="progress">
                       <div style={styleObj} className="progress-bar progress-bar-animated progress-bar-striped">

                       </div>
                   </div>
                </dd>
                <dd>{msg}</dd>
            </dl>
        </div>
    )
}