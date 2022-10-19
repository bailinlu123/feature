package com.example.company.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.company.entity.Contract;
import com.example.company.entity.User;
import com.example.company.service.ContractServiceImpl;
import com.example.company.service.UserServiceImpl;

@Controller
public class MainController {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private ContractServiceImpl contractService;

	@GetMapping("/")
	public String root(Model model) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}
		User user = userService.findByEmail(username);

		model.addAttribute("userRoles", user.getUserRoles());

		String access = user.getUserRoles().equals("Customer") ? user.getUserRoles() : user.getDepartment();
		List<Contract> review = contractService.findByAccessable(access);
		model.addAttribute("contracts", review);

		return "index";
	}

	@GetMapping("/login")
	public String login(Model model) {
		return "login";
	}

	@GetMapping("/user")
	public String userIndex() {
		return "user/index";
	}
}
