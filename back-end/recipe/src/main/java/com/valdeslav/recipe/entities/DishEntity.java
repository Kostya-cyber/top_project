package com.valdeslav.recipe.entities;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity(name="dish")
@Table(name="dish")
public class DishEntity extends BaseEntity<Integer>{
    @Column
    private String name;

    @OneToMany(mappedBy = "dish")
    private List<IngridientEntity> ingridients;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<IngridientEntity> getIngridients() {
        return ingridients;
    }

    public void setIngridients(List<IngridientEntity> ingridients) {
        this.ingridients = ingridients;
    }
}
