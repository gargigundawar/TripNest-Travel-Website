package com.BOOTJPA.BOOTJPA.tourfolder;

import org.springframework.data.repository.CrudRepository;
//CrudRepository is a Spring Data interface for generic 
//CRUD operations on a repository of a specific type. 
//It provides several methods out of the box for interacting with a database.
public interface TourRepository extends CrudRepository<Tour, Integer> {

}
