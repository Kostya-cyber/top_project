package com.valdeslav.recipe.entities;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class BaseEntity<T extends Serializable> {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private T id;

    public T getId() {
        return id;
    }

    public void setId(T id) {
        this.id = id;
    }
}