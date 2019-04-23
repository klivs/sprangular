package com.sprangular.server.controller;

import com.sprangular.server.dto.LoginRequestDTO;
import com.sprangular.server.dto.RegistrationRequestDTO;
import com.sprangular.server.dto.UserDTO;
import com.sprangular.server.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static com.sprangular.server.Routes.API;
import static com.sprangular.server.Routes.LOGIN;
import static com.sprangular.server.Routes.REGISTER;
import static com.sprangular.server.Routes.VALIDATE;

@Slf4j
@RestController
@RequestMapping(API)
@AllArgsConstructor
public class DefaultController {
    
    private final UserService userService;
    
    @PostMapping(LOGIN)
    public UserDTO login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userService.findByUsernameAndPassword(loginRequestDTO);
    }
    
    @GetMapping(VALIDATE)
    public boolean validate(Principal principal){
        return userService.userExists(principal.getName());
    }
    
    @PostMapping(REGISTER)
    public UserDTO register(@RequestBody RegistrationRequestDTO registrationDTO) {
        return userService.register(registrationDTO);
    }
}