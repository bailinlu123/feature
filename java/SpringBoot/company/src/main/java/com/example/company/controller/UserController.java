package com.example.company.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

import com.example.company.config.SecurityConfiguration;
import com.example.company.entity.User;
import com.example.company.service.UserServiceImpl;
import com.example.company.web.dto.UserRegistrationDto;

@Controller
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private SecurityConfiguration security;

	public final static String Manager = "Manager";

	public final static String Staff = "Staff";

	public final static String Customer = "Customer";

	@Value("${default.user.password}")
	private String defaultPass;

	@ModelAttribute("user")
	public UserRegistrationDto userRegistrationDto() {
		return new UserRegistrationDto();
	}

	private UserRegistrationDto changeEntityToDto(User user) {
		UserRegistrationDto userDto = new UserRegistrationDto();
		if (user == null) {
			return userDto;
		}

		userDto.setId(user.getId());
		userDto.setBirthDay(user.getBirthDay());
		userDto.setEmail(user.getEmail());
		userDto.setFirstName(user.getFirstName());
		userDto.setLastName(user.getLastName());
		userDto.setSex(user.getSex());
		userDto.setUserRoles(user.getUserRoles());
		userDto.setDepartment(user.getDepartment());
		return userDto;
	}

	private User changeDtoToEntity(User user, UserRegistrationDto userDto) {
		if (user == null) {
			user = new User();
			user.setId(userDto.getId());
			user.setBirthDay(userDto.getBirthDay());
			user.setEmail(userDto.getEmail());
			user.setFirstName(userDto.getFirstName());
			user.setLastName(userDto.getLastName());
			if (userDto.getUserRoles() != null && !userDto.getUserRoles().isBlank()) {
				user.setUserRoles(userDto.getUserRoles());
			}
			user.setSex(userDto.getSex());
			user.setDepartment(userDto.getDepartment());
			user.setPassword(security.passwordEncoder().encode(userDto.getPassword()));
			return user;
		} else {
			user.setId(userDto.getId());
			user.setBirthDay(userDto.getBirthDay());
			user.setEmail(userDto.getEmail());
			user.setFirstName(userDto.getFirstName());
			user.setLastName(userDto.getLastName());
			if (userDto.getUserRoles() != null && !userDto.getUserRoles().isBlank()) {
				user.setUserRoles(userDto.getUserRoles());
			}
			user.setSex(userDto.getSex());
			user.setDepartment(userDto.getDepartment());
			return user;
		}
	}

	@GetMapping
	public String index(Model model) { // ②
		List<User> users = userService.findAll();
		model.addAttribute("users", users); // ③
		return "users/index"; // ④
	}

	@GetMapping("new")
	public String newUser(Model model) {
		return "users/new";
	}

	@GetMapping("/personalInformation")
	public String getPers(Model model) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}
		User user = userService.findByEmail(username);
		model.addAttribute("user", changeEntityToDto(user));
		return Customer.equals(user.getUserRoles()) ? "customer/show" : "users/show";
	}

	@GetMapping("{id}/edit")
	public String edit(@PathVariable Long id, Model model) { // ⑤
		User user = userService.findById(id);
		model.addAttribute("user", changeEntityToDto(user));
		return Customer.equals(user.getUserRoles()) ? "customer/edit" : "users/edit";
	}

	@GetMapping("{id}/delete")
	public String showDelete(@PathVariable Long id, Model model) { // ⑤
		User user = userService.findById(id);
		model.addAttribute("user", changeEntityToDto(user));
		return Customer.equals(user.getUserRoles()) ? "customer/delete" : "users/delete";
	}

	@GetMapping("{id}/reset")
	public String showReset(@PathVariable Long id, Model model) { // ⑤
		User user = userService.findById(id);
		model.addAttribute("user", changeEntityToDto(user));
		return Customer.equals(user.getUserRoles()) ? "customer/reset" : "users/reset";
	}

	@GetMapping("{id}")
	public String show(@PathVariable Long id, Model model) {
		User user = userService.findById(id);
		model.addAttribute("user", changeEntityToDto(user));
		return Customer.equals(user.getUserRoles()) ? "customer/show" : "users/show";
	}

	@PostMapping
	public String create(@ModelAttribute("user") @Valid UserRegistrationDto userDto, BindingResult result) {

		if (!userDto.getPassword().equals(userDto.getConfirmPassword())) {
			result.rejectValue("email", null, "There is different between password and confirm password");
		}

		User existing = userService.findByEmail(userDto.getEmail());
		if (existing != null) {
			result.rejectValue("email", null, "There is already an account registered with that email");
		}

		if (result.hasErrors()) {
			return "users/new";
		}
		userService.save(changeDtoToEntity(existing, userDto));

		return "redirect:users/new?success"; // ⑦
	}

	@PutMapping("/update/{id}")
	public String update(@PathVariable Long id, @ModelAttribute("user") UserRegistrationDto userDto,
			BindingResult result) {
		User user = userService.findById(id);
		userService.save(changeDtoToEntity(user, userDto));
		return "redirect:/users/" + id.toString();
	}

	@PutMapping("/reset/{id}")
	public String reset(@PathVariable Long id, @ModelAttribute("user") UserRegistrationDto userDto,
			BindingResult result) {
		User user = userService.findById(id);

		String pass = security.passwordEncoder().encode(defaultPass);
		user.setPassword(pass);
		userService.save(user);

		return "redirect:/users";
	}

	@DeleteMapping("{id}")
	public String destroy(@PathVariable Long id) {
		userService.delete(id);
		return "redirect:/users";
	}
}
