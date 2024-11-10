import { useReducer } from "react"

let initialState = {
    LiveCount: 0,
}

function reducer(state, action)
{
    switch(action.type)
    {
        case "JoinLive":
          return {LiveCount: state.LiveCount + 1}
        case "ExitLive": 
          return {LiveCount: state.LiveCount - 1}
    }
}

export function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleJoinClick(){
        dispatch({type: 'JoinLive'});
    }
    function handleExitClick(){
        dispatch({type: 'ExitLive'});
    }

    return(
        <div className="container-fluid">
            <div className="text-center row">
                <div className="col">
                <h4>User-1</h4>
                <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary"> Join Live </button>
                <button onClick={handleExitClick}  className="bi ms-2 bi-door-open btn btn-warning"> Exit </button>
                </div>
                <div className="col">
                <h4>User-2</h4>
                <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary"> Join Live </button>
                <button onClick={handleExitClick}  className="bi ms-2 bi-door-open btn btn-warning"> Exit </button>
                </div>
                
            </div>
            <h2>Watch Video Live</h2>
            <iframe width="400" src="https://www.youtube.com/embed/ALc1RZ2m2sM" height="300"></iframe>
            <div>
                <span className="bi bi-eye-fill"> {state.LiveCount} Viewing </span>
            </div>
        </div>
    )
}