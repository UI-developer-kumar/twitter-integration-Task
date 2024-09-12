import { useFormik } from 'formik';
import React from 'react';
import { useLoginMutation } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './loginSlice';
import { FaXTwitter } from 'react-icons/fa6';
import * as Yup from 'yup'; 

const Login = () => {
    const [loginFn] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form validation schema
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const loginForm = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema, // Apply validation schema
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                const res = await loginFn(values).unwrap(); // Unwrap response to handle errors directly
                console.log(res);
                // Securely handle storage (e.g., use sessionStorage instead of localStorage)
                sessionStorage.setItem('role', res.role);
                sessionStorage.setItem('username', res.username);
                sessionStorage.setItem('id', res.id);
                sessionStorage.setItem('profileImg', res.profileImg);
                sessionStorage.setItem('token', res.token);

                dispatch(setUser(res));
                navigate('/home');
            } catch (error) {
                // Handle errors (e.g., show error messages)
                console.error('Login failed:', error);
                setErrors({ username: 'Invalid username or password' });
            } finally {
                setSubmitting(false); // Reset submitting state
            }
        },
    });

    return (
        <div className='d-flex justify-content-center'>
            <form className='w-50 pt-2 border border-2 mt-5' onSubmit={loginForm.handleSubmit}>
                <div>
                    <h2 className='text-light text-center'><FaXTwitter /></h2>
                </div>
                <div>
                    <h2 className='text-light px-3'>Login</h2>
                </div>

                <div className='mb-2 p-3'>
                    <label htmlFor='userName' className='form-label text-light'>UserName</label>
                    <input
                        type='text'
                        className='form-control'
                        id='userName'
                        {...loginForm.getFieldProps('username')}
                    />
                    {loginForm.touched.username && loginForm.errors.username ? (
                        <div className='text-danger'>{loginForm.errors.username}</div>
                    ) : null}
                </div>
                <div className='mb-2 p-3'>
                    <label htmlFor='password' className='form-label text-light'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                        {...loginForm.getFieldProps('password')}
                    />
                    {loginForm.touched.password && loginForm.errors.password ? (
                        <div className='text-danger'>{loginForm.errors.password}</div>
                    ) : null}
                </div>
                <div className='p-3'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={loginForm.isSubmitting}
                    >
                        {loginForm.isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
