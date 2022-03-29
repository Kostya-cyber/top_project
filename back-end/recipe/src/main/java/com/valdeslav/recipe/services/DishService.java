package com.valdeslav.recipe.services;

import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.entities.IngridientEntity;
import com.valdeslav.recipe.services.impl.DishNotFoundException;

import java.util.List;

public interface DishService extends Service<DishEntity, Integer>{
    void create(DishEntity entity) throws ServiceException;
    void update(DishEntity entity) throws DishNotFoundException;
    DishEntity findById(Integer id) throws DishNotFoundException;
    List<IngridientEntity> getDishIngridients(Integer dishId);
    Iterable<DishEntity> findAll();
    void delete(DishEntity entity);
    void deleteById(Integer id);
}
