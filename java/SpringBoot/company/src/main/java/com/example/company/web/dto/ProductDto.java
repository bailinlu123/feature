package com.example.company.web.dto;

import javax.validation.constraints.NotEmpty;

public class ProductDto {

	@NotEmpty
	private Long id;

	@NotEmpty
	private String name;

	@NotEmpty
	private String detail;

	@NotEmpty
	private String type;

	@NotEmpty
	private String typeDetail;

	@NotEmpty
	private String sales;

	@NotEmpty
	private String inStock;

	@NotEmpty
	private String image;

	@NotEmpty
	private String evaluation;

	@NotEmpty
	private String price;

	@NotEmpty
	private String maker;

	@NotEmpty
	private String makeCountry;

	@NotEmpty
	private String makeYear;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSales() {
		return sales;
	}

	public void setSales(String sales) {
		this.sales = sales;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getEvaluation() {
		return evaluation;
	}

	public void setEvaluation(String evaluation) {
		this.evaluation = evaluation;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getMaker() {
		return maker;
	}

	public void setMaker(String maker) {
		this.maker = maker;
	}

	public String getMakeCountry() {
		return makeCountry;
	}

	public void setMakeCountry(String makeCountry) {
		this.makeCountry = makeCountry;
	}

	public String getMakeYear() {
		return makeYear;
	}

	public String getTypeDetail() {
		return typeDetail;
	}

	public void setTypeDetail(String typeDetail) {
		this.typeDetail = typeDetail;
	}

	public void setMakeYear(String makeYear) {
		this.makeYear = makeYear;
	}

	public String getInStock() {
		return inStock;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setInStock(String inStock) {
		this.inStock = inStock;
	}
}
