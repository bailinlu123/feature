package com.example.company.web.dto;

import javax.validation.constraints.NotEmpty;

public class ContractDto {

	@NotEmpty
	private Long id;

	@NotEmpty
	private String name;

	@NotEmpty
	private String description;

	@NotEmpty
	private String contactPerson;

	@NotEmpty
	private String contactDepartment;

	@NotEmpty
	private String contactType;

	@NotEmpty
	private String effectiveDate;

	@NotEmpty
	private String expirationDate;

	@NotEmpty
	private String supplier;

	@NotEmpty
	private String commodity;

	@NotEmpty
	private String amount;

	@NotEmpty
	private String totalSum;

	@NotEmpty
	private String status;

	@NotEmpty
	private String result;

	@NotEmpty
	private String reason;

	@NotEmpty
	private String updateUser;

	@NotEmpty
	private String process;

	@NotEmpty
	private String processStyle;

	@NotEmpty
	private String accessable;

	@NotEmpty
	private String loginDepart;

	public String getLoginDepart() {
		return loginDepart;
	}

	public void setLoginDepart(String loginDepart) {
		this.loginDepart = loginDepart;
	}

	public String getProcessStyle() {
		return processStyle;
	}

	public void setProcessStyle(String processStyle) {
		this.processStyle = processStyle;
	}

	public String getAccessable() {
		return accessable;
	}

	public void setAccessable(String accessable) {
		this.accessable = accessable;
	}

	public String getProcess() {
		return process;
	}

	public void setProcess(String process) {
		this.process = process;
	}

	public String getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getContactDepartment() {
		return contactDepartment;
	}

	public void setContactDepartment(String contactDepartment) {
		this.contactDepartment = contactDepartment;
	}

	public String getContactType() {
		return contactType;
	}

	public void setContactType(String contactType) {
		this.contactType = contactType;
	}

	public String getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(String effectiveDate) {
		this.effectiveDate = effectiveDate;
	}

	public String getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(String expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public String getCommodity() {
		return commodity;
	}

	public void setCommodity(String commodity) {
		this.commodity = commodity;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getTotalSum() {
		return totalSum;
	}

	public void setTotalSum(String totalSum) {
		this.totalSum = totalSum;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
}
