import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"


export function FakestoreResults(){

    let params = useSearchParams();

    useEffect(()=>{
        console.log(params[0].get('product'));
    },[])

    return(
        <div>
            <h2>Fakestore Results - {params[0].get('category')} - {params[0].get('product')}</h2>
        </div>
    )
}