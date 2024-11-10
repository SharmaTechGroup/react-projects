import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

export class ClassFromDemo extends React.Component
{
     constructor(){
        super();
     }
     render(){
        return(
            <div className="container-fluid">
                <h3>Register User</h3>
                <Formik initialValues={{UserName:'', Age:0, Mobile:''}} onSubmit={(values)=>{console.log(values)}} validationSchema={yup.object({UserName:yup.string().required('User Name Required')})} >
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                            <dt>Age</dt>
                            <dd><Field type="number" name="Age" /></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                        </dl>
                        <button type="submit">Register</button>
                    </Form>
                </Formik>
            </div>
        )
     }
}