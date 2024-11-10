import './login.css';

export function Login()
{
    return(
        <div className='login-container'>
            <form className='login-form alert alert-warning alert-dismissible'>
                <button className='btn btn-close' type='button' data-bs-dismiss='alert'></button>
                <h3 className='bi bi-person-fill'> Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control' /></dd>
                </dl>
                <button className='btn btn-warning w-100'>Login</button>
            </form>
        </div>
    )
}