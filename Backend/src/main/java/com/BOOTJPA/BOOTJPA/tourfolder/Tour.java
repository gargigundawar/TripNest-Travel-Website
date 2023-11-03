package com.BOOTJPA.BOOTJPA.tourfolder;

import jakarta.persistence.*;

@Entity
@Table(name = "Tour")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "destination")
    private String destination;

    @Column(name = "date")
    private String date;

    @Column(name = "price")
    private float price;

    @Column(name = "description")
    private String description;

    @Column(name = "days")
    private int days;

    @Column(name = "url")
    private String url;

    @Column(name = "bookings")
    private int bookings;

    @Column(name = "day1")
    private String day1;

    @Column(name = "description1", columnDefinition = "TEXT")
    private String description1;

    @Column(name = "day2")
    private String day2;

    @Column(name = "description2", columnDefinition = "TEXT")
    private String description2;

    @Column(name = "day3")
    private String day3;

    @Column(name = "description3", columnDefinition = "TEXT")
    private String description3;

    @Column(name = "day4")
    private String day4;

    @Column(name = "description4", columnDefinition = "TEXT")
    private String description4;

    @Column(name = "day5")
    private String day5;

    @Column(name = "description5", columnDefinition = "TEXT")
    private String description5;

    @Column(name = "day6")
    private String day6;

    @Column(name = "description6", columnDefinition = "TEXT")
    private String description6;

    @Column(name = "day7")
    private String day7;

    @Column(name = "description7", columnDefinition = "TEXT")
    private String description7;

    @Column(name = "day8")
    private String day8;

    @Column(name = "description8", columnDefinition = "TEXT")
    private String description8;

    @Column(name = "day9")
    private String day9;

    @Column(name = "description9", columnDefinition = "TEXT")
    private String description9;

    @Column(name = "day10")
    private String day10;

    @Column(name = "description10", columnDefinition = "TEXT")
    private String description10;
    
    @Column(name = "url2")
    private String url2;

    @Column(name = "url3")
    private String url3;

    public Tour() {
    }

    public Tour(Integer id, String name, String destination, String date, float price, String description, int days, String url, int bookings,
                String day1, String description1, String day2, String description2, String day3, String description3,
                String day4, String description4, String day5, String description5, String day6, String description6,
                String day7, String description7, String day8, String description8, String day9, String description9,
                String day10, String description10, String url2, String url3) {
        this.id = id;
        this.name = name;
        this.destination = destination;
        this.date = date;
        this.price = price;
        this.description = description;
        this.days = days;
        this.url = url;
        this.url2 = url2;
        this.url3= url3;
        this.bookings = bookings;
        this.day1 = day1;
        this.description1 = description1;
        this.day2 = day2;
        this.description2 = description2;
        this.day3 = day3;
        this.description3 = description3;
        this.day4 = day4;
        this.description4 = description4;
        this.day5 = day5;
        this.description5 = description5;
        this.day6 = day6;
        this.description6 = description6;
        this.day7 = day7;
        this.description7 = description7;
        this.day8 = day8;
        this.description8 = description8;
        this.day9 = day9;
        this.description9 = description9;
        this.day10 = day10;
        this.description10 = description10;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getDays() {
		return days;
	}

	public void setDays(int days) {
		this.days = days;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getBookings() {
		return bookings;
	}

	public void setBookings(int bookings) {
		this.bookings = bookings;
	}

	public String getDay1() {
		return day1;
	}

	public void setDay1(String day1) {
		this.day1 = day1;
	}

	public String getDescription1() {
		return description1;
	}

	public void setDescription1(String description1) {
		this.description1 = description1;
	}

	public String getDay2() {
		return day2;
	}

	public void setDay2(String day2) {
		this.day2 = day2;
	}

	public String getDescription2() {
		return description2;
	}

	public void setDescription2(String description2) {
		this.description2 = description2;
	}

	public String getDay3() {
		return day3;
	}

	public void setDay3(String day3) {
		this.day3 = day3;
	}

	public String getDescription3() {
		return description3;
	}

	public void setDescription3(String description3) {
		this.description3 = description3;
	}

	public String getDay4() {
		return day4;
	}

	public void setDay4(String day4) {
		this.day4 = day4;
	}

	public String getDescription4() {
		return description4;
	}

	public void setDescription4(String description4) {
		this.description4 = description4;
	}

	public String getDay5() {
		return day5;
	}

	public void setDay5(String day5) {
		this.day5 = day5;
	}

	public String getDescription5() {
		return description5;
	}

	public void setDescription5(String description5) {
		this.description5 = description5;
	}

	public String getDay6() {
		return day6;
	}

	public void setDay6(String day6) {
		this.day6 = day6;
	}

	public String getDescription6() {
		return description6;
	}

	public void setDescription6(String description6) {
		this.description6 = description6;
	}

	public String getDay7() {
		return day7;
	}

	public void setDay7(String day7) {
		this.day7 = day7;
	}

	public String getDescription7() {
		return description7;
	}

	public void setDescription7(String description7) {
		this.description7 = description7;
	}

	public String getDay8() {
		return day8;
	}

	public void setDay8(String day8) {
		this.day8 = day8;
	}

	public String getDescription8() {
		return description8;
	}

	public void setDescription8(String description8) {
		this.description8 = description8;
	}

	public String getDay9() {
		return day9;
	}

	public void setDay9(String day9) {
		this.day9 = day9;
	}

	public String getDescription9() {
		return description9;
	}

	public void setDescription9(String description9) {
		this.description9 = description9;
	}

	public String getDay10() {
		return day10;
	}

	public void setDay10(String day10) {
		this.day10 = day10;
	}

	public String getDescription10() {
		return description10;
	}

	public void setDescription10(String description10) {
		this.description10 = description10;
	}
	
	   public String getUrl2() {
	        return url2;
	    }

	    public void setUrl2(String url2) {
	        this.url2 = url2;
	    }

	    public String getUrl3() {
	        return url3;
	    }

	    public void setUrl3(String url3) {
	        this.url3 = url3;
	    }

    // Getters and setters for each field...

    // Additional methods as needed...
}
