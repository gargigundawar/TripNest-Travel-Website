package com.BOOTJPA.BOOTJPA.mainfolder;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
//ResponseEntity represents the whole HTTP response: status code, 
//headers, and body. As a result, we can use it to fully configure
//the HTTP response. If we want to use it, we have to return it from the endpoint;
//Spring takes care of the rest. ResponseEntity is a generic type
@CrossOrigin(origins = "http://localhost:3002")
@RestController
public class ProductController {
 
    @Autowired
    private ProductService service;
    
    @GetMapping("/products")
    public List<Product> list() {
        return service.listAll();
    }
//    @GetMapping("/products")
//    public String list(Model model) {
//        List<Product> productList = service.listAll();
//        model.addAttribute("products", productList);
//        return "products"; // return the name of the HTML template/view file
//    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> get(@PathVariable Integer id) {
        try {
            Product product = service.get(id);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }      
    }
    @PostMapping("/products")
    public void add(@RequestBody Product product) {
    	System.out.println("saved ");
    	
        service.save(product);
    }
    @PutMapping("/products/{id}")
    public ResponseEntity<?> update(@RequestBody Product product, @PathVariable Integer id) {
        try {
            Product existProduct = service.get(id);
            service.save(product);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }      
    }
    @DeleteMapping("/products/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}