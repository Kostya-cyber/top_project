package catalog.ingridients.CatalogIngridients.repository;

import catalog.ingridients.CatalogIngridients.entities.IngridientEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngridientRepository extends CrudRepository<IngridientEntity, Integer> {

}
