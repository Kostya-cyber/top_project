package com.valdeslav.recipe.entities;

import javax.persistence.*;
import java.util.Set;

@Entity(name="ingridient")
@Table(name="ingridient")
public class IngridientEntity extends BaseEntity{
    @ManyToMany(mappedBy = "ingridients")
    private Set<DishEntity> dishes;

    public Set<DishEntity> getDishes() {
        return dishes;
    }

    public void setDishes(Set<DishEntity> dishes) {
        this.dishes = dishes;
    }
}
