import { useFormik } from 'formik'
import React from 'react'
import { useLoginMutation } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './loginSlice'
import { FaXTwitter } from 'react-icons/fa6'

const Login = () => {

    var [loginFn] = useLoginMutation()
    var navigate = useNavigate()
    var dispatch = useDispatch()

    var loginForm = useFormik({
        initialValues : {
            username:"",
            password:""
        },
        onSubmit: (values) => {

            // try {
            //     const res = await loginFn(values).unwrap();
            //     window.localStorage.setItem("token", res.token);
               
            //     dispatch(setUser(res));
            //     navigate("/home");
            //   } catch (error) {
            //     console.error('Failed to log in:', error);
            //   }
            // }

            loginFn(values).then((res) => {
                console.log(res);
                    window.localStorage.setItem("role",res.data.role)
                    window.localStorage.setItem("username",res.data.username)
                    window.localStorage.setItem("id",res.data.id)
                    window.localStorage.setItem("profileImg",res.data.profileImg)
                window.localStorage.setItem("token",res.data.token)
               
                dispatch(setUser(res.data))
                navigate("/home")
            })
        }
    })
       

  return (
    <div className='d-flex justify-content-center ' >
        <form className='w-50 pt-2 border border-2 mt-5 ' onSubmit={loginForm.handleSubmit}>
                    <h2 className='text-light text-center'><FaXTwitter /></h2>

            <div className="mb-2 p-3">
                <label for="userName" className='form-label text-light'>UserName</label>
                <input type="text" className="form-control" id="userName" {...loginForm.getFieldProps('username')}/>
            </div>
            <div className="mb-2 p-3">
                <label for="password" className='form-label text-light'>Password</label>
                <input type="password" className="form-control" id="password" {...loginForm.getFieldProps('password')}/>
            </div>
            <div className='p-3'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
