package com.example.company.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private long userId;
    private String email;
    private String year;
    private String month;
    private String totalDays;
    private String weekdays;
    private String holidays;
    private String vacation;
    private String totalWorkingHours;
    private String basicCommutingHours;
    private String overtimeHours;
    private String status;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getTotalDays() {
		return totalDays;
	}
	public void setTotalDays(String totalDays) {
		this.totalDays = totalDays;
	}
	public String getWeekdays() {
		return weekdays;
	}
	public void setWeekdays(String weekdays) {
		this.weekdays = weekdays;
	}
	public String getHolidays() {
		return holidays;
	}
	public void setHolidays(String holidays) {
		this.holidays = holidays;
	}
	public String getVacation() {
		return vacation;
	}
	public void setVacation(String vacation) {
		this.vacation = vacation;
	}
	public String getTotalWorkingHours() {
		return totalWorkingHours;
	}
	public void setTotalWorkingHours(String totalWorkingHours) {
		this.totalWorkingHours = totalWorkingHours;
	}
	public String getBasicCommutingHours() {
		return basicCommutingHours;
	}
	public void setBasicCommutingHours(String basicCommutingHours) {
		this.basicCommutingHours = basicCommutingHours;
	}
	public String getOvertimeHours() {
		return overtimeHours;
	}
	public void setOvertimeHours(String overtimeHours) {
		this.overtimeHours = overtimeHours;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
