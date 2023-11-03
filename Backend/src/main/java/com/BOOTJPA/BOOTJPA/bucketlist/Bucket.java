package com.BOOTJPA.BOOTJPA.bucketlist;
import jakarta.persistence.*;

@Entity
public class Bucket {
    private Integer id;
    private String email;
    private Integer tourId;

    public Bucket() {
    }

    public Bucket(Integer id, String email, Integer tourId) {
        this.id = id;
        this.email = email;
        this.tourId = tourId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Integer getTourId() {
        return tourId;
    }

    public void setTourId(Integer tourId) {
        this.tourId = tourId;
    }
}