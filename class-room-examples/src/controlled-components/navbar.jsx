

export function Navbar(props)
{
    return(
        <nav className={`d-flex border border-1 my-2 rounded justify-content-between p-2 ${props.theme}`}>
           <div className="fs-4 fw-bold">{props.title}</div>
           <div>
              {
                props.navItems.map(item=><span key={item} className="mx-3"> {item} </span>)
              }
           </div>
           <div>
              <div className="input-group">
                <input type="text" className="form-control" />
                <button className="bi bi-search btn btn-warning"></button>
              </div>
           </div>
        </nav>
    )
}