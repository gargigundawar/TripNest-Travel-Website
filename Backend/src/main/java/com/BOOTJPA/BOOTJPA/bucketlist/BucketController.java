package com.BOOTJPA.BOOTJPA.bucketlist;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bucket")
public class BucketController {

    @Autowired
    private BucketRepository bucketRepository;

    @GetMapping
    public ResponseEntity<List<Bucket>> getAllBuckets() {
        List<Bucket> buckets = bucketRepository.findAll();
        return new ResponseEntity<>(buckets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bucket> getBucketById(@PathVariable Integer id) {
        Optional<Bucket> optionalBucket = bucketRepository.findById(id);
        return optionalBucket.map(bucket -> new ResponseEntity<>(bucket, HttpStatus.OK))
                             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Bucket> createBucket(@RequestBody Bucket bucket) {
        Bucket createdBucket = bucketRepository.save(bucket);
        return new ResponseEntity<>(createdBucket, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBucket(@PathVariable Integer id) {
        Optional<Bucket> optionalBucket = bucketRepository.findById(id);
        if (optionalBucket.isPresent()) {
            bucketRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
