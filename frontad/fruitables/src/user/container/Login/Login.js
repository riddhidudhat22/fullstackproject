import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Inputbox } from '../../component/UI/inputbox/input.styled';
import { login, register } from '../../../redux/reducer/slice/authlogin';
import { Navigate } from "react-router-dom";

function Login() {
    // const [view, setView] = useState('login');
    // const dispatch = useDispatch();

    // const auth = useSelector(state => state.auth) || {};
    // console.log(auth);



    // const getValidationSchema = () => {
    //     switch (view) {
    //         case 'login':
    //             return Yup.object().shape({
    //                 email: Yup.string()
    //                     .email('Invalid email address')
    //                     .required('Email is required'),
    //                 password: Yup.string()
    //                     .required('Password is required')
    //                     .min(6, 'Password must be at least 6 characters'),
    //             });
    //         case 'signUp':
    //             return Yup.object().shape({
    //                 email: Yup.string()
    //                     .email('Invalid email address')
    //                     .required('Email is required'),
    //                 password: Yup.string()
    //                     .required('Password is required')
    //                     .min(6, 'Password must be at least 6 characters'),
    //                 confirmPassword: Yup.string()
    //                     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //                     .required('Confirm Password is required'),
    //             });
    //         case 'forgotPassword':
    //             return Yup.object().shape({
    //                 email: Yup.string()
    //                     .email('Invalid email address')
    //                     .required('Email is required'),
    //             });
    //         default:
    //             return Yup.object().shape({});
    //     }
    // };

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //     },
    //     validationSchema: getValidationSchema(),
    //     enableReinitialize: true,
    //     onSubmit: (values) => {
    //         if (view === "signUp") {
    //             dispatch(register({ ...values, 'role': 'user' }));
    //         } else if (view === 'login') {
    //             dispatch(login(values))
    //         }


    //     },
    // });

    // const { handleChange, handleBlur, handleSubmit, values, touched, errors } = formik;
    // console.log(errors);

    // // if (auth.isAuthantication) {
    // //     return <Navigate to="/" />
    // // }
    // if (auth.isAuthantication) {
    //     return <Navigate to="/" />
    // }
    // const renderForm = () => {
    //     switch (view) {
    //         case 'login':
    //             return (
    //                 <>
    //                     <Inputbox
    //                         type="email"
    //                         label="Email"
    //                         placeholder="Enter your email"
    //                         name="email"
    //                         value={values.email}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.email && errors.email}
    //                     />
    //                     <Inputbox
    //                         type="password"
    //                         label="Password"
    //                         placeholder="Enter your password"
    //                         name="password"
    //                         value={values.password}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.password && errors.password}
    //                     />
    //                     <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>
    //                 </>
    //             );
    //         case 'signUp':
    //             return (
    //                 <>


    //                     <Inputbox
    //                         type="email"
    //                         label="Email"
    //                         placeholder="Enter your email"
    //                         name="email"
    //                         value={values.email}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.email && errors.email}
    //                     />
    //                     <Inputbox
    //                         type="password"
    //                         label="Password"
    //                         placeholder="Enter your password"
    //                         name="password"
    //                         value={values.password}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.password && errors.password}
    //                     />
    //                     <Inputbox
    //                         type="password"
    //                         label="Confirm Password"
    //                         placeholder="Confirm your password"
    //                         name="confirmPassword"
    //                         value={values.confirmPassword}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.confirmPassword && errors.confirmPassword}
    //                     />
    //                     <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>
    //                 </>
    //             );
    //         case 'forgotPassword':
    //             return (
    //                 <>
    //                     <Inputbox
    //                         type="email"
    //                         label="Email"
    //                         placeholder="Enter your email"
    //                         name="email"
    //                         value={values.email}
    //                         onChange={handleChange}
    //                         onBlur={handleBlur}
    //                         error={touched.email && errors.email}
    //                     />
    //                     <button type="submit" className="btn btn-primary w-100 mt-4">Reset Password</button>
    //                 </>
    //             );
    //         default:
    //             return null;
    //     }
    // };

    // return (
    //     <div className="container">

    //         <div className="row justify-content-center mt-5">
    //             <div className="col-md-6">

    //                 <div className="card shadow">
    //                     {/* {auth.error && (
    //                         <div className="alert alert-danger text-center">
    //                             {auth.error}
    //                         </div>
    //                     )} */}
    //                     <div className="card-body">
    //                         <h2 className="text-center mb-4">{view === 'login' ? 'Login' : view === 'signUp' ? 'Sign Up' : 'Forgot Password'}</h2>

    //                         <form onSubmit={handleSubmit}>
    //                             {renderForm()}
    //                         </form>
    //                         <div className="text-center mt-3">
    //                             {view === 'login' && (
    //                                 <>
    //                                     <button className="btn btn-link" onClick={() => setView('signUp')}>Sign Up</button>
    //                                     <button className="btn btn-link" onClick={() => setView('forgotPassword')}>Forgot Password?</button>
    //                                 </>
    //                             )}
    //                             {view === 'signUp' && (
    //                                 <>
    //                                     <button className="btn btn-link" onClick={() => setView('login')}>Login</button>
    //                                 </>
    //                             )}
    //                             {view === 'forgotPassword' && (
    //                                 <>
    //                                     <button className="btn btn-link" onClick={() => setView('login')}>Back to Login</button>
    //                                 </>
    //                             )}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    const [type, setType] = useState('login');

    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth) || {};

    console.log(auth);


    let authSchema = {}, initialVal = {};

    if (type === 'signup') {
        authSchema = yup.object({
            name: yup.string().required("Enter your name"),
            email: yup.string().required("Enter your email").email("Enter valid email"),
            password: yup.string().required().min(5, 'Password must be 5 characters long')
        });

        initialVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (type === 'login') {
        authSchema = yup.object({
            email: yup.string().required("Enter your email").email("Enter valid email"),
            password: yup.string().required().min(5, 'Password must be 5 characters long')
        });

        initialVal = {
            email: '',
            password: '',
        }
    } else {
        authSchema = yup.object({
            email: yup.string().required("Enter your email").email("Enter valid email"),
        });

        initialVal = {
            email: '',
        }
    }

    let formikObj = useFormik({
        initialValues: initialVal,
        validationSchema: authSchema,
        onSubmit: values => {
            if (type === 'signup') {
                dispatch(register({ ...values, 'role': 'user' }));
            } else if (type === 'login') {
                dispatch(login(values))
            } else {

            }
        },
    })

    let { handleSubmit, handleChange, handleBlur, touched, errors, values } = formikObj;

    console.log(authSchema);

    console.log(initialVal);


    if (auth.isAuthenticated) {
        return <Navigate to="/" />
    }

    const handlegogglesub=()=>{
        window.location.href="http://localhost:8000/api/v1/users/googlelogin"
    }
    console.log(errors, touched);
    return (
        <div>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    {
                        type === 'login' ? "Login" :    
                            type === 'signup' ? "Signup" : "Forgot Password?"
                    }
                </h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">
                        {
                            type === 'login' ? "Login" :
                                type === 'signup' ? "Signup" : "Forgot Password?"
                        }
                    </li>
                </ol>
            </div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <form onSubmit={handleSubmit} method='post'>
                        <div>
                            {
                                type === 'signup' ?
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='name'
                                            id='name'
                                            placeholder="Please enter your name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <span>{errors.name && touched.name ? errors.name : null}</span>
                                    </div>
                                    : null
                            }

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name='email'
                                    id='email'
                                    placeholder="Please enter your name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span>{errors.email && touched.email ? errors.email : null}</span>
                            </div>
                            {
                                type !== 'forgot' ?
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            name='password'
                                            id='password'
                                            placeholder="Please enter your name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        <span>{errors.password && touched.password ? errors.password : null}</span>
                                    </div>
                                    : null
                            }

                            {
                                type === 'signup' ?
                                    <p>Already have an account? <a href="#" class="link-primary" onClick={() => setType('login')}>Login</a></p>
                                    :
                                    <>
                                        <a href="#" class="link-primary" onClick={() => setType('forgot')}>Forgot Password?</a>
                                        <p>Don't have an account? <a href="#" class="link-primary" onClick={() => setType('signup')}>Signup</a></p>
                                    </>
                            }

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <button onClick={handlegogglesub}>Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
