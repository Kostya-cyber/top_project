package com.valdeslav.recipe.services;

public interface Service<T, ID> {
    void create(T entity) throws ServiceException;
    void update(T entity) throws NotFoundException;
    T findById(ID id) throws NotFoundException;
    Iterable<T> findAll();
    void delete(T entity);
    void deleteById(ID id);
}
