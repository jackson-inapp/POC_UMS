import React from 'react'
import { Field } from 'formik'
import { FormGroup } from 'reactstrap'

export default function RenderFormField(props) {

  let template = null;

  if (props.type === 'text' || props.type === 'password' || props.type === 'email') {

    template = <FormGroup>
      <label htmlFor={props.name}>{props.label}</label>
      <Field type={props.type} name={props.name} className="form-control" id={props.name} placeholder={props.placeholder} />
      {props.istouched && props.errorMessage &&
        <span style={{ color: "red" }}>{props.errorMessage}</span>}
    </FormGroup>

  } else if (props.type === 'select') {
    template = <FormGroup>
      <label htmlFor={props.name}>{props.label}</label>
      <Field name={props.name} as={props.type} id={props.name} placeholder={props.placeholder} className="form-control">
        {props.options.map((val, index) => {
          return <option key={index} value={val.id}>{val.name}</option>
        })}
      </Field>
      {props.istouched && props.errorMessage &&
        <span style={{ color: "red" }}>{props.errorMessage}</span>}
    </FormGroup>
  }

  return template;

}
