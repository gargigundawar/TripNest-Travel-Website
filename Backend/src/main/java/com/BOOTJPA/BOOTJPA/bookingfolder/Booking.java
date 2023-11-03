package com.BOOTJPA.BOOTJPA.bookingfolder;



import jakarta.persistence.*;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name1;
    private String name2;
    private String name3;
    private String name4;
    private String name5;
    private String name6;
    private String email;
    private String mobno;
    private String address;
    private String adharno;
    private String room;
    private float totalprice;
    private Integer tourid;
    private Integer guests;
    

    public Booking() {
    }

    public Booking(Integer id, String name1, String name2, String name3, String name4, String name5, String name6,
            String email, String mobno, String address, String adharno, String room, float totalprice, Integer tourid,Integer guests) {
 // update the constructor to include the tourId field
 this.id = id;
 this.name1 = name1;
 this.name2 = name2;
 this.name3 = name3;
 this.name4 = name4;
 this.name5 = name5;
 this.name6 = name6;
 this.email = email;
 this.mobno = mobno;
 this.address = address;
 this.adharno = adharno;
 this.room = room;
 this.totalprice = totalprice;
 this.tourid = tourid;
 this.guests = guests;
}




    // Getters and setters for Booking entity
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName1() {
        return name1;
    }

    public void setName1(String name1) {
        this.name1 = name1;
    }

    public String getName2() {
        return name2;
    }

    public void setName2(String name2) {
        this.name2 = name2;
    }

    public String getName3() {
        return name3;
    }

    public void setName3(String name3) {
        this.name3 = name3;
    }

    public String getName4() {
        return name4;
    }

    public void setName4(String name4) {
        this.name4 = name4;
    }

    public String getName5() {
        return name5;
    }

    public void setName5(String name5) {
        this.name5 = name5;
    }

    public String getName6() {
        return name6;
    }

    public void setName6(String name6) {
        this.name6 = name6;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobno() {
        return mobno;
    }

    public void setMobno(String mobno) {
        this.mobno = mobno;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAdharno() {
        return adharno;
    }

    public void setAdharno(String adharno) {
        this.adharno = adharno;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public float getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(float totalprice) {
        this.totalprice = totalprice;
    }
    
    public Integer getTourid() {
    	 return tourid;
    	}

    	public void setTourid(Integer tourid) {
    	 this.tourid = tourid;
    	}
    	public Integer getGuests() {
            return guests;
        }

        public void setGuests(Integer guests) {
            this.guests = guests;
        }

    // You can add any additional methods or logic specific to Booking
    // ...
}
