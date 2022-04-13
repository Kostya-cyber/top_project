package com.valdeslav.recipe.controller;

import com.valdeslav.recipe.controller.wrapper.AnswerWrapper;
import com.valdeslav.recipe.entities.Dish;
import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.services.NotFoundException;
import com.valdeslav.recipe.services.impl.DishServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("dishes")
public class DishController {
    @Autowired
    private DishServiceImpl service;

    // метод упаковывающий в обертку
    private <T> AnswerWrapper<T> wrap(T value) {
        return new AnswerWrapper<>(value);
    }

    @GetMapping("/{id}")
    public AnswerWrapper<Dish> getDish(@PathVariable Integer id) throws NotFoundException {
        return wrap(service.findById(id));
    }
}
