package com.example.company.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.company.entity.Product;
import com.example.company.service.ProductServiceImpl;
import com.example.company.web.dto.ProductDto;

@Controller
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductServiceImpl productService;

	public final static String type[] = { "1:food", "2:clothing", "3:mechanical", "4:other" };

	private Product changeDtoToEntity(ProductDto dto) {
		Product ent = new Product();
		ent.setDetail(dto.getDetail());
		ent.setEvaluation(dto.getEvaluation());
		ent.setInStock(dto.getInStock());
		ent.setMakeCountry(dto.getMakeCountry());
		ent.setMaker(dto.getMaker());
		ent.setMakeYear(dto.getMakeYear());
		ent.setName(dto.getName());
		ent.setPrice(dto.getPrice());
		ent.setSales(dto.getSales());
		ent.setType(dto.getType());
		ent.setTypeDetail(dto.getTypeDetail());
		return ent;
	}

	private ProductDto changeEntityToDto(Product ent) {
		ProductDto dto = new ProductDto();
		dto.setDetail(ent.getDetail());
		dto.setEvaluation(ent.getEvaluation());
		dto.setId(ent.getId());
		dto.setInStock(ent.getInStock());
		dto.setMakeCountry(ent.getMakeCountry());
		dto.setMaker(ent.getMaker());
		dto.setMakeYear(ent.getMakeYear());
		dto.setName(ent.getName());
		dto.setPrice(ent.getPrice());
		dto.setSales(ent.getSales());
		dto.setType(ent.getType());
		dto.setTypeDetail(ent.getTypeDetail());

		return dto;
	}

	@GetMapping("new")
	public String newProduct(Model model) {
		model.addAttribute("product", new ProductDto());
		return "products/new";
	}

	@GetMapping("{id}")
	public String show(@PathVariable Long id, Model model) {
		Product product = productService.findById(id);
		model.addAttribute("product", changeEntityToDto(product));
		return "products/show";
	}

	@GetMapping
	public String index(Model model) {
		List<Product> product = productService.findAll();
		List<ProductDto> dtos = new ArrayList<ProductDto>();
		if (product != null && product.size() > 0) {
			product.forEach(data -> dtos.add(changeEntityToDto(data)));
		}
		model.addAttribute("products", dtos);

		List<Product> product1 = productService.findByType(type[0]);
		List<ProductDto> dtos1 = new ArrayList<ProductDto>();
		if (product1 != null && product1.size() > 0) {
			product1.forEach(data -> dtos1.add(changeEntityToDto(data)));
		}
		model.addAttribute("products1", dtos1);

		List<Product> product2 = productService.findByType(type[1]);
		List<ProductDto> dtos2 = new ArrayList<ProductDto>();
		if (product2 != null && product2.size() > 0) {
			product2.forEach(data -> dtos2.add(changeEntityToDto(data)));
		}
		model.addAttribute("products2", dtos2);

		List<Product> product3 = productService.findByType(type[2]);
		List<ProductDto> dtos3 = new ArrayList<ProductDto>();
		if (product3 != null && product3.size() > 0) {
			product3.forEach(data -> dtos3.add(changeEntityToDto(data)));
		}
		model.addAttribute("products3", dtos3);

		List<Product> product4 = productService.findByType(type[3]);
		List<ProductDto> dtos4 = new ArrayList<ProductDto>();
		if (product4 != null && product4.size() > 0) {
			product4.forEach(data -> dtos4.add(changeEntityToDto(data)));
		}
		model.addAttribute("products4", dtos4);

		return "products/index";
	}

	@GetMapping("/update/{id}")
	public String getUpdate(@PathVariable Long id, Model model) {
		Product product = productService.findById(id);
		model.addAttribute("product", changeEntityToDto(product));
		return "products/edit";
	}

	@GetMapping("/delete/{id}")
	public String getDelete(@PathVariable Long id, Model model) {
		Product product = productService.findById(id);
		model.addAttribute("product", changeEntityToDto(product));
		return "products/delete";
	}

	@PutMapping("/{id}")
	public String update(@PathVariable Long id, @ModelAttribute("product") ProductDto dto, BindingResult result) {
		Product ent = productService.findById(id);
		ent.setDetail(dto.getDetail());
		ent.setEvaluation(dto.getEvaluation());
		ent.setInStock(dto.getInStock());
		ent.setMakeCountry(dto.getMakeCountry());
		ent.setMaker(dto.getMaker());
		ent.setMakeYear(dto.getMakeYear());
		ent.setName(dto.getName());
		ent.setPrice(dto.getPrice());
		ent.setSales(dto.getSales());
		ent.setType(dto.getType());
		ent.setTypeDetail(dto.getTypeDetail());

		productService.save(ent);
		return "redirect:/products";
	}

	@DeleteMapping("{id}")
	public String delete(@PathVariable Long id) {
		productService.deleteById(id);
		return "redirect:/products";
	}

	@PostMapping
	public String addProduct(@ModelAttribute("product") @Valid ProductDto productDto, BindingResult result) {

		productService.save(changeDtoToEntity(productDto));

		return "redirect:products/new?success";
	}
}
