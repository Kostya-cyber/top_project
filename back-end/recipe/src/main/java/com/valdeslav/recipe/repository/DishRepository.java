package com.valdeslav.recipe.repository;

import com.valdeslav.recipe.entities.DishEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepository extends CrudRepository<DishEntity, Integer> {
}
