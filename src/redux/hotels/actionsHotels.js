import axios from "axios";

export const hotelsConst = {
  FETCH_HOTELS: "FETCH_HOTELS",
  GET_HOTELS: "GET_HOTELS",
  SUCCESS_GET_HOTELS: "SUCCESS_GET_HOTELS",
  ERROR_GET_HOTELS: "ERROR_GET_HOTELS",
};

export const fetchHotelsAction = (payload) => ({
  type: hotelsConst.FETCH_HOTELS,
  payload,
});

// export const fetchHotelsAction = (endDay, city, startDay) => {
//   try {
//     const data = axios.get(
//       `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10`
//     );
//     console.log(data)
//   } catch {

//   }
// };


export const getHotelsAction = ({ location, beginDate, endDate }) => ({
  type: hotelsConst.GET_HOTELS,
  payload: location,
  beginDate,
  endDate,
});


export const successGetHotelsAction = (data) => ({
  type: hotelsConst.SUCCESS_GET_HOTELS,
  payload: data,
});

export const errorGetHotelsAction = (message) => ({
  type: hotelsConst.ERROR_GET_HOTELS,
  payload: message,
});
