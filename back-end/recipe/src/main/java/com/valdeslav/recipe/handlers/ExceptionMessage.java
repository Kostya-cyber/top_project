package com.valdeslav.recipe.handlers;

public class ExceptionMessage {
    private String message;

    public ExceptionMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
