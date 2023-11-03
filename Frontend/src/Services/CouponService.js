import axios from "axios";

const User_REST_API_URL = "http://localhost:8501/coupon";

class CouponService {
  getItems() {
    return axios.get(User_REST_API_URL);
  }

  addItem(user) {
    return axios.post(User_REST_API_URL, user);
  }

}

export default new CouponService();