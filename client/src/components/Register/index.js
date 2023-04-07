import React from 'react';
import { useState, useEffect } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const { username, email, password, passwordConfirm } = formData

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
                    Register
                </h1>

                <p>
                    please create a account
                </p>

            </section>

            <section className='form'>

                <form onSubmit={onSubmit}>
                    <div className='form-group'>

                        <input className='form-control' type='text' id='username' name='username' value={username} placeholder='Enter Username' onChange={onChange} />
                        <input className='form-control' type='email' id='email' name='email' value={email} placeholder='Enter Email' onChange={onChange} />
                        <input className='form-control' type='password' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange} />
                        <input className='form-control' type='password' id='passwordConfirm' name='passwordConfirm' value={passwordConfirm} placeholder='Confirm Password' onChange={onChange} />

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


export default Register;