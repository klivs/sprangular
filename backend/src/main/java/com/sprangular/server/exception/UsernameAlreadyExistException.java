package com.sprangular.server.exception;

public class UsernameAlreadyExistException extends RuntimeException {
    public UsernameAlreadyExistException(String username) {
        super(username);
    }
}
