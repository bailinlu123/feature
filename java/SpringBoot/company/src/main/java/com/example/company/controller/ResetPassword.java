package com.example.company.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.company.config.SecurityConfiguration;
import com.example.company.entity.User;
import com.example.company.service.UserServiceImpl;
import com.example.company.web.dto.UserRegistrationDto;

@Controller
@RequestMapping("/resetPassword")
public class ResetPassword {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private SecurityConfiguration security;

    @ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }

    @GetMapping
	public String showResetPassword(Model model) {
		return "resetPassword";
	}

    @PutMapping
    public String updatePassword(@ModelAttribute("user") @Valid UserRegistrationDto userDto, BindingResult result) {

    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

    	String username;
    	if (principal instanceof UserDetails) {
    		username = ((UserDetails)principal).getUsername();
    	} else {
    	   username = principal.toString();
    	}

    	User user = userService.findByEmail(username);

    	if (user == null){
            result.rejectValue(null, null, "There is no this user. Email:" + userDto.getEmail() );
            return "resetPassword";
        }

    	if(!security.passwordEncoder().matches(userDto.getOldPassword(), user.getPassword())){
    		result.rejectValue("oldPassword", null, "The old password is wrong." );
    	}

    	if(!userDto.getPassword().equals(userDto.getConfirmPassword()))
    	{
    		result.rejectValue("confirmPassword", null, "Confirm new password is different with New password." );
    	}

    	if(result.hasErrors()) {
    		return "resetPassword";
    	}

    	String passsword = security.passwordEncoder().encode(userDto.getPassword());
    	user.setPassword(passsword);

    	userService.save(user);

    	return "redirect:/resetPassword?success";
    }

}
