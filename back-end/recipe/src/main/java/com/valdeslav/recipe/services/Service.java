package com.valdeslav.recipe.services;

public interface Service<T, ID> {
    void create(T entity) throws ServiceException;
    void update(T entity);
    T findById(ID id);
    Iterable<T> findAll();
    void delete(T entity);
    void deleteById(ID id);
}
