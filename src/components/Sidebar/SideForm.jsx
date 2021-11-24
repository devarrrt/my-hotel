import React, { useState } from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import './Sidebar.scss'
import { DatePicker } from '@mui/lab';
import axios from 'axios';


//получить кол-во дней 
const SideForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [city, setCity] = useState('')
    const [valueDate, setValueDate] = useState(new Date(new Date('2021-11-24')));

    const [hotels, setHotels] = useState()

    console.log(hotels);

    const handleChange = (newValue) => {
        setValueDate(newValue);
    };
    const onSubmit = (data) => {
        console.log(data)
        axios.post(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${'2021-12-11'}&checkOut=${'2021-12-12'}&limit=15`)
            .then(res => {
                console.log(res.data)
            })
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <InputLabel htmlFor="date">Дата заселения</InputLabel>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                        mask="mm.dd.yy"
                        label="Begin date"
                        value={valueDate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
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
