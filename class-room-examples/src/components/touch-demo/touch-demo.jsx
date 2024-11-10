import { useState } from "react"


export function TouchDemo(){

    const [msg, setMsg] = useState('');
    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''});

    function handleTouch(e, details){
        setMsg(details);
        console.log(e);
    }

    function handleTouchMove(e){
         setStyleObj({position:'fixed', left: e.touches[0].clientX + 'px', top:e.touches[0].clientY + 'px'});
    }

    return(
        <div className="container-fluid">
             <aside onTouchMove={handleTouchMove} style={styleObj} className="w-25 border border-1 p-4">
                <button className="btn btn-close"></button>
                <p>Ads</p>
                <img src="m4.jpg" width="150" height="150" />
             </aside>
             <div className="mt-4">
                <img onTouchStart={(e)=> handleTouch(e,'iPhone 14 Black - 128 GB')} src="m1.jpg" width="200" height="300" className="mx-4 border-1 border border-dark" />
                <img onTouchStart={(e)=> handleTouch(e,'OFFER Price 67,000')} src="m2.jpg" width="200" height="300" className="mx-4 border-1 border border-dark"  />
                <img onTouchStart={(e)=> handleTouch(e,'12px front and 40px Rear Camera')} src="m3.jpg" width="200" height="300" className="mx-4 border-1 border border-dark"  />
             </div>
             <h1>{msg}</h1>
        </div>
    )
}