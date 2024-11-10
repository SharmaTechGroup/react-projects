import { useForm } from "react-hook-form";
import { Navbar } from "../../controlled-components/navbar"; 

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values) => {
        console.log(values);
    }

    return(
        <div className="container-fluid">

            <Navbar title="Shopper." theme="bg-dark text-white"  navItems={["Home", "Shop", "Pages", "Blog", "Docs"]} />
            <Navbar title="Amazon" theme="bg-danger text-white" navItems={["Electronics", "Footwear", "Fashion"]} />
            
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName", { required:true, minLength:4 })} name="UserName" /></dd>
                    <dd> {(errors.UserName?.type==="required")?<span className="text-danger">User Name Required</span>:<span></span> && (errors.UserName?.type==="minLength")?<span className="text-danger">Name too short</span>:<span></span> } </dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})} name="Mobile" /></dd>
                    <dd className="text-danger">
                       {
                         (errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span> && (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                       }
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}