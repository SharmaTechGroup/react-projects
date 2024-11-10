import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";


export function FormikDemo(){
    return(
        <div className="container-fluid">
             <h3>Register User</h3>
             <Formik initialValues={{UserName:'', Age:0, Mobile:''}}  validationSchema={yup.object({UserName:yup.string().required('Name Required').min(4, 'Name too short'), Age: yup.number().required(), Mobile:yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')})}  onSubmit={(user)=>{ console.log(user)}} >
                 {
                    form => 
                        <Form>
                        <dl>
                            <dt>UserName</dt>
                            <dd><Field name="UserName" type="text" /></dd>
                            <dd>{(form.values.UserName.charCodeAt(0)>=65 && form.values.UserName.charCodeAt(0)<=90)?'':'Good to start name with uppercase letter'}</dd>
                            <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                            <dt>Age</dt>
                            <dd><Field name="Age" type="number" /></dd>
                            <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                            <dt>Mobile</dt>
                            <dd> <Field name="Mobile" type="text" /> </dd>
                            <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                        </dl>
                        <button className="btn btn-primary" disabled={(form.isValid)?false:true} type="submit">Register</button>
                        <button  className={`${(form.dirty)?'d-inline':'d-none'} mx-2 btn btn-success`}>Save</button>
                    </Form>
                 }
             </Formik>
        </div>
    )
}