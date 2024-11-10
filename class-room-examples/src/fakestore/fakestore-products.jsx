import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";


export function FakestoreProducts(){


    const [products, setProducts] = useState([{id:0, title:'', price:0, category:'', description:'', image:'', rating:{rate:0, count:0}}]);
    let params = useParams();

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    
    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['username']){
            axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(response=>{
                setProducts(response.data);
            })
        } else {
            navigate('/login');
        }
    },[])
    
    function handleSignout(){
        removeCookie('username');
        navigate('/login');
    }

    return(
        <div>
            <div className="d-flex justify-content-between">
                <span className="h3"> Hello ! {cookies['username']}</span>
                <button onClick={handleSignout}>Signout</button>
            </div>
            <h2> {params.category.toUpperCase()} PRODUCTS </h2>
            <main className="row">
               <div className="col">
                   <div className="d-flex">
                   {
                    products.map(product=>
                        <div className="mx-3" key={product.id}>
                            <img src={product.image} width="100" height="100" />
                            <div className="my-2">
                                <Link to={`details/${product.id}`} className="btn btn-primary w-100">Details</Link>
                            </div>
                        </div>
                     )
                    }   
                   </div>
               </div>
               <div className="col">
                    <Outlet />
               </div>
            </main>
            <Link to="/categories">Back to Categories</Link>
        </div>
    )
}