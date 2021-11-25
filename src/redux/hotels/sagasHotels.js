import { takeLatest } from 'redux-saga/effects'
import { hotelsConst } from './actionsHotels'


export function* fetchHotelsRequest(data){
    try {
        console.log(data)
    } catch {
        console.log(data);

    } finally{
        console.log(data);
        
    }
}

export function* sagasHotels(){
    yield takeLatest( hotelsConst.GET_HOTELS, fetchHotelsRequest )
}