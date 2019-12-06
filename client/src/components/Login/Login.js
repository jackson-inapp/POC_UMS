import React from 'react'
import {withFormik, Form} from 'formik'
import {Container,Button} from 'reactstrap'
import * as Yup from 'yup'
import RenderFormField from '../Form/RenderFormField'


function LoginFormik(props) {
    
    return (
       <Container>

            <Form>
              
                <RenderFormField 
                     type="text"
                     name="Username"
                     id="Username"
                     placeholder="Enter your username/email"
                     label="Username"
                     istouched = {props.touched.Username}
                     errorMessage = {props.errors.Username}
                />               

                <RenderFormField 
                 type="password"
                 name="Password"
                 id="Password"
                 placeholder="Enter your password"
                 label="Enter your password"
                 istouched = {props.touched.Password}
                 errorMessage = {props.errors.Password}
                />
              
                
                    <Button color= "primary" type="submit" onSubmit={props.handleSubmit} disabled={props.isSubmitting}>
                        Login
                    </Button>
                
                
            </Form>

       </Container>
    )
}

const Login = withFormik({

    mapPropsToValues(){
        return {
            Username : '',
            Password : ''
        }
    },

    validationSchema : Yup.object().shape({

            Username : Yup.string().required("Username is required"),
            Password : Yup.string().required("Password is required")

    }),

    handleSubmit (values,{setSubmitting,resetForm}) {

        console.log(values);
        setSubmitting(true);
        setTimeout(()=> { resetForm()},1000)
        // resetForm()

       

        //API call code here
    }

})(LoginFormik) 

export default Login
