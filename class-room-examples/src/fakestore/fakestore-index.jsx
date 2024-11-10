import { Link } from "react-router-dom";

export function FakestoreIndex()
{
    return(
        <div>
            <h2>Fakestore Home</h2>
            <p>Online Shopping <Link to="/categories"> Browse Categories </Link> </p>
        </div>
    )
}