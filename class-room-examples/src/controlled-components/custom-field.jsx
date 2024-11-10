

export function CustomField(props){
    return(
        <div>
           <label>{props.label}</label> : <input type={props.type} />
        </div>
    )
}