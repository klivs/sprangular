package com.sprangular.server.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionHandlerController {
    
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = {
            NotFoundException.class,
    })
    public String notFound(Exception e) {
        log.warn("[notFound] message:" + e.getMessage());
        return e.getMessage();
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = {
            UsernameAlreadyExistException.class,
    })
    public String badRequest(Exception e) {
        log.warn("[badRequest] message:" + e.getMessage());
        return e.getMessage();
    }
    
    
}
