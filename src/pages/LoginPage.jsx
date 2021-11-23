import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router';
import { Context } from '../AppContext'

const LoginPage = () => {
    const { user, setUser } = useContext(Context)
     const schema = yup.object().shape({
        email: yup.string().email('Неверная почта').required('Введите почту'),
        password: yup.string().required().min(6, '​Минимальная длина пароля 6 символов'),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()

    const onSubmit = (data) => {
        if (data.email && data.password) {
            setUser(data.email)
            navigate('/')
        }
    }
    return (
        <div className="login__wrapper">
            <div className="login__form">
                <h3 className="login__form-title">
                    Simple Hotel Check
                </h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login__form-inputs">
                    <TextField
                        className="login__form-filds"
                        label="Логин"
                        margin="normal"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email')}
                    />
                    <TextField
                        className="login__form-filds"
                        label="Пароль"
                        margin="normal"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        {...register('password')}
                    />
                    <button
                        type="submit"
                        className="btn">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
