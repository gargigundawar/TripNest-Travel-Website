package com.BOOTJPA.BOOTJPA.tourfolder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService service;

    @GetMapping
    public List<Tour> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tour> get(@PathVariable Integer id) {
        try {
            Tour tour = service.get(id);
            return new ResponseEntity<>(tour, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Tour> add(@RequestBody Tour tour) {
        service.save(tour);
        return new ResponseEntity<>(tour, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Tour> update(@RequestBody Tour updatedTour, @PathVariable Integer id) {
        try {
            Tour existingTour = service.get(id);
            existingTour.setName(updatedTour.getName());
            existingTour.setDestination(updatedTour.getDestination());
            existingTour.setDate(updatedTour.getDate());
            existingTour.setPrice(updatedTour.getPrice());
            existingTour.setDescription(updatedTour.getDescription());
            existingTour.setDays(updatedTour.getDays());
            existingTour.setUrl(updatedTour.getUrl());
            existingTour.setBookings(updatedTour.getBookings());

            // Update dayX and descriptionX fields for each day of the tour itinerary
            existingTour.setDay1(updatedTour.getDay1());
            existingTour.setDescription1(updatedTour.getDescription1());
            existingTour.setDay2(updatedTour.getDay2());
            existingTour.setDescription2(updatedTour.getDescription2());
            existingTour.setDay3(updatedTour.getDay3());
            existingTour.setDescription3(updatedTour.getDescription3());
            existingTour.setDay4(updatedTour.getDay4());
            existingTour.setDescription4(updatedTour.getDescription4());
            existingTour.setDay5(updatedTour.getDay5());
            existingTour.setDescription5(updatedTour.getDescription5());
            existingTour.setDay6(updatedTour.getDay6());
            existingTour.setDescription6(updatedTour.getDescription6());
            existingTour.setDay7(updatedTour.getDay7());
            existingTour.setDescription7(updatedTour.getDescription7());
            existingTour.setDay8(updatedTour.getDay8());
            existingTour.setDescription8(updatedTour.getDescription8());
            existingTour.setDay9(updatedTour.getDay9());
            existingTour.setDescription9(updatedTour.getDescription9());
            existingTour.setDay10(updatedTour.getDay10());
            existingTour.setDescription10(updatedTour.getDescription10());
            existingTour.setUrl2(updatedTour.getUrl2());
            existingTour.setUrl3(updatedTour.getUrl3());

            service.save(existingTour);
            return new ResponseEntity<>(existingTour, HttpStatus.OK);
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

    @PatchMapping("/{id}")
    public ResponseEntity<Tour> updateBookings(@RequestBody Tour updatedTour, @PathVariable Integer id) {
        try {
            Tour existingTour = service.get(id);
            existingTour.setBookings(updatedTour.getBookings());

            service.save(existingTour);
            return new ResponseEntity<>(existingTour, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
