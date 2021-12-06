import { all } from "redux-saga/effects";
import { sagasHotels } from "./hotels/sagasHotels";

export function* rootSaga() {
  yield all([sagasHotels()]);
}
