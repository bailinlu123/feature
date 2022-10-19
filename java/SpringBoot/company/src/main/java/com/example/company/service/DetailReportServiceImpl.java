package com.example.company.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entity.DetailReport;
import com.example.company.repository.DetailReportRepository;

@Service
public class DetailReportServiceImpl implements DetailReportService{

	@Autowired
	DetailReportRepository detailReportRepository;

	public List<DetailReport> findByReportId(Long id) {
		return detailReportRepository.findByReportId(id);
	}

	public List<DetailReport> saveAll(List<DetailReport> detailReports){
		return detailReportRepository.saveAll(detailReports);
	}

}
