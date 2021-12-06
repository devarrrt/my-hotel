import { takeLatest, call } from "redux-saga/effects";
import { hotelsConst } from "./actionsHotels";
import { getHotels, HotelsAPI } from "../../API/hotelsApi";

export function* fetchHotelsRequest() {
  try {
    const data = yield call(HotelsAPI.getHotels);
    console.log(data, "mlknkn");
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export function* findHotelsRequest(formData) {
  try {
    const data = yield call(HotelsAPI.findHotels, formData);
    console.log(data, "mlknkn");
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export function* sagasHotels() {
  yield takeLatest(hotelsConst.FETCH_HOTELS, fetchHotelsRequest);
  yield takeLatest(hotelsConst.GET_HOTELS, findHotelsRequest);
}
