package com.BOOTJPA.BOOTJPA.bucketlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BucketServices {

    @Autowired
    private BucketRepository repo;

    public List<Bucket> listAll() {
        return repo.findAll();
    }

    public void save(Bucket bucket) {
        repo.save(bucket);
    }

    public Bucket get(Integer id) {
        Optional<Bucket> optionalBucket = repo.findById(id);
        return optionalBucket.orElse(null);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}