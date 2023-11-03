package com.BOOTJPA.BOOTJPA.bucketlist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BucketRepository extends JpaRepository<Bucket, Integer> {
}