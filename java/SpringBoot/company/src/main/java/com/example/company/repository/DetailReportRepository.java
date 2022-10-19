package com.example.company.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.company.entity.DetailReport;

public interface DetailReportRepository extends JpaRepository<DetailReport, Long> {

     public List<DetailReport> findByReportId(Long id);

}
