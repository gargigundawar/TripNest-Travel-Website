package com.BOOTJPA.BOOTJPA.userfolder;
import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.ui.Model; 
import org.springframework.web.bind.annotation.*;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;





//ResponseEntity represents the whole HTTP response: status code, 
//headers, and body. As a result, we can use it to fully configure
//the HTTP response. If we want to use it, we have to return it from the endpoint;
//Spring takes care of the rest. ResponseEntity is a generic type

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SignupController{
	 @Autowired
	    private UserService service;
	 
	   @GetMapping("/user")
	    public List<User> list() {
	        return service.listAll();
	    }
	
    @PostMapping("/user")
    public void add(@RequestBody User user) {
    	System.out.println("saved ");
    	
        service.save(user);
    }
    
    
    @PostMapping("/google-login")
    public ResponseEntity<String> googleLogin(@RequestBody String idTokenString) {
        HttpTransport transport = new NetHttpTransport();
        JsonFactory jsonFactory = new JacksonFactory();

        // Replace YOUR_GOOGLE_CLIENT_ID with your actual Google Client ID
        String googleClientId = "124461824382-o6t6q8o9inb7q8sct45sc8ernoup9bkl.apps.googleusercontent.com";

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                .setAudience(Collections.singletonList(googleClientId))
                .build();

        try {
            GoogleIdToken idToken = verifier.verify(idTokenString);
            if (idToken != null) {
                Payload payload = idToken.getPayload();
                String email = payload.getEmail();

                // Check if the user with this email already exists in the database
                User existingUser = service.findByEmail(email);
                if (existingUser != null) {
                    // User already exists, handle as needed (e.g., log in the user)
                    return ResponseEntity.ok("Google login successful");
                } else {
                    // User does not exist, create a new user with the role "user" for simplicity
                    User newUser = new User(email, "", "user");
                    service.save(newUser);
                    return ResponseEntity.ok("Google login successful - New user registered");
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid ID token");
            }
        } catch (GeneralSecurityException | IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error verifying ID token");
        }
    }
}