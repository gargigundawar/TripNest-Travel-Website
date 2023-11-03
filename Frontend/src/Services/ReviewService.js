import axios from "axios";

const Review_REST_API_URL = "http://localhost:8501/review";

class ReviewService {
  getItems() {
    return axios.get(Review_REST_API_URL);
  }

  addItem(review) {
    return axios.post(Review_REST_API_URL, review);
  }

  deleteItem(reviewId) {
    return axios.delete(`${Review_REST_API_URL}/${reviewId}`);
  }
 
}

export default new ReviewService();