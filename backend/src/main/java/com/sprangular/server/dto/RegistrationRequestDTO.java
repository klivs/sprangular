package com.sprangular.server.dto;

import lombok.Data;

@Data
public class RegistrationRequestDTO {
    
    String username;
    String password;
    String confirmPassword;
    String firstName;
    String lastName;
}
