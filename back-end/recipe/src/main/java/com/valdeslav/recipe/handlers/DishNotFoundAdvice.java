package com.valdeslav.recipe.handlers;

import com.valdeslav.recipe.controller.wrapper.ErrorWrapper;
import  com.valdeslav.recipe.services.impl.DishNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DishNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(DishNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    ErrorWrapper<ExceptionMessage> DihNotFoundHandler(DishNotFoundException e) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(e.getMessage());
        return new ErrorWrapper<>(exceptionMessage);
    }

}
