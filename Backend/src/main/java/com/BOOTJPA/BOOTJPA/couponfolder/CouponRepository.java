package com.BOOTJPA.BOOTJPA.couponfolder;



import org.springframework.data.repository.CrudRepository;

import com.BOOTJPA.BOOTJPA.mainfolder.Product;
//CrudRepository is a Spring Data interface for generic 
//CRUD operations on a repository of a specific type. 
//It provides several methods out of the box for interacting with a database.
public interface CouponRepository extends CrudRepository<Coupon, Integer> {

}
