import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function FakestoreLogin()
{

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userName, setUserName] = useState('');

    let navigate = useNavigate();

    function handleUserChange(e){
        setUserName(e.target.value);
    }

    function handleLoginClick(){
        setCookie('username', userName);
        navigate('/categories');
    }

    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onChange={handleUserChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button onClick={handleLoginClick}>Login</button>
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}