package com.example.company.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.company.entity.User;
import com.example.company.web.dto.UserRegistrationDto;

public interface UserService extends UserDetailsService {

    User findByEmail(String email);

    User save(UserRegistrationDto registration);
}
