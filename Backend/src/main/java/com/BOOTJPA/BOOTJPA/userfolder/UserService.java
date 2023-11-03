package com.BOOTJPA.BOOTJPA.userfolder;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service

public class UserService {
	 @Autowired
	    private SignupRepository repo;
	 
	    public List<User> listAll() {
	        
	        return  (List<User>) repo.findAll();
	    }
	 
	 public void save(User user) {
	        repo.save(user);
	    }
	 
	  public User findByEmail(String email) {
	        return repo.findByEmail(email);
	    }
	     

}