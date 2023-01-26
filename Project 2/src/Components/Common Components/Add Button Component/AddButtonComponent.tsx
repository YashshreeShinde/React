import React from 'react'
import Button from '../Button/Button';

const AddButtonComponent = () => {
    const actionStyles={
        color:"secondary"
    }
  return (
    
    <Button name="add" type="button" label="ADD" link="add" actionStyles={actionStyles}/>
    
  )
}

export default AddButtonComponent