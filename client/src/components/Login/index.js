import React from 'react';
import { useState, useEffect } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
        
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData( (prevState) =>({
            ...prevState, 
            [e.target.name]: e.target.value

        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <div>
            <section className='heading'>

                <h1>
                    Login
                </h1>

                <p>
                    Please login to your account
                </p>

            </section>

            <section className='form'>

                <form onSubmit={onSubmit}>
                  
                    <div className='form-group'>

                        <input className='form-control' type='email' id='email' name='email' value={email} placeholder='Enter Email' onChange={onChange} />
                        <input className='form-control' type='password' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange} />
                      
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='button button-block'>
                            Submit
                            </button>
                    </div>


                </form>

            </section>


        </div>
    );
}


export default Login;