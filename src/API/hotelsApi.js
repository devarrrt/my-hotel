import axios from "axios"

export const HotelsAPI = {
  async getHotels() {
    const data = await axios.get(
      `http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10`
    );
    return data.data;
  },

  async findHotels(formData) {
    const data = await axios.get(
      `http://engine.hotellook.com/api/v2/cache.json?location="Санкт-Петербург"&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10`
    );
  console.log(data, "ssfbgg");
}
}