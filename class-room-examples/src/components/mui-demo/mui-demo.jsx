import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export function MuiDemo(){


    const [username, setUserName] = useState('')

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid">
            <div className="w-25">
                <h2>Bootstrap Input</h2>
                <div>
                    <label className="form-label">User Name</label>
                    <div>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="my-3">
                    <button className="btn btn-primary w-100">Register</button>
                </div>
            </div>
            <div className="w-25">
                <h2>Material Input</h2>
                <div>
                    <TextField onChange={handleNameChange} className="w-100" label="User Name" variant="standard" />
                </div>
                <div className="my-3">
                    <DatePicker />
                </div>
                <div className="mt-3"> 
                    <Button className="w-100" variant="contained" color="primary" >Register</Button>
                </div>
            </div>
            <h2>Hello ! {username} </h2>
        </div>
    )
}