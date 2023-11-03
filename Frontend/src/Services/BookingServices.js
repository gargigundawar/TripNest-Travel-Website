// BookingServices.js

import axios from "axios";

const Booking_REST_API_URL = "http://localhost:8501/bookings";

class BookingService {
  getById(bookingId) {
    return axios.get(`${Booking_REST_API_URL}/${bookingId}`);
  }

  getBookings() {
    return axios.get(Booking_REST_API_URL);
  }

  addBooking(booking) { // Note the method name is addBookings (plural)
    return axios.post(Booking_REST_API_URL, booking);
  }

  updateBookings(booking) {
    return axios.put(`${Booking_REST_API_URL}/${booking.id}`, booking);
  }

  deleteBookings(bookingId) {
    return axios.delete(`${Booking_REST_API_URL}/${bookingId}`);
  }

  updateBookings(bookingId, newBookings) { // Note the method name is updateBookings
    console.log("Sending PATCH request to update bookings:", bookingId, newBookings);
    return axios.patch(`${Booking_REST_API_URL}/${bookingId}`, { bookings: newBookings });
  }

  getByTourid(tourid) {
    return axios.get(`${Booking_REST_API_URL}/bytourid/${tourid}`);
  }
}

export default new BookingService();
