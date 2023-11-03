package com.BOOTJPA.BOOTJPA.userfolder;

import jakarta.persistence.*;

@Entity
@Table(name = "user") // Use a different table name if needed
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;

    private String password;

    private String role; // Changed from confirm_password to role

    public User() {
    }

    public User(String email, String password, String role) { // Changed from confirm_password to role
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Getters and setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() { // Changed from getConfirmPassword to getRole
        return role;
    }

    public void setRole(String role) { // Changed from setConfirmPassword to setRole
        this.role = role;
    }
}