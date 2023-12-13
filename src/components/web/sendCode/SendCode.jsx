import React, { useContext } from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik';
import { sendCodeSchema } from '../validation/validation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';

export default function Login() {
    let {userToken,setUserToken} = useContext(UserContext);
    const navigate = useNavigate();
    if(userToken){
        navigate(-1);
    }
    const onSubmit = async users=>{
        const {data} = await axios.patch(`https://ecommerce-node4.vercel.app/auth/sendcode`,users);
        if(data.message=='success'){
            localStorage.setItem("userToken",data.token);
            setUserToken(data.token);
            toast.success('Check your email',{
                position:"top-right",
                autoClose:false,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggabletrue:true,
                progress:undefined,
                theme:"dark"
            });
            navigate('/forgetpassword');
            }
        }
    
    const formik = useFormik({
        initialValues:{
            email:'',
        },
        onSubmit,
        validationSchema:sendCodeSchema,
    });
    const inputs = [
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
    ];
    const renderInputs = inputs.map( (input,index)=>
    <Input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title={input.title} 
    value={input.value} 
    key={index} 
    errors={formik.errors} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    )
  return (
    <div className='container'>
        <h2>Send Code</h2>
        <form onSubmit={formik.handleSubmit}>
            {renderInputs}
            <button type='submit' disabled={!formik.isValid} >send code</button>
        </form>
    </div>
  )
}
