import React from 'react'
import {Field} from 'formik'
import {FormGroup} from 'reactstrap'

export default function RenderFormField(props) {
    
    let template = null;

        if(props.type ==='text' || props.type ==='password' || props.type === 'email')
         {

            template = <FormGroup> 
                        <label htmlFor={props.name}>{props.label}</label> 
                        <Field type={props.type} name={props.name} className="form-control" id={props.name} placeholder={props.placeholder} />
                        {props.istouched && props.errorMessage && 
                         <span style={{color:"red"}}>{props.errorMessage}</span>}
                       </FormGroup>

         }   
       
         return template;
 
}
