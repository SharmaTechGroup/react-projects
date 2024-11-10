import { useState } from 'react';
import './mouse-animation.css';

export function MouseAnimation(){


    const [styleObj, setStyleObj] = useState({color:'black'})

    function handleMouseOver(colorName){
        setStyleObj({color:colorName});
    }

    function handleMouseOut(){
        setStyleObj({color:'black'});
    }

    return(
        <div className="container-fluid">
            <div>
               <div className='d-flex' style={{height:'100px'}}>
                  <div onMouseOut={handleMouseOut} onMouseOver={()=> handleMouseOver('red')} style={{backgroundColor:'red', width:'100px'}}>Red</div>
                  <div onMouseOut={handleMouseOut} onMouseOver={()=> handleMouseOver('green')} style={{backgroundColor:'green', width:'100px'}}>Green</div>
                  <div onMouseOut={handleMouseOut} onMouseOver={()=> handleMouseOver('blue')} style={{backgroundColor:'blue', width:'100px'}}>Blue</div>
               </div>
               <h1 style={styleObj} >Sample Text</h1>
            </div>
        </div>
    )
}