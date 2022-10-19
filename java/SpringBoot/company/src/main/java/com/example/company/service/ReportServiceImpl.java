package com.example.company.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entity.Report;
import com.example.company.repository.ReportRepository;

@Service
public class ReportServiceImpl implements ReportService{

    @Autowired
    private ReportRepository reportRepository;

    public List<Report> findAll() {
        return reportRepository.findAll();
    }

    public Report findById(Long id) {
        return reportRepository.findById(id).get();
    }

    public List<Report> findByYearAndMonthAndUserId(String year, String month,Long userId){
    	return reportRepository.findByYearAndMonthAndUserId(year, month, userId);
    }

    public List<Report> findByUserId(Long userId){
    	return reportRepository.findByUserIdOrderByMonthDesc(userId);
    }

    public void Save(Report report) {
    	reportRepository.save(report);
    }
}
