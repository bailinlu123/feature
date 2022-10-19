package com.example.company.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entity.Product;
import com.example.company.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository productRepository;

	public void save(Product product) {
		productRepository.save(product);
    }

	public void deleteById(Long id) {
		productRepository.deleteById(id);;
    }

	public List<Product> findAll() {
		return productRepository.findAll();
    }

	public Product findById(Long id) {
		return productRepository.findById(id).get();
    }

	public List<Product> findByType(String type) {
		return productRepository.findByType(type);
    }
}
