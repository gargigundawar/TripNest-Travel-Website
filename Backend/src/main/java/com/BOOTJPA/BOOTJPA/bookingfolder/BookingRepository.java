package com.BOOTJPA.BOOTJPA.bookingfolder;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Integer> {
	 List<Booking> findByTourid(Integer tourid);

}