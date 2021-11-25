import React, { useState } from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import './Sidebar.scss'
import { DatePicker } from '@mui/lab';
import { getHotelsAction } from '../../redux/hotels/actionsHotels';


//Date.prototype.addDays = function(days) {
// var date = new Date(this.valueOf());
// date.setDate(date.getDate() + days);
// return date;
// }

// var date = new Date();
// console.log(date.addDays(5)) - solution

//посчитать кол-во дней/добавить второй календарь
const SideForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [startDay, setStartDay] = useState(new Date('2021-11-24'));
    const [days, setDays] = useState()
    const dispatch = useDispatch()

    const endDay = Number(startDay.getDate()) + Number(days)


    const handleChange = (newValue) => {
        setStartDay(newValue);
    };
    const onSubmit = (data) => {
        dispatch(getHotelsAction(data.location, data.date, data.days))
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
                        onChange={handleChange}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
                            {...params}
                        />}
                        {...register("date")}

                    />
                </LocalizationProvider>

                <InputLabel htmlFor="days">Количество дней</InputLabel>
                <TextField
                    id="days"
                    className="side-form__fields"
                    variant="outlined"
                    margin="normal"
                    {...register("days")}
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
