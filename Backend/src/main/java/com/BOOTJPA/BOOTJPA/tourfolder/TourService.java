package com.BOOTJPA.BOOTJPA.tourfolder;
import java.util.List;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service

public class TourService {
 
    @Autowired
    private TourRepository repo;
     
    public List<Tour> listAll() {
      
        return  (List<Tour>) repo.findAll();
    }
     
    public void save(Tour tour) {
        repo.save(tour);
    }
     
    public Tour get(Integer id) {
        return repo.findById(id).get();
    }
     
    public void delete(Integer id) {
        repo.deleteById(id);
    }
}