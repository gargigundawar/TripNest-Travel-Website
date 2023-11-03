package com.BOOTJPA.BOOTJPA.bookingfolder;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @GetMapping
    public List<Booking> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> get(@PathVariable Integer id) {
        try {
            Booking booking = service.get(id);
            return new ResponseEntity<>(booking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/bytourid/{tourid}")
    public ResponseEntity<List<Booking>> getByTourid(@PathVariable Integer tourid) {
        try {
            List<Booking> bookings = service.getByTourid(tourid);
            if (bookings.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping
    public ResponseEntity<Booking> add(@RequestBody Booking booking) {
        service.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> update(@RequestBody Booking updatedBooking, @PathVariable Integer id) {
        try {
            Booking existingBooking = service.get(id);
            existingBooking.setName1(updatedBooking.getName1());
            existingBooking.setName2(updatedBooking.getName2());
            existingBooking.setName3(updatedBooking.getName3());
            existingBooking.setName4(updatedBooking.getName4());
            existingBooking.setName5(updatedBooking.getName5());
            existingBooking.setName6(updatedBooking.getName6());
            existingBooking.setEmail(updatedBooking.getEmail());
            existingBooking.setMobno(updatedBooking.getMobno());
            existingBooking.setAddress(updatedBooking.getAddress());
            existingBooking.setAdharno(updatedBooking.getAdharno());
            existingBooking.setRoom(updatedBooking.getRoom());
            existingBooking.setTotalprice(updatedBooking.getTotalprice());
            existingBooking.setTourid(updatedBooking.getTourid());
            existingBooking.setGuests(updatedBooking.getGuests());

            service.save(existingBooking);
            return new ResponseEntity<>(existingBooking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        try {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
