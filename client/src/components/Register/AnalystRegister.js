import React from 'react'
import { withFormik } from 'formik'
import RenderForm from '../Form/RenderForm'
import * as Yup from 'yup'
import service from '../../services/api'

function AnalystRegister(props) {
    console.log(props);

    const analystForm = [
        {
            type: "text",
            name: "analyst_Username",
            placeholder: "Enter username",
            label: "Username",
            istouched: props.touched.analyst_Username,
            errorMessage: props.errors.analyst_Username
        },

        {
            type: "text",
            name: "analyst_Firstname",
            placeholder: "Enter the Analyst Firstname",
            label: "Firstname",
            istouched: props.touched.analyst_Firstname,
            errorMessage: props.errors.analyst_Firstname
        },

        {
            type: "text",
            name: "analyst_Middlename",
            placeholder: "Enter the middlename",
            label: "Middlename",
            istouched: props.touched.analyst_Middlename,
            errorMessage: props.errors.analyst_Middlename
        },

        {
            type: "text",
            name: "analyst_Lastname",
            placeholder: "Enter the lastname",
            label: "Lastname",
            istouched: props.touched.analyst_Lastname,
            errorMessage: props.errors.analyst_Lastname
        },

        {
            type: "text",
            name: "analyst_Dept",
            placeholder: "Enter the department",
            label: "Department",
            istouched: props.touched.analyst_Dept,
            errorMessage: props.errors.analyst_Dept
        },


        {
            type: "password",
            name: "analyst_Password",
            placeholder: "Enter a password for Analyst",
            label: "Password",
            istouched: props.touched.analyst_Password,
            errorMessage: props.errors.analyst_Password
        },

        {
            type: "password",
            name: "analyst_CPassword",
            placeholder: "Password",
            label: "Confirm Password",
            istouched: props.touched.analyst_CPassword,
            errorMessage: props.errors.analyst_CPassword
        },


        {
            type: "email",
            name: "analyst_Email",
            placeholder: "Enter email",
            label: "Email",
            istouched: props.touched.analyst_Email,
            errorMessage: props.errors.analyst_Email
        },

        {
            type: "text",
            name: "analyst_Phone",
            placeholder: "Enter phone number",
            label: "Phone",
            istouched: props.touched.analyst_Phone,
            errorMessage: props.errors.analyst_Phone
        }


    ]

    return (
        <div>
            <h3>Register Analyst</h3>
            <RenderForm
                formData={analystForm}
                buttonType="submit"
                onSubmit={props.handleSubmit}
                isSubmitting={props.isSubmitting}
                buttonText="Add Analyst"
            />
        </div>
    )
}

const FormikAnalystRegister = withFormik({

    mapPropsToValues() {

        return {

            analyst_Username: '',
            analyst_Firstname: '',
            analyst_Middlename: '',
            analyst_Lastname: '',
            analyst_Dept: '',
            analyst_Password: '',
            analyst_CPassword: '',
            analyst_Email: '',
            analyst_Phone: ''
        }
    },

    validationSchema: Yup.object().shape({
        analyst_Username: Yup.string().required('*This field is required'),
        analyst_Firstname: Yup.string().required('*This field is required'),
        analyst_Middlename: Yup.string(),
        analyst_Lastname: Yup.string().required('*This field is required'),
        analyst_Dept: Yup.string().required('*This field is required'),
        analyst_Password: Yup.string().required('*This field is required'),
        analyst_CPassword: Yup.string().required('*This field is required').test('Password Check', 'Password does not match', function (value) { return this.parent.analyst_Password === value }),
        analyst_Email: Yup.string().email('Enter a vaild email').required('*This field is required'),
        analyst_Phone: Yup.string().required('*This field is required').test('Phone Number test', 'Please enter a valid phone number', function (value) { return /^\d+$/.test(value) })
    }),

    handleSubmit(values) {

        console.log(values)

        service.registerUser({ ...values, type: 'analyst' })
            .then(result => {
                if (result.data.success) {
                    console.log('inserted')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

})(AnalystRegister)

export default FormikAnalystRegister;
