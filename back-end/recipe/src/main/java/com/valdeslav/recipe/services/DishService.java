package com.valdeslav.recipe.services;

import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.entities.IngridientEntity;

public interface DishService extends Service<DishEntity, Integer>{
    void create(DishEntity entity) throws ServiceException;
    void update(DishEntity entity);
    DishEntity findById(Integer id);
    Iterable<DishEntity> findAll();
    void delete(DishEntity entity);
    void deleteById(Integer id);
}
