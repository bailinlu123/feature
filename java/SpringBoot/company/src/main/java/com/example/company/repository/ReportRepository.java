package com.example.company.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.company.entity.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {

	public List<Report> findByYearAndMonthAndUserId(String year, String month,Long userId);

	public List<Report> findByUserIdOrderByMonthDesc(Long userId);
}
