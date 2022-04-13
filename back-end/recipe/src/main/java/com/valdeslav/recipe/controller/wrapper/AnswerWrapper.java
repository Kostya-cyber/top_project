package com.valdeslav.recipe.controller.wrapper;

public class AnswerWrapper<T> {
    private String status = "success";
    private T data;

    public AnswerWrapper(T data) {
        this.data = data;
    }

    public AnswerWrapper(T data, String status){
        this(data);
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
