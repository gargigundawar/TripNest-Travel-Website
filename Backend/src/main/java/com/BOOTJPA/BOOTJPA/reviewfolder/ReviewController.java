package com.BOOTJPA.BOOTJPA.reviewfolder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService service;

    @GetMapping
    public List<Review> list() {
        return service.listAll();
    }


    @PostMapping
    public ResponseEntity<Review> add(@RequestBody Review review) {
        service.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
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