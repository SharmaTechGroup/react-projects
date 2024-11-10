import { useRef, useState } from "react"


export function IntervalDemo(){

    const [progressDisplay, setProgressDisplay] = useState('d-none');
    const [imageDisplay, setImageDisplay] = useState('d-none');
    const [btnDisplay, setBtnDisplay] = useState('d-block');
    const [progressValue, setProgressValue] = useState(1);
    const [status, setStatus] = useState('Completed');

    let count = useRef(1);
    let thread = useRef(null);

    function Loading(){
        count.current = count.current + 1;
        if(count.current===100) {
            clearInterval(thread.current);
            setProgressDisplay('d-none');
            setImageDisplay('d-block');
        }
        setProgressValue(count.current);
    }

    function handleLoadClick(){
        setProgressDisplay('d-block');
        setBtnDisplay('d-none');
        thread.current = setInterval(Loading,100);
    }

    function handlePlayClick(){
        thread.current = setInterval(Loading,100);
        setStatus('Completed');
    }

    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Paused');
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
             <div className="text-center">
                 <div className={btnDisplay}>
                  <button className="btn btn-primary" onClick={handleLoadClick}>
                 Load Image
                  </button>       
                 </div>

                 <div className={progressDisplay} >
                    <progress min="1" max="100" value={progressValue} style={{width:'300px', height:'30px'}}></progress>
                    <div>
                    <button onClick={handlePlayClick} className="btn btn-primary bi bi-play me-2"></button>
                    <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause"></button>
                    </div>
                    <p>{progressValue} % {status}</p>
                 </div>

                 <div className={imageDisplay}>
                    <img src="m1.jpg" width="300" height="400" />
                 </div>
             </div>        
        </div>
    )
}