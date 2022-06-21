
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      "Content-type": "application/json"
    }
  });

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };


export const getCurrentUser = async () => {
    try {
        const res = await axios.get("user/me")
        console.log(res.data.obj)
        return res.data.obj;
      } catch (err) {
        return err.response?.data || err;
      }
}

/*export const getPlacesByCityName = async (cityName) => {
    var places = null;
  
    return places;

}*/