import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-demo.css';

export function MouseDemo(){

    const [images, setImages] = useState([{img_src:''}]);
    const [preview, setPreview] = useState('m1.jpg');

    useEffect(()=>{
        axios.get('mobile.json')
        .then(response=>{
            setImages(response.data);
        })
    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-1">
                    {
                        images.map(image=> <div className="my-4 thumbnail " key={image}> <img onMouseOver={handleMouseOver} width="100%" src={image.img_src} /> </div> )
                    }
                </div>
                <div className="col-11">
                    <img width="300" height="400" src={preview} />
                </div>
            </div>
        </div>
    )
}