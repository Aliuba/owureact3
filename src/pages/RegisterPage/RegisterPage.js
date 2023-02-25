import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }

    };
    return (
        <div>
            {error &&
                <div>
                    {JSON.stringify(error)}
                </div>
            }
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type={'text'} placeholder={'username'} {...register('username')}/>
                    <input type={'text'} placeholder={'password'} {...register('password')}/>
                    <button>Register</button>
                </form>
            </div>
        </div>

    );

};

export {RegisterPage};