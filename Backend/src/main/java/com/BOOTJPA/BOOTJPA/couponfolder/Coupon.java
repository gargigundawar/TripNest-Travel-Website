package com.BOOTJPA.BOOTJPA.couponfolder;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Coupon {
	
	private Integer id;
    private String coupon;
    private Integer discount;
    
    public Integer getDiscount() {
		return discount;
	}

	public void setDiscount(Integer discount) {
		this.discount = discount;
	}

	public String getCoupon() {
		return coupon;
	}

	public void setCoupon(String coupon) {
		this.coupon = coupon;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }
	  public Coupon() {
	    }
	
	   public Coupon(Integer id, String coupon, Integer discount) {
	        this.id = id;
	        this.coupon = coupon;
	        this.discount=discount;
	    }

}
