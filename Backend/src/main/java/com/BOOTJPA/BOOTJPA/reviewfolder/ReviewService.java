package com.BOOTJPA.BOOTJPA.reviewfolder;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service

public class ReviewService {
 
    @Autowired
    private ReviewRepository repo;
     
    public List<Review> listAll() {
      
        return  (List<Review>) repo.findAll();
    }
     
    public void save(Review review) {
        repo.save(review);
    }
     
     
    public void delete(Integer id) {
        repo.deleteById(id);
    }
    

}