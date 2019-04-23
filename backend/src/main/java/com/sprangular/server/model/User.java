package com.sprangular.server.model;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

@Table(name = "USERS")
@Entity
@Data
public class User implements UserDetails, Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID uuid;
    
    @Email
    private String username;
    
    private String password;
    
    @NotBlank
    private String firstName;
    
    @NotEmpty
    private String lastName;
    
    private boolean enabled;
    
    private boolean accountNonExpired;
    
    private boolean accountNonLocked;
    
    private boolean credentialsNonExpired;
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("USER");
        Collection collection = new ArrayList();
        collection.add(grantedAuthority);
        return collection;
    }
}
