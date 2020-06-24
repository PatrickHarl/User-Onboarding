import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import * as yup from 'yup'
import axios from 'axios'


const url = 'https://reqres.in/api/users'

const initialFormValues = {

  name:'',
  email:'',
  password:'',
  role:'',
  tosAgree: false

}

const initialFormErrors = {

  name:'Name must be at least 2 characters long!',
  email:'Email required',
  password:'Password must be at least 8 characters long!',
  role:'You must choose a role!',
  tosAgree:'You must agree to the terms of service!'

}

const formSchema = yup.object().shape({

        name: yup
          .string()
          .min(2, 'Name must be at least 2 characters long!')
          .required('Name is required'),
        email: yup
          .string()
          .email('Not a valid email address!')
          .required('Email required'),
        password: yup
          .string()
          .min(8, 'Password must be at least 8 characters long!')
          .required('Password required'),
          role: yup
          .string()
          .notOneOf(['choose'], 'You must choose a role!')
          .required('You must choose a role!'),
        tosAgree: yup
          .bool().oneOf([true], 'You must agree to the terms of service!')


})



function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {


    formSchema.isValid(formValues)
      .then((valid) => {

        setButtonEnabled(valid)

      })


  }, [formValues])

  const updateFormText = (event) => {

    const name = event.target.name
    const value = event.target.value
    
    setFormValues({...formValues, [name]:value})

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {

        setFormErrors({...formErrors, [name]:""})

      })
      .catch(err => {

        setFormErrors({...formErrors, [name]:err.errors[0]})

      })

  }

  const updateFormChecked = (event) => {

    const name = event.target.name
    const checkedBool = event.target.checked
      
    setFormValues({...formValues, [name]:checkedBool})

    yup
      .reach(formSchema, name)
      .validate(checkedBool)
      .then(valid => {

        setFormErrors({...formErrors, [name]:""})
        //console.log('inside the form errors .then')
      })
      .catch(err => {

        //console.log('inside the form errors .catch')
        setFormErrors({...formErrors, [name]:err.errors[0]})

      })
  
  
  
  }

  const onSubmit = (event) => {

    event.preventDefault();

    axios.post(url, formValues)
      .then ((res) => {

        //console.log(res.data)
        setUsers([...users, res.data])
        //console.log(users)

      })
      .catch ((err) => {


        console.log(err)

      })


  }
  

  return (
    <div className="App">
      <div>
      {
      
      users.map(user => {


        return (

          <pre>
          {JSON.stringify(user)}
          </pre>
        

          
        ) 



              


      })
      
      
      
      
      
      }



      </div>
      <Form formErrors={formErrors} buttonEnabled={buttonEnabled} onSubmit={onSubmit} updateFormChecked={updateFormChecked} updateFormText={updateFormText} values={formValues}/>
    </div>
  );
}

export default App;
