package com.example.company.web.dto;

import javax.validation.constraints.NotEmpty;

public class DailyReportDto {
	@NotEmpty
	private Long id;

	@NotEmpty
	private String email;

	@NotEmpty
	private String year;

	@NotEmpty
	private String month;

	@NotEmpty
	private String status;

	@NotEmpty
	private String totalDays;

	@NotEmpty
	private String weekdays;

	@NotEmpty
	private String holidays;

	@NotEmpty
	private String vacation;

	@NotEmpty
	private String totalWorkingHours;

	@NotEmpty
	private String basicCommutingHours;

	@NotEmpty
	private String overtimeHours;

	@NotEmpty
	private String workTime;

	public String getWorkTime() {
		return workTime;
	}

	public void setWorkTime(String workTime) {
		this.workTime = workTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
