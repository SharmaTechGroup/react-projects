import React from "react";


export class UserLogin extends React.Component
{
     constructor(){
         super();
         this.state = {
             msg : ""
         }
         this.handleInsertClick = this.handleInsertClick.bind(this);
         
     }

     handleInsertClick(){
          this.setState({msg: "Record Inserted"});
     }

     handDeleteClick(){
         this.setState({msg: "Record Deleted.."});
     }

     handleUpdateClick(){
        this.setState({msg: "Record Updated"});
     }

     render(){
        return(
            <div className="container-fluid">
                <button onClick={this.handleInsertClick} className="btn btn-primary mt-3">Insert</button>
                <button onClick={this.handDeleteClick.bind(this)} className="btn mx-2 btn-danger mt-3" >Delete</button>
                <button onClick={()=> this.handleUpdateClick()} className="btn btn-warning mt-3">Update</button>
                <p>{this.state.msg}</p>
            </div>
        )
     }
}