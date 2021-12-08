import axios from "axios"

export const HotelsAPI = {
  async getHotels(endDay, city, startDay) {
    const data = await axios.get(
      `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10`
    );
    return data.data;
  },

  async findHotels(formData) {
    const data = await axios.get(
      `http://engine.hotellook.com/api/v2/cache.json?location="Санкт-Петербург"&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10`
    );
    console.log(data, "ssfbgg");
  },
};
//получить данные по запросу и настроить отображения из стейта, добавить избранные 