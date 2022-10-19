package com.example.company.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entity.Contract;
import com.example.company.repository.ContractRepository;

@Service
public class ContractServiceImpl implements ContractService {

	@Autowired
	private ContractRepository contractRepository;

	public void save (Contract contract) {
		contractRepository.save(contract);
	}

	public void deleteById(Long id) {
		contractRepository.deleteById(id);
	}

	public Contract findById(Long id) {
		return contractRepository.findById(id).get();
	}

	public List<Contract> findAll(){
		return contractRepository.findAll();
	}

	public List<Contract> findByResult(String result){
		return contractRepository.findByResult(result);
	}

	public List<Contract> findByAccessable(String accessable){
		return contractRepository.findByAccessable(accessable);
	}
}
