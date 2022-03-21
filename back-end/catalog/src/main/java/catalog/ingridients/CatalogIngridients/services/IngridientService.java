package catalog.ingridients.CatalogIngridients.services;

import catalog.ingridients.CatalogIngridients.entities.IngridientEntity;

public interface IngridientService extends Service<IngridientEntity, Integer>{
    void create(IngridientEntity entity) throws ServiceException;
    void update(IngridientEntity entity);
    IngridientEntity findById(Integer id);
    Iterable<IngridientEntity> findAll();
    void delete(IngridientEntity entity);
    void deleteById(Integer id);
}
