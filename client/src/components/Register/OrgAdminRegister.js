import React from 'react'
import { withFormik, Form } from 'formik'
import { Container, Button } from 'reactstrap'
import * as Yup from 'yup'
import RenderFormField from '../Form/RenderFormField'
import service from '../../services/api'
import { connect } from 'react-redux'

function OrgAdminRegister(props) {
    return (
        <Container>
            <Form>
                <RenderFormField
                    type="text"
                    name="username"
                    placeholder="Enter the Admin Username"
                    label="Username"
                    istouched={props.touched.username}
                    errorMessage={props.errors.username}
                />
                <RenderFormField
                    type="password"
                    name="password"
                    placeholder="Enter admin password"
                    label="Password"
                    istouched={props.touched.password}
                    errorMessage={props.errors.password}
                />
                <RenderFormField
                    type="password"
                    name="cpassword"
                    placeholder="Enter admin password"
                    label="Confirm Password"
                    istouched={props.touched.cpassword}
                    errorMessage={props.errors.cpassword}
                />
                <RenderFormField
                    type="text"
                    name="firstname"
                    placeholder="Enter the firstname"
                    label="Firstname"
                    istouched={props.touched.firstname}
                    errorMessage={props.errors.firstname}
                />
                <RenderFormField
                    type="text"
                    name="middlename"
                    placeholder="Enter the Middlename"
                    label="Middlename"
                    istouched={props.touched.middlename}
                    errorMessage={props.errors.middlename}
                />

                <RenderFormField
                    type="text"
                    name="lastName"
                    placeholder="Enter the lastname"
                    label="Lastname"
                    istouched={props.touched.lastName}
                    errorMessage={props.errors.lastName}
                />

                { props.login.userType === 'super' && <RenderFormField
                    type="select"
                    name="department"
                    placeholder="Select Department"
                    label="Department"
                    options={[{id:1,name:'sadsad'}]}
                    istouched={props.touched.lastName}
                    errorMessage={props.errors.lastName}
                />}

                <RenderFormField
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    label="Email"
                    istouched={props.touched.email}
                    errorMessage={props.errors.email}
                />

                <RenderFormField
                    type="text"
                    name="phone"
                    placeholder="Enter the phone number"
                    label="Phone"
                    istouched={props.touched.phone}
                    errorMessage={props.errors.phone}
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

    mapPropsToValues() {

        return {
            username: '',
            password: '',
            cpassword: '',
            firstname: '',
            middlename: '',
            lastName: '',
            email: '',
            phone: '',
            department: ''

        }

    },

    validationSchema: Yup.object().shape({

        username: Yup.string().required('*This field is required'),
        password: Yup.string().required('*This field is required'),
        cpassword: Yup.string().required('*This field is required').test('Password Check', 'Password does not match', function (value) { return this.parent.password === value }),
        firstname: Yup.string().required('*This field is required'),
        middlename: Yup.string(),
        lastName: Yup.string().required('*This field is required'),
        email: Yup.string().email('Please enter a valid Email').required('*This field is required'),
        phone: Yup.string().required('*This field is required').test('Phone Number test', 'Please enter a valid phone number', function (value) { return /^\d+$/.test(value) })
    }),


    handleSubmit(values, { setSubmitting, resetForm }) {

        // console.log(values);

        setSubmitting(true);
        console.log(values);
        service.registerUser({ ...values, type: 'admin' })
            .then(result => {
                if (result.data.success) {
                    console.log('inserted')
                    setTimeout(() => { resetForm() }, 1000)
                }
            })
            .catch(err => {
                console.log(err)
            })
        //API call to submit values. Avoid field cpassword

    }

})(OrgAdminRegister)

const mapPropstostate = (state) => ({
    login: state.login
})

export default connect(mapPropstostate)(FormikOrgAdminRegister)
