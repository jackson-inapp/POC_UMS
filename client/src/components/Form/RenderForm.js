import React from 'react'
import {Container,Button} from 'reactstrap'
import {Form} from 'formik'
import RenderFormField from './RenderFormField'


function RenderForm(props) {

   const renderFields = ()  => {

        return props.formData.map((field,index) => {

            return <RenderFormField key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            istouched = {field.istouched}
            errorMessage = {field.errorMessage}
       />
        })

    }

    return (
        <Container>
             <Form>

                 {renderFields()}

                 <Button
                 type={props.buttonType}
                 onSubmit = {props.onSubmit}
                 disabled = {props.isSubmitting}>
                      
                {props.buttonText}
                </Button>
             </Form>
        </Container>
    )
}

export default RenderForm
