package com.sprangular.server.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class UserDTO {
    
    private UUID uuid;
    private String username;
    private String firstName;
    private String lastName;
    
}
