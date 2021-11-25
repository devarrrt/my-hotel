export const hotelsConst = {
  FETCH_HOTELS: "FETCH_HOTELS",
  GET_HOTELS: "GET_HOTELS",
  SUCCESS_GET_HOTELS: "SUCCESS_GET_HOTELS",
  ERROR_GET_HOTELS: "ERROR_GET_HOTELS",
};

export const fetchHotelsAction = () => ({
  type: hotelsConst.FETCH_HOTELS,
});

export const getHotelsAction = (data) => ({
  type: hotelsConst.GET_HOTELS,
  payload: data,
});


export const successGetHotelsAction = (data) => ({
  type: hotelsConst.SUCCESS_GET_HOTELS,
  payload: data,
});

export const errorGetHotelsAction = (message) => ({
  type: hotelsConst.ERROR_GET_HOTELS,
  payload: message,
});
