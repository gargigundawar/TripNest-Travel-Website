package com.BOOTJPA.BOOTJPA.userfolder;
import org.springframework.data.repository.CrudRepository;


public interface SignupRepository extends CrudRepository<User, Integer>{
	
	  User findByEmail(String email);

}