import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export function FakestoreDetails(){


    const [product, setProduct] = useState({id:0, title:'', price:0, description:'', image:'', category:'', rating:{rate:0, count:0}});

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
             setProduct(response.data);
        })
    },[params.id])

    return(
        <div>
            <h2>Details</h2>
            <dl>
                <img src={product.image} height="200" width="300"/>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
            </dl>
        </div>
    )
}