import React from 'react'
import { withFormik } from 'formik'
import RenderForm from '../Form/RenderForm'
import * as Yup from 'yup'
import service from '../../services/api'

function AnalystRegister(props) {

    const analystForm = [
        {
            type: "text",
            name: "username",
            placeholder: "Enter username",
            label: "Username",
            istouched: props.touched.username,
            errorMessage: props.errors.username
        },

        {
            type: "text",
            name: "firstname",
            placeholder: "Enter the Analyst Firstname",
            label: "Firstname",
            istouched: props.touched.firstname,
            errorMessage: props.errors.firstname
        },

        {
            type: "text",
            name: "middlename",
            placeholder: "Enter the middlename",
            label: "Middlename",
            istouched: props.touched.middlename,
            errorMessage: props.errors.middlename
        },

        {
            type: "text",
            name: "lastname",
            placeholder: "Enter the lastname",
            label: "Lastname",
            istouched: props.touched.lastname,
            errorMessage: props.errors.lastname
        },

        {
            type: "text",
            name: "department",
            placeholder: "Enter the department",
            label: "Department",
            istouched: props.touched.department,
            errorMessage: props.errors.department
        },


        {
            type: "password",
            name: "password",
            placeholder: "Enter a password for Analyst",
            label: "Password",
            istouched: props.touched.password,
            errorMessage: props.errors.password
        },

        {
            type: "password",
            name: "cpassword",
            placeholder: "Password",
            label: "Confirm Password",
            istouched: props.touched.cpassword,
            errorMessage: props.errors.cpassword
        },


        {
            type: "email",
            name: "email",
            placeholder: "Enter email",
            label: "Email",
            istouched: props.touched.email,
            errorMessage: props.errors.email
        },

        {
            type: "text",
            name: "phone",
            placeholder: "Enter phone number",
            label: "Phone",
            istouched: props.touched.phone,
            errorMessage: props.errors.phone
        }


    ]

    return (
        <div>
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

            username: '',
            firstname: '',
            middlename: '',
            lastname: '',
            department: '',
            password: '',
            cpassword: '',
            email: '',
            phone: ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('*This field is required'),
        firstname: Yup.string().required('*This field is required'),
        middlename: Yup.string(),
        lastname: Yup.string().required('*This field is required'),
        department: Yup.string().required('*This field is required'),
        password: Yup.string().required('*This field is required'),
        cpassword: Yup.string().required('*This field is required').test('Password Check', 'Password does not match', function (value) { return this.parent.password === value }),
        email: Yup.string().email('Enter a vaild email').required('*This field is required'),
        phone: Yup.string().required('*This field is required').test('Phone Number test', 'Please enter a valid phone number', function (value) { return /^\d+$/.test(value) })
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
