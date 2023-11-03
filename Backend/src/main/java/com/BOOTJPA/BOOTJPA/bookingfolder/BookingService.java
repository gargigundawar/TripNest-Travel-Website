package com.BOOTJPA.BOOTJPA.bookingfolder;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    public List<Booking> listAll() {
        return (List<Booking>) repo.findAll();
    }

    public void save(Booking booking) {
        repo.save(booking);
    }

    public Booking get(Integer id) {
        return repo.findById(id).get();
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }

    public List<Booking> getByTourid(Integer tourid) {
        return repo.findByTourid(tourid);
    }
}
