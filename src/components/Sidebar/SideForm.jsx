import React, { useState, useEffect } from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import moment from 'moment'

import './Sidebar.scss'
import { DatePicker } from '@mui/lab';
import { getHotelsAction, fetchHotelsAction } from '../../redux/hotels/actionsHotels';
import axios from 'axios';

const SideForm = () => {
    const { register, handleSubmit } = useForm()
    const [startDay, setStartDay] = useState(moment().format('YYYY-MM-DD'))
    const [endDay, setEndDay] = useState(moment().format('YYYY-MM-DD'))
    const [city, setCity] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHotelsAction())
    }, [])

    //изменить запрос на саги
    const onSubmit = (data) => {
        // dispatch(fetchHotelsAction(endDay, city, startDay ))
        axios.get(
            `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${"2021-12-13"}&checkOut=2021-12-12&limit=10`
        );
    }
    // 2021 - 03 - 10
    
    const handleChangeStart = (date) => {
        const start = moment(date).format('YYYY-MM-DD');
        const end = moment(date).format('YYYY-MM-DD');
        setStartDay(start)
        setEndDay(end)
    }
  
    const handleChangeEnd = (date) => {
        const end = moment(date).format('YYYY-MM-DD');
        setEndDay(end)
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
                    defaultValue=""
                    onChange={ (e) => setCity(e.target.value) }
                />
                <InputLabel htmlFor="date">Дата заселения</InputLabel>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                        mask="MM-DD-YYYY"
                        label="Begin date"
                        value={startDay}
                        dateFormat="MM-DD-YYYY"
                        name="beginDate"
                        onChange={handleChangeStart}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
                            {...params}
                        />}
                    />
                </LocalizationProvider>

                <InputLabel htmlFor="date">Дата выселения</InputLabel>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns} >
                    <DatePicker
                        mask="mm.dd.yy"
                        label="End date"
                        value={endDay}
                        onChange={handleChangeEnd}
                        renderInput={(params) => <TextField
                            variant="outlined"
                            margin="normal"
                            className="side-form__fields"
                            {...params}
                        />}
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
