import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { signup } from './index';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({
            ...values, error: false,
            [name]: event.target.value

        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })

        //signup function
        signup({ name, email, password })
            .then(data => {
                console.log("test",data.error)
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({ ...values, name: "", email: "", password: "", success: true })
                }
            })
    }

    // to show error msg
    const showError=()=>(
        <div className='alert alert-danger' style={{display:error?"":"none"}}>
            {error}

        </div>
    )

        // to show success msg
        const showSuccess=()=>(
            <div className='alert alert-info' style={{display:success?"":"none"}}>
                {/* {success} */}
                Your account has been created verify your account before login
    
            </div>
        )
    return (

        <>
            <Navbar />

            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                        <form>
                            <h2 className='text-center text-success'>Register Form</h2>
                            {showError()}
                            {showSuccess()}
                            <div className="col-12 mb-3">
                                <label htmlFor="firstname">FirstName</label>
                                <input type="text"
                                    name="fname"
                                    id="firstname"
                                    placeholder="FirstName"
                                    className="form-control"
                                    onChange={handleChange('name')}
                                    value={name}

                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="lastname">LastName</label>
                                <input type="text" name="lname" id="lastname" placeholder="LastName" className="form-control" />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    className="form-control"
                                    onChange={handleChange('email')}
                                    value={email}

                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="pass" id="password"
                                    placeholder="***********" className="form-control"
                                    onChange={handleChange('password')}
                                    value={password}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input type="password" name="cpass" id="cpassword" placeholder="***********" className="form-control" />
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary form-control" onClick={handleSubmit}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <Footer />

        </>
    );
};

export default Signup;
