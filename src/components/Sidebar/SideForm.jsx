import React, { useState, useEffect } from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import './Sidebar.scss'
import { DatePicker } from '@mui/lab';
import { getHotelsAction, fetchHotelsAction } from '../../redux/hotels/actionsHotels';

const SideForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [startDay, setStartDay] = useState(new Date())
    const [endDay, setEndDay] = useState(new Date())

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHotelsAction())
    }, [])

    const onSubmit = (data) => {
        dispatch(getHotelsAction(data))
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
                    {...register("location") }
                />
                <InputLabel htmlFor="date">Дата заселения</InputLabel>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                    name="date"
                        mask="mm.dd.yy"
                        label="Begin date"
                        value={startDay}
                        onChange={(newValue) => setStartDay(newValue)}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
                            {...params}
                        />}
                        {...register("beginDate")}
                    />
                </LocalizationProvider>

                <InputLabel htmlFor="date">Дата выселения</InputLabel>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                        name="date"
                        mask="mm.dd.yy"
                        label="End date"
                        value={endDay}
                        onChange={(newValue) => setEndDay(newValue)}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
                            {...params}
                        />}
                        {...register("endDate")}
                    />
                </LocalizationProvider>
                <button
                    type="submit"
                    className="btn">
                    Найти
                </button>
            </form>
        </div>
    )
}

export default SideForm
