import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function FakestoreCategories(){

    const [categories, setCategories] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    let navigate = useNavigate();

    function SessionEnd(){
        alert('Your session timedout - Please re-login');
        removeCookie('username');
        navigate('/login');
    }



    useEffect(()=>{
        
        if(cookies['username']){
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response=>{
                setCategories(response.data);
            })
            setTimeout(SessionEnd, 10000);
        } else {
            navigate("/login");
        }

    },[]);

    function handleSignout(){
        removeCookie('username');
        navigate('/login');
    }

    return(
        <div>
            <div className="d-flex justify-content-between">
                <span className="h3"> Hello ! {cookies['username']}</span>
                <span>
                    <button onClick={handleSignout}>Signout</button>
                </span>
            </div>
            {
                categories.map(category=> 
                    <div key={category}>
                        <Link to={`/products/${category}`} className="btn btn-dark w-25 my-2">{category.toUpperCase()}</Link>
                    </div>
                )
            }
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}