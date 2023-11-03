import axios from "axios";

const Tour_REST_API_URL = "http://localhost:8501/tours";

class TourService {

  getById(tourId) {
    return axios.get(`${Tour_REST_API_URL}/${tourId}`);
  }

  getItems() {
    return axios.get(Tour_REST_API_URL);
  }

  addItem(tour) {
    return axios.post(Tour_REST_API_URL, tour);
  }

  updateItem(tour) {
    return axios.put(`${Tour_REST_API_URL}/${tour.id}`, tour);
  }

  deleteItem(tourId) {
    return axios.delete(`${Tour_REST_API_URL}/${tourId}`);
  }

  updateBookings(itemId, newBookings) {
    console.log("Sending PATCH request to update bookings:", itemId, newBookings);
    return axios.patch(`${Tour_REST_API_URL}/${itemId}`, { bookings: newBookings });
  }

}

export default new TourService();