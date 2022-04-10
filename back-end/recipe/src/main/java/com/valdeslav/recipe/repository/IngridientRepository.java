package com.valdeslav.recipe.repository;

import com.valdeslav.recipe.entities.IngridientEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngridientRepository extends CrudRepository<IngridientEntity, Integer> {

}
