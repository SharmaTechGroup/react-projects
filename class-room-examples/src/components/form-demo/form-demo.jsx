import { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo(){

    
   
    const formik = useFormik({
        initialValues: {
             UserName: '',
             Age: 0,
             City: '',
             Gender: '',
             Mobile: ''
        },
        validationSchema: yup.object({
            UserName: yup.string().required('Name Required').min(4, 'Name too short'),
            Age: yup.number().required('Age Required').min(15,'Age min 15').max(30,'Age max 30'),
            Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')
        }) ,
        onSubmit: useCallback((user)=>{
            console.log(user);
        },[])
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('UserName')} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" {...formik.getFieldProps('Age')} name="Age"  /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger"> {formik.errors.City} </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" onChange={formik.handleChange} name="Gender" value="Male" /> Male 
                        <input type="radio" onChange={formik.handleChange} name="Gender" value="Female" /> Female 
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" {...formik.getFieldProps('Mobile')} name="Mobile" />
                    </dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}