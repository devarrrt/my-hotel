import { hotelsConst } from "./actionsHotels";

const initialState = {
  hotelItems: [],
  loading: false,
  error: null,
};

const reducerHotels = (state = initialState, action) => {
  switch (action.type) {
    case hotelsConst.FETCH_HOTELS:
      return {
        ...state,
        loading: action.payload,
      };
    case hotelsConst.SUCCESS_GET_HOTELS:
      return {
        ...state,
        hotelItems: action.payload,
        loading: false,
      };
    case hotelsConst.ERROR_GET_HOTELS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducerHotels;

// Страница отображения отелей, где можно ввести название города, дату
// заселения и количество дней. По результатам этих данных отображаются
// отели и информация о них, которые можно добавить в избранное.
//  Избранные
// отели, в соответствующем блоке, можно отсортировать по стоимости и
// количеству звезд. На странице отображается карусель захардкоженных
// изображений. Изображение в карусели можно прокручивать.
