import { useState } from "react"


export function ElementState(){

    
    const [theme, setTheme] = useState('border border-2 p-3 bg-light');
    const [buttonTheme, setbuttonTheme] = useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked) {
            setTheme('border border-2 p-3 bg-dark text-white');
            setbuttonTheme('btn btn-light w-100');
        } else {
            setTheme('border border-2 p-3 bg-light');
            setbuttonTheme('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
            <form className={theme}>
                <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className="form-check-input" /> <label className="form-check-label fw-bold"> Dark Theme </label>
                </div>
                <h3>User Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className={buttonTheme}>Login</button>
            </form>    
        </div>
    )
}