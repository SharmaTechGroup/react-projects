import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function FakestoreSlideshow(){

    const [product, setProduct] = useState({id:0, title:'', image:'', category:'', price:0, description:'', rating:{rate:0, count:0}});
    const [status, setStatus] = useState('');
    
    let productId = useRef(1);
    let thread = useRef(null);

    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        productId.current = productId.current + 1;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    useEffect(()=>{

        LoadProduct(1);

    },[])

    function handleNextClick(){
        productId.current = productId.current + 1;
        LoadProduct(productId.current);
    }

    function handlePrevClick(){
        productId.current = productId.current - 1;
        LoadProduct(productId.current);
    }

    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 3000);
        setStatus('Slide Show - Started');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }
    function handleSeekbarChange(e){
        productId.current = e.target.value;
        LoadProduct(productId.current);
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="mt-4 card w-50">
                <div className="card-header text-center" style={{height:'80px'}}>
                    {product.title}
                    <div className="fw-bold">{status}</div>
                </div>
                <div className="card-body text-center" style={{height:'400px'}}>
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="btn bi bi-chevron-left"></button>
                        </div>
                        <div className="col-10">
                            <div className="badge bg-danger rounded rounded-circle position-absolute end-0"> {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})} </div>
                            <img src={product.image} width="100%" height="300"/>
                            <input onChange={handleSeekbarChange} type="range" className="form-range" min={1} max={20} value={productId.current} />
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="btn bi bi-chevron-right"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-primary bi bi-play"></button>
                    <button onClick={handlePauseClick} className="btn btn-warning bi bi-pause ms-2"></button>
                </div>
            </div>
        </div>
    )
}