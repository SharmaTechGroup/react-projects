

export function DataGrid(props){
   if(props.layout==="grid") {
    return(
        <table className={`table table-hover caption-top ${props.theme}`}>
            <caption>{props.title}</caption>
            <thead>
                <tr>
                    {
                        props.fields.map(field => 
                         <th key={field}> 
                              {field} 
                              <span className="dropdown">
                                 <button data-bs-toggle="dropdown"  className="bi btn  bi-three-dots-vertical"></button> 
                                 <ul className="dropdown-menu">
                                    <li className="dropdown-item bi bi-sort-alpha-down"> Sort Ascending </li>
                                    <li className="dropdown-item bi bi-sort-alpha-up"> Sort Descending </li>
                                 </ul>
                              </span>
                         </th>)
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item=> 
                        <tr key={item}>
                            {
                                Object.keys(item).map(key=><td key={key}> {item[key]} </td>)
                            }
                            <td> 
                                <button className="btn btn-warning bi bi-pen-fill"></button> 
                                <button className="btn btn-danger bi bi-trash-fill ms-1"></button>
                            </td>
                        </tr>
                     )
                }
            </tbody>
        </table>
    )
    
   } else {
     return(
        <div className="d-flex flex-wrap">
            {
                props.data.map(item=>
                <div className="card m-2 p-2" style={{width:'300px'}}>
                    <div className="card-header">
                        <h3></h3>
                    </div>
                    <div className="card-body">
                        {
                            Object.keys(item).map(key=><div>{item[key]}</div>)
                        }
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">View More.</button>
                    </div>
                </div>
                )
            }
        </div>
     )
   }
}