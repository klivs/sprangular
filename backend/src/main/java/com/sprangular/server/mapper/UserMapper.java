package com.sprangular.server.mapper;

import com.sprangular.server.dto.UserDTO;
import com.sprangular.server.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    
    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .uuid(user.getUuid())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName()).build();
    }
}
