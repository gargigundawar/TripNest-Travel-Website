package com.BOOTJPA.BOOTJPA.couponfolder;


import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.BOOTJPA.BOOTJPA.mainfolder.Product;
import com.BOOTJPA.BOOTJPA.mainfolder.ProductService;
//ResponseEntity represents the whole HTTP response: status code, 
//headers, and body. As a result, we can use it to fully configure
//the HTTP response. If we want to use it, we have to return it from the endpoint;
//Spring takes care of the rest. ResponseEntity is a generic type
@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class CouponController {
	
    @Autowired
    private CouponService service;
    
    @GetMapping("/coupon")
    public List<Coupon> list() {
        return service.listAll();
    }
//    @GetMapping("/products")
//    public String list(Model model) {
//        List<Product> productList = service.listAll();
//        model.addAttribute("products", productList);
//        return "products"; // return the name of the HTML template/view file
//    }

    @PostMapping("/coupon")
    public void add(@RequestBody Coupon coupon) {
    	System.out.println("saved ");
    	
        service.save(coupon);
    }

    @DeleteMapping("/coupon/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}
