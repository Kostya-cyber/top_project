package com.valdeslav.recipe.services.impl;

import com.valdeslav.recipe.entities.Dish;
import com.valdeslav.recipe.entities.DishEntity;
import com.valdeslav.recipe.entities.Ingridient;
import com.valdeslav.recipe.entities.IngridientEntity;
import com.valdeslav.recipe.repository.DishRepository;
import com.valdeslav.recipe.services.DishService;
import com.valdeslav.recipe.services.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DishServiceImpl implements DishService {
    @Autowired
    private DishRepository repository;

    @Override
    public void create(Dish dish) throws ServiceException {
        //repository.save(dish);
    }

    @Override
    public void update(Dish dish) throws DishNotFoundException{
//        Optional<DishEntity> savedDish = repository.findById(dish.getId());
//        if (savedDish.isPresent()) {
//
//        } else {
//            throw new DishNotFoundException(dish.getId());
//        }
    }

    @Override
    public Dish findById(Integer id) throws DishNotFoundException{
        Optional<DishEntity> dishOptional = repository.findById(id);
        if(dishOptional.isPresent()) {
            RestTemplate restTemplate = new RestTemplate();
            DishEntity dishEntity = dishOptional.get();
            List<IngridientEntity> ingridientEntities = dishEntity.getIngridients();

            List<Ingridient> ingridients = new ArrayList<>();
            for (IngridientEntity entity: ingridientEntities) {
                Ingridient ingridient = restTemplate.getForObject("http://localhost:8081/catalog/ingridients/" + entity.getProduct_id(),
                                                                        Ingridient.class);
                ingridient.setWeight_gr(entity.getWeight_gr());
                ingridients.add(ingridient);
            }
            Dish dish = new Dish(dishEntity.getName(), ingridients);
            return dish;
        } else {
            throw new DishNotFoundException(id);
        }
    }

    @Override
    public Iterable<Dish> findAll() {
        return null;
    }

    @Override
    public void delete(Dish entity) {

    }

    @Override
    public void deleteById(Integer id) {

    }

    @Override
    public List<IngridientEntity> getDishIngridients(Integer dishId) {
        return null;
    }
}
