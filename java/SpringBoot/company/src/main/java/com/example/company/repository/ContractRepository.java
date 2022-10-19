package com.example.company.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.company.entity.Contract;

public interface ContractRepository extends JpaRepository<Contract, Long> {

	public List<Contract> findByResult(String result);

	public List<Contract> findByAccessable(String accessable);
}
