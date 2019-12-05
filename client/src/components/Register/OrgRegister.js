import React from 'react'
import {withFormik, Form} from 'formik'
import {Container,Button} from 'reactstrap'
import * as Yup from 'yup'

import RenderFormField from '../FormFieldRender/RenderFormField'

function OrgRegister(props) {

    return (
        <Container>

            <h3>Register Organisation</h3>

            <Form>


                <RenderFormField
                     type="text"
                     name="Org_Name"
                     placeholder="Enter the organisation name"
                     label="Organisation Name"
                     istouched = {props.touched.Org_Name}
                     errorMessage = {props.errors.Org_Name}
                />

                   <RenderFormField
                     type="text"
                     name="Addr_Line_1"
                     placeholder="Address Line 1"
                     label="Address Line 1"
                     istouched = {props.touched.Addr_Line_1}
                     errorMessage = {props.errors.Addr_Line_1}
                    />       

                  <RenderFormField
                     type="text"
                     name="Addr_Line_2"
                     placeholder="Address Line 2"
                     label="Address Line 2"
                     istouched = {props.touched.Addr_Line_2}
                     errorMessage = {props.errors.Addr_Line_2}
                    /> 

                 <RenderFormField
                     type="text"
                     name="Addr_Line_3"
                     placeholder="Address Line 3"
                     label="Address Line 3"
                     istouched = {props.touched.Addr_Line_3}
                     errorMessage = {props.errors.Addr_Line_3}
                    /> 
                
                <RenderFormField
                     type="text"
                     name="ZipCode"
                     placeholder="Zip Code"
                     label="Zip code"
                     istouched = {props.touched.ZipCode}
                     errorMessage = {props.errors.ZipCode}
                    /> 
                
                <RenderFormField
                     type="text"
                     name="Phone"
                     placeholder="Enter phone number"
                     label="Phone Number"
                     istouched = {props.touched.Phone}
                     errorMessage = {props.errors.Phone}
                    />

                <RenderFormField
                     type="email"
                     name="Email"
                     placeholder="Enter email id"
                     label="Email Address"
                     istouched = {props.touched.Email}
                     errorMessage = {props.errors.Email}
                    /> 
                   
             <Button onSubmit={props.handleSubmit}
                type="submit"  
                disabled={props.isSubmitting}
            >
                 Add Organisation
            </Button> 

            </Form>

        </Container>
    )
}


const FormikOrgRegister = withFormik({

    mapPropsToValues() {

      return{         
        Org_Name:'',
        Addr_Line_1:'',
        Addr_Line_2:'',
        Addr_Line_3:'',
        ZipCode:'',
        Phone:'',
        Email:''
    }
},
    
    validationSchema : Yup.object().shape({

        Org_Name    : Yup.string().required('*This field is required'),
        Addr_Line_1 : Yup.string().required('*This field is required'),
        Addr_Line_2 : Yup.string().required('*This field is required'),
        Addr_Line_3 : Yup.string(),
        ZipCode     : Yup.string().required('*This field is required'),
        Phone       : Yup.string().required('*This field is required'),
        Email       : Yup.string().email().required('*This field is required')

    }),

    handleSubmit(values) {

        console.log(values)
    }
    
    
})(OrgRegister)

export default FormikOrgRegister
