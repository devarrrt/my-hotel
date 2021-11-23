import React from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import './Sidebar.scss'

const SideForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
 
    return (
       <div className="side-form">
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <InputLabel htmlFor="location">Локация</InputLabel>
                <TextField
                    id="location"
                    className="side-form__fields"
                    variant="outlined"
                    margin="normal"
                />
                <InputLabel htmlFor="date">Дата заселения</InputLabel>
                <TextField
                    id="date"
                    className="side-form__fields"
                    variant="outlined"
                    margin="normal"
                />
                <InputLabel htmlFor="days">Количество дней</InputLabel>
                <TextField
                    id="days"
                    className="side-form__fields"
                    variant="outlined"
                    margin="normal"
                />
                <button
                    type="submit"
                    className="btn">
                    Войти
                </button>
            </form>
       </div>
    )
}

export default SideForm
