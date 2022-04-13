package com.valdeslav.recipe.services;

import com.valdeslav.recipe.entities.Dish;
import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.entities.IngridientEntity;
import com.valdeslav.recipe.services.impl.DishNotFoundException;

import java.util.List;

public interface DishService extends Service<Dish, Integer>{
    void create(Dish entity) throws ServiceException;
    void update(Dish entity) throws DishNotFoundException;
    Dish findById(Integer id) throws DishNotFoundException;
    List<IngridientEntity> getDishIngridients(Integer dishId);
    Iterable<Dish> findAll();
    void delete(Dish entity);
    void deleteById(Integer id);
}
