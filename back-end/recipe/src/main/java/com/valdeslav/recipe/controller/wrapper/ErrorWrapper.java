package com.valdeslav.recipe.controller.wrapper;

public class ErrorWrapper<T> {
    private String status = "fail";
    private T message;

    public ErrorWrapper(T message) {
        this.message = message;
    }

    public ErrorWrapper(T message, String status){
        this(message);
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public T getMessage() {
        return message;
    }

    public void setMessage(T message) {
        this.message = message;
    }
}
