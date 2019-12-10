import React from 'react'
import {withFormik, Form} from 'formik'
import {Container,Button} from 'reactstrap'
import * as Yup from 'yup'

import RenderFormField from '../Form/RenderFormField'
import service from '../../services/api'

function OrgRegister(props) {

    return (
        <Container>

            <Form>

                <RenderFormField
                     type="text"
                     name="org_Name"
                     placeholder="Enter the organisation name"
                     label="Organisation Name"
                     istouched = {props.touched.org_Name}
                     errorMessage = {props.errors.org_Name}
                />

                   <RenderFormField
                     type="text"
                     name="addr_Line_1"
                     placeholder="Address Line 1"
                     label="Address Line 1"
                     istouched = {props.touched.addr_Line_1}
                     errorMessage = {props.errors.addr_Line_1}
                    />       

                  <RenderFormField
                     type="text"
                     name="addr_Line_2"
                     placeholder="Address Line 2"
                     label="Address Line 2"
                     istouched = {props.touched.addr_Line_2}
                     errorMessage = {props.errors.addr_Line_2}
                    /> 

                 <RenderFormField
                     type="text"
                     name="addr_Line_3"
                     placeholder="Address Line 3"
                     label="Address Line 3"
                     istouched = {props.touched.addr_Line_3}
                     errorMessage = {props.errors.addr_Line_3}
                    /> 
                
                <RenderFormField
                     type="text"
                     name="zipCode"
                     placeholder="Zip Code"
                     label="Zip code"
                     istouched = {props.touched.zipCode}
                     errorMessage = {props.errors.zipCode}
                    /> 
                
                <RenderFormField
                     type="text"
                     name="phone"
                     placeholder="Enter phone number"
                     label="phone Number"
                     istouched = {props.touched.phone}
                     errorMessage = {props.errors.phone}
                    />

                <RenderFormField
                     type="email"
                     name="email"
                     placeholder="Enter email id"
                     label="email Address"
                     istouched = {props.touched.email}
                     errorMessage = {props.errors.email}
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
        org_Name:'',
        addr_Line_1:'',
        addr_Line_2:'',
        addr_Line_3:'',
        zipCode:'',
        phone:'',
        email:''
    }
},
    
    validationSchema : Yup.object().shape({

        org_Name    : Yup.string().required('*This field is required'),
        addr_Line_1 : Yup.string().required('*This field is required'),
        addr_Line_2 : Yup.string().required('*This field is required'),
        addr_Line_3 : Yup.string(),
        zipCode     : Yup.string().required('*This field is required'),
        phone       : Yup.string().required('*This field is required'),
        email       : Yup.string().email().required('*This field is required')

    }),

    handleSubmit(values) {

        console.log(values)
        service.registerOrg(values)
        .then(result=>{
            if(result.data.success){
                console.log('inserted')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    
})(OrgRegister)

export default FormikOrgRegister
