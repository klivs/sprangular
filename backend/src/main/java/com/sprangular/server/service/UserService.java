package com.sprangular.server.service;

import com.sprangular.server.dto.LoginRequestDTO;
import com.sprangular.server.dto.RegistrationRequestDTO;
import com.sprangular.server.dto.UserDTO;
import com.sprangular.server.exception.NotFoundException;
import com.sprangular.server.exception.UsernameAlreadyExistException;
import com.sprangular.server.mapper.UserMapper;
import com.sprangular.server.model.User;
import com.sprangular.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {
    
    private UserRepository userRepository;
    private UserMapper userMapper;
    
    public boolean userExists(String username) {
        return userRepository.findByUsername(username).isPresent();
    }
    
    public UserDTO findByUsernameAndPassword(LoginRequestDTO loginRequestDTO) {
        return userMapper.toDTO(userRepository.findByUsernameAndPassword(loginRequestDTO.getUsername(), loginRequestDTO.getPassword()).orElseThrow(NotFoundException::new));
    }

    public UserDTO register(RegistrationRequestDTO requestDTO) {
        Optional<User> existingUser = userRepository.findByUsername(requestDTO.getUsername());
        if (existingUser.isPresent()) {
            throw new UsernameAlreadyExistException(requestDTO.getUsername());
        }
        User user = new User();
        user.setEnabled(true);
        user.setCredentialsNonExpired(true);
        user.setAccountNonLocked(true);
        user.setAccountNonExpired(true);
        user.setUsername(requestDTO.getUsername());
        user.setPassword(requestDTO.getPassword());
        user.setFirstName(requestDTO.getFirstName());
        user.setLastName(requestDTO.getLastName());
        return userMapper.toDTO(userRepository.save(user));
    }
    
    public List<UserDTO> listUsers() {
        List<UserDTO> list = new ArrayList<>();
        userRepository.findAll().forEach(user -> list.add(userMapper.toDTO(user)));
        log.info("[listUsers] " + list);
        return list;
    }
}
