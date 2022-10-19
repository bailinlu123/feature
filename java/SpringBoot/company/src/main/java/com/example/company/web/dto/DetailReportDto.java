package com.example.company.web.dto;

import java.util.List;

import javax.validation.constraints.NotEmpty;

public class DetailReportDto {

	@NotEmpty
	private Long id;

	@NotEmpty
	private Long userId;

	@NotEmpty
	public String inputStartTime;

	@NotEmpty
	public String inputEndTime;

	@NotEmpty
	public String inputBreakTime;

	@NotEmpty
	public String breakEndTime;

	@NotEmpty
	public String totalWorkTime;

	@NotEmpty
	public String basicWorkTime;

	@NotEmpty
	public List<ReportDayDto> reporDayDto;

	public String getInputStartTime() {
		return inputStartTime;
	}

	public void setInputStartTime(String inputStartTime) {
		this.inputStartTime = inputStartTime;
	}

	public String getInputEndTime() {
		return inputEndTime;
	}

	public void setInputEndTime(String inputEndTime) {
		this.inputEndTime = inputEndTime;
	}

	public String getBreakEndTime() {
		return breakEndTime;
	}

	public void setBreakEndTime(String breakEndTime) {
		this.breakEndTime = breakEndTime;
	}

	public String getTotalWorkTime() {
		return totalWorkTime;
	}

	public void setTotalWorkTime(String totalWorkTime) {
		this.totalWorkTime = totalWorkTime;
	}

	public String getBasicWorkTime() {
		return basicWorkTime;
	}

	public void setBasicWorkTime(String basicWorkTime) {
		this.basicWorkTime = basicWorkTime;
	}

	public List<ReportDayDto> getReporDayDto() {
		return reporDayDto;
	}

	public void setReporDayDto(List<ReportDayDto> reporDayDto) {
		this.reporDayDto = reporDayDto;
	}

	public String getInputBreakTime() {
		return inputBreakTime;
	}

	public void setInputBreakTime(String inputBreakTime) {
		this.inputBreakTime = inputBreakTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
