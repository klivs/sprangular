package com.sprangular.server.repository;

import com.sprangular.server.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
    
    @RestResource(exported = false)
    Optional<User> findByUsername(String username);
    
    @RestResource(exported = false)
    Optional<User> findByUsernameAndPassword(String username, String password);
}
