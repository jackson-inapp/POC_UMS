import React from 'react'
import {withFormik, Form} from 'formik'
import {Container,Button} from 'reactstrap'
import * as Yup from 'yup'
import RenderFormField from '../FormFieldRender/RenderFormField'

function OrgAdminRegister(props) {
    console.log(props)
    return (
        <Container>
            <h3>Org Admin Register</h3>
             <Form>
             <RenderFormField
                     type="text"
                     name="Admin_Username"
                     placeholder="Enter the Admin Username"
                     label="Username"
                     istouched = {props.touched.Admin_Username}
                     errorMessage = {props.errors.Admin_Username}
                />
                <RenderFormField
                     type="password"
                     name="Admin_Password"
                     placeholder="Enter admin password"
                     label="Password"
                     istouched = {props.touched.Admin_Password}
                     errorMessage = {props.errors.Admin_Password}
                />
                 <RenderFormField
                     type="password"
                     name="Admin_CPassword"
                     placeholder="Enter admin password"
                     label="Confirm Password"
                     istouched = {props.touched.Admin_CPassword}
                     errorMessage = {props.errors.Admin_CPassword}
                />
                <RenderFormField
                     type="text"
                     name="Admin_Firstname"
                     placeholder="Enter the firstname"
                     label="Firstname"
                     istouched = {props.touched.Admin_Firstname}
                     errorMessage = {props.errors.Admin_Firstname}
                />
                <RenderFormField
                     type="text"
                     name="Admin_Middlename"
                     placeholder="Enter the Middlename"
                     label="Middlename"
                     istouched = {props.touched.Admin_Middlename}
                     errorMessage = {props.errors.Admin_Middlename}
                />

                <RenderFormField
                     type="text"
                     name="Admin_LastName"
                     placeholder="Enter the lastname"
                     label="Lastname"
                     istouched = {props.touched.Admin_LastName}
                     errorMessage = {props.errors.Admin_LastName}
                />

                <RenderFormField
                     type="email"
                     name="Admin_Email"
                     placeholder="Enter the email"
                     label="Email"
                     istouched = {props.touched.Admin_Email}
                     errorMessage = {props.errors.Admin_Email}
                />

                <RenderFormField
                     type="text"
                     name="Admin_Phone"
                     placeholder="Enter the phone number"
                     label="Phone"
                     istouched = {props.touched.Admin_Phone}
                     errorMessage = {props.errors.Admin_Phone}
                />


                <Button
                type="submit" 
                onSubmit={props.handleSubmit} 
                disabled={props.isSubmitting}
                > 
                    Add Admin
                </Button>
             </Form>
        </Container>
    )
}

const FormikOrgAdminRegister = withFormik({

    mapPropsToValues () {

        return {
             Admin_Username     :'',
             Admin_Password     :'',
             Admin_CPassword    :'',
             Admin_Firstname    :'',
             Admin_Middlename   :'',
             Admin_LastName     :'',
             Admin_Email        :'',
             Admin_Phone        :''
         }
      
    },

    validationSchema : Yup.object().shape({

        Admin_Username     :Yup.string().required('*This field is required'),
        Admin_Password     :Yup.string().required('*This field is required'),
        Admin_CPassword    :Yup.string().required('*This field is required').test('Password Check','Password does not match',function(value){return this.parent.Admin_Password===value}), 
        Admin_Firstname    :Yup.string().required('*This field is required'),
        Admin_Middlename   :Yup.string(),
        Admin_LastName     :Yup.string().required('*This field is required'),
        Admin_Email        :Yup.string().email('Please enter a valid Email').required('*This field is required'),
        Admin_Phone        :Yup.string().required('*This field is required').test('Phone Number test','Please enter a valid phone number',function(value){return /^\d+$/.test(value)})
    }),


    handleSubmit(values,{setErrors,setSubmitting,resetForm}){

        // console.log(values);

        setSubmitting(true);
        setTimeout(()=> { resetForm()},1000)
        //API call to submit values. Avoid field Admin_CPassword

     }

})(OrgAdminRegister)

export default FormikOrgAdminRegister
