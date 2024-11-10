
export function Register(){
    return(
        <div>
            <dl>
                <h2 data-testid="title">Customer Register</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text"/></dd>
                    <dt>Email</dt>
                    <dd><input type="email" /></dd>
                </dl>
                <button>Register</button>
            </dl>
            <a href="/login">Existing User</a>
        </div>
    )
}