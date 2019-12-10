import React,{useState} from 'react'
import {withFormik, Form} from 'formik'
import {Container,Button} from 'reactstrap'
import * as Yup from 'yup'
import RenderFormField from '../Form/RenderFormField'
import service from '../../services/api'
import { login } from '../../Redux/Action'
import { connect } from 'react-redux'

function LoginFormik(props) {

    const [loading, setLoading] = useState(false)

    return (
       <Container onLoad={() => setLoading(true)} className="logincomp">
            
            <Form>
                     
                <RenderFormField 
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Enter your username/email"
                     label="Username"
                     istouched = {props.touched.username}
                     errorMessage = {props.errors.username}
                />               

                <RenderFormField 
                 type="password"
                 name="password"
                 id="password"
                 placeholder="Enter your password"
                 label="Password"
                 istouched = {props.touched.password}
                 errorMessage = {props.errors.password}
                />

                <Button color="primary" type="submit" onSubmit={props.handleSubmit} disabled={props.isSubmitting}>
                    Login
                    </Button>

            </Form>

            {loading && <div>Loading....</div>}

       </Container> 
    )
}

const Login = withFormik({

    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },

    validationSchema: Yup.object().shape({

        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")

    }),

    handleSubmit(values, {props, setSubmitting, resetForm }) {

        console.log(values);
        // setTimeout(() => { resetForm() }, 1000)

        //API call code here
        service.login(values)
            .then(result => {
                setSubmitting(true);
                if (result.data.success) {
                    props.loginMethod(result.data.token);
                }else{
                    console.log('Login Unsuccessful')
                    resetForm()
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

})(LoginFormik)

const mapStateToProps = state => ({
    loginReducer: state
});
const mapDispatchToProps = dispatch => ({
    loginMethod: token => dispatch(login(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
