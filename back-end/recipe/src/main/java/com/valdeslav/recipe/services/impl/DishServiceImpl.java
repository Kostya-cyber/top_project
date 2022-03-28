package com.valdeslav.recipe.services.impl;

import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.services.DishService;
import com.valdeslav.recipe.services.ServiceException;

public class DishServiceImpl implements DishService {
    @Override
    public void create(DishEntity entity) throws ServiceException {

    }

    @Override
    public void update(DishEntity entity) {

    }

    @Override
    public DishEntity findById(Integer id) {
        return null;
    }

    @Override
    public Iterable<DishEntity> findAll() {
        return null;
    }

    @Override
    public void delete(DishEntity entity) {

    }

    @Override
    public void deleteById(Integer id) {

    }
}
