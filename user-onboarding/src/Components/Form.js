import React from 'react'
import './Form.css'


function Form(props) {

    const { formErrors, buttonEnabled, onSubmit, updateFormChecked, updateFormText, values } = props
    
return (


    <div>
        
        <p><label>Name:</label><input onChange={updateFormText} type='text' name='name' value={values.name}></input></p>
        <p><label>Email:</label><input onChange={updateFormText} type='text' name='email' value={values.email}></input></p>
        <p><label>Password:</label><input onChange={updateFormText} type='password' name='password' value={values.password}></input></p>
        <p><label>Do you agree to the terms of service?</label><input onChange={updateFormChecked} type='checkbox' name='tosAgree' checked={values.tosAgree}></input></p>
        <p><button onClick={onSubmit} disabled={!buttonEnabled}>Submit</button></p>
        <p className='red'>{formErrors.name}</p>
        <p className='red'>{formErrors.email}</p>
        <p className='red'>{formErrors.password}</p>
        <p className='red'>{formErrors.tosAgree}</p>

    </div>

)

}


export default Form