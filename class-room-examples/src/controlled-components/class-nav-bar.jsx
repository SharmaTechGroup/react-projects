import React from "react";


export class ClassNavBar extends React.Component
{
      constructor(){
         super();
      }
      render(){
        return(
            <div className="container-fluid">
                <nav className="d-flex p-2 border border-2 justify-content-between">
                    <span className="fs-4 fw-bold">{this.props.title}</span>
                    <div>
                        {
                            this.props.menuItems.map(item=> <span className="mx-3" key={item}>{item}</span>)
                        }
                    </div>
                </nav>
            </div>
        )
      }
}