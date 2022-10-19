package com.example.company.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.company.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	public List<Product> findByType(String type);
}
