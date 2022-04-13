package com.valdeslav.recipe.services;

public class NotFoundException extends Exception{
    public NotFoundException(Integer id) {
        super("could not find entity " + id);
    }

    public NotFoundException(String message) {
        super(message);
    }
}
