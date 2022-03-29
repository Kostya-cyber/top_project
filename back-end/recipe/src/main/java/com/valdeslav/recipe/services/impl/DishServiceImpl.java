package com.valdeslav.recipe.services.impl;

import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.entities.IngridientEntity;
import com.valdeslav.recipe.repository.DishRepository;
import com.valdeslav.recipe.services.DishService;
import com.valdeslav.recipe.services.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishServiceImpl implements DishService {
    @Autowired
    private DishRepository repository;

    @Override
    public void create(DishEntity dish) throws ServiceException {
        repository.save(dish);
    }

    @Override
    public void update(DishEntity dish) throws DishNotFoundException{
        Optional<DishEntity> savedDish = repository.findById(dish.getId());
        if (savedDish.isPresent()) {

        } else {
            throw new DishNotFoundException(dish.getId());
        }
    }

    @Override
    public DishEntity findById(Integer id) throws DishNotFoundException{
        Optional<DishEntity> dishOptional = repository.findById(id);
        if(dishOptional.isPresent()) {
            return dishOptional.get();
        } else {
            throw new DishNotFoundException(id);
        }
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

    @Override
    public List<IngridientEntity> getDishIngridients(Integer dishId) {
        return null;
    }
}
