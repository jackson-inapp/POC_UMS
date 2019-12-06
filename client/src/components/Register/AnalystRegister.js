import React from 'react'
import {withFormik} from 'formik'
import RenderForm from '../Form/RenderForm'
import * as Yup from 'yup'

function AnalystRegister(props) {

    const analystForm = [
    {
         type:"text",
         name:"Analyst_Username",
         placeholder:"Enter username",
         label:"Username",
         istouched : props.touched.Analyst_Username,
         errorMessage : props.errors.Analyst_Username
    },
    
    {
        type:"text",
        name:"Analyst_Firstname",
        placeholder:"Enter the Analyst Firstname",
        label:"Firstname",
        istouched : props.touched.Analyst_Firstname,
        errorMessage : props.errors.Analyst_Firstname
    },

    {
        type:"text",
        name:"Analyst_Middlename",
        placeholder:"Enter the middlename",
        label:"Middlename",
        istouched : props.touched.Analyst_Middlename,
        errorMessage : props.errors.Analyst_Middlename
    },

    {
        type:"text",
        name:"Analyst_Lastname",
        placeholder:"Enter the lastname",
        label:"Lastname",
        istouched : props.touched.Analyst_Lastname,
        errorMessage : props.errors.Analyst_Lastname
    },

    {
        type:"text",
        name:"Analyst_Dept",
        placeholder:"Enter the department",
        label:"Department",
        istouched : props.touched.Analyst_Dept,
        errorMessage : props.errors.Analyst_Dept
    },


    {
        type:"password",
        name:"Analyst_Password",
        placeholder:"Enter a password for Analyst",
        label:"Password",
        istouched : props.touched.Analyst_Password,
        errorMessage : props.errors.Analyst_Password
    },

    {
        type:"password",
        name:"Analyst_CPassword",
        placeholder:"Password",
        label:"Confirm Password",
        istouched : props.touched.Analyst_CPassword,
        errorMessage : props.errors.Analyst_CPassword
    },


    {
        type:"email",
        name:"Analyst_Email",
        placeholder:"Enter email",
        label:"Email",
        istouched : props.touched.Analyst_Email,
        errorMessage : props.errors.Analyst_Email
    },

    {
        type:"text",
        name:"Analyst_Phone",
        placeholder:"Enter phone number",
        label:"Phone",
        istouched : props.touched.Analyst_Phone,
        errorMessage : props.errors.Analyst_Phone
    }


]

    return (
        <div>
            <h3>Register Analyst</h3>
        <RenderForm 
            formData = {analystForm}
            buttonType = "submit"
            onSubmit = {props.handleSubmit}
            isSubmitting = {props.isSubmitting}
            buttonText = "Add Analyst"
            />
        </div>
    )
        }

const FormikAnalystRegister = withFormik({

    mapPropsToValues() {

  return {
            
        Analyst_Username:'',
        Analyst_Firstname:'',
        Analyst_Middlename:'',
        Analyst_Lastname:'',
        Analyst_Dept:'',
        Analyst_Password:'',
        Analyst_CPassword:'',
        Analyst_Email:'',
        Analyst_Phone:''
        }
    },

    validationSchema : Yup.object().shape({
        Analyst_Username:       Yup.string().required('*This field is required'),
        Analyst_Firstname:      Yup.string().required('*This field is required'),
        Analyst_Middlename:     Yup.string(),
        Analyst_Lastname:       Yup.string().required('*This field is required'),
        Analyst_Dept:           Yup.string().required('*This field is required'),
        Analyst_Password:       Yup.string().required('*This field is required'),
        Analyst_CPassword:      Yup.string().required('*This field is required').test('Password Check','Password does not match',function(value){return this.parent.Analyst_Password===value}),
        Analyst_Email:          Yup.string().email('Enter a vaild email').required('*This field is required'),
        Analyst_Phone:          Yup.string().required('*This field is required').test('Phone Number test','Please enter a valid phone number',function(value){return /^\d+$/.test(value)})
    }),

    handleSubmit (values) {

        console.log(values)

        //API call
    }

})(AnalystRegister)

export default FormikAnalystRegister;
