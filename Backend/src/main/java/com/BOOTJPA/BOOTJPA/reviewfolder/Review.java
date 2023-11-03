package com.BOOTJPA.BOOTJPA.reviewfolder;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Review {

    private Integer id;
    private String destination;
    private String feedback;
    private String date;
    private Integer rating; // New field for rating

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Review() {
    }

    public Review(Integer id, String destination, String feedback, String date, Integer rating) {
        this.id = id;
        this.destination = destination;
        this.feedback = feedback;
        this.date = date;
        this.rating = rating; // Initialize the new rating field
    }
}
