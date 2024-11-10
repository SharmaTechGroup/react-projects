import { useState } from "react"
import { useCookies } from "react-cookie";
import { useCaptcha } from "../../hooks/use-captcha";
import { useFetchAPI } from "../../hooks/use-fetchapi";

export function CookieDemo(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userName, setUserName] = useState('');
    const code = useCaptcha();

    let categories = useFetchAPI('https://fakestoreapi.com/products/categories');

    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleLoginClick(){
        setCookie('username', userName);
        alert('Signed in..');
        setTimeout(function(){
            removeCookie("username")
            alert('Your session timed out');
        },30000);
    }

    function handleSignout(){
        removeCookie('username');
        alert('Signedout');
    }

    return(
        <div className="container-fluid">
            {
                (cookies['username'])?<span className="fs-3">Hello ! {cookies['username']} <button onClick={handleSignout}>Signout</button> </span>:  
                <div>
                <h2>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                    <dt>Verify Code</dt>
                    <dd>{code}</dd>
                    <dt>Select Category</dt>
                    <dd>
                        <select>
                          {
                            categories.map(category=><option key={category}>{category}</option>)
                          }
                        </select>
                    </dd>
                </dl>
                 <button onClick={handleLoginClick}>Login</button>    
                </div>  
            }
           
        </div>
    )
}