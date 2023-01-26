import React from 'react'
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import styles from "./Fields.module.scss"


function FormikControl (props:any) {
  const { control, ...attributes } = props
  switch (control) {
    case 'input':
      return <Input {...attributes} />
    case 'textarea':
      return <Textarea {...attributes} />
    case 'select':
      return <Select {...attributes} />
    case 'button':
      return <Button {...attributes}/>
    default:
      return null
  }
}

export default FormikControl
