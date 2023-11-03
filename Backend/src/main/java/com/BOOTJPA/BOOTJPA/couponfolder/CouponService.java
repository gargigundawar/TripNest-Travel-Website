package com.BOOTJPA.BOOTJPA.couponfolder;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BOOTJPA.BOOTJPA.mainfolder.Product;
import com.BOOTJPA.BOOTJPA.mainfolder.ProductRepository;



@Service


public class CouponService {
	
	@Autowired
    private CouponRepository repo;
     
    public List<Coupon> listAll() {
      
        return  (List<Coupon>) repo.findAll();
    }
     
    public void save(Coupon coupon) {
        repo.save(coupon);
    }
     
     
    public void delete(Integer id) {
        repo.deleteById(id);
    }

}
