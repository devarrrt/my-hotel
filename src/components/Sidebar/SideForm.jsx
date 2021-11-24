import React, { useState } from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import './Sidebar.scss'
import { DatePicker } from '@mui/lab';
import axios from 'axios';

const SideForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [value, setValue] = useState(new Date(''));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1')
            .then(res => console.log(res.data.results) )
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

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                        mask="mm.dd.yy"
                        label="Begin date"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField
                            {...params}
                        />}
                    />
                </LocalizationProvider>

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
