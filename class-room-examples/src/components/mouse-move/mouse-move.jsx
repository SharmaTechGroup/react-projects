import { useState } from "react"


export function MouseMove()
{

    const [styleObj, setStyleObj] = useState({position:'',left:'',top:''});

    function handleMouseMove(e){
        setStyleObj({position:'fixed', left:e.clientX + 'px', top:e.clientY + 'px'});
    }

    return(
        <div onMouseMove={handleMouseMove} className="container-fluid">
            <div style={{height:'1000px'}} className="fs-3"> move the mouse pointer to test </div>
            <img src="flag.gif" style={styleObj} width="50" height="50" />
        </div>
    )
}