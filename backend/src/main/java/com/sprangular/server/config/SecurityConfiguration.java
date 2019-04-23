package com.sprangular.server.config;

import com.sprangular.server.service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    
    @Autowired
    private DetailsService detailsService;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        String[] pathsToPermitAll = new String[]{"/**"};
        
        http.csrf().disable()
                .authorizeRequests().antMatchers(pathsToPermitAll).permitAll()
                .and()
                .authorizeRequests().antMatchers("/api/**").authenticated()
                .and()
                .httpBasic();
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(detailsService).passwordEncoder(NoOpPasswordEncoder.getInstance());
    }
}
