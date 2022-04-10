package com.valdeslav.recipe.entities;

import javax.persistence.*;
import java.util.Set;

@Entity(name="ingridient")
@Table(name="dish_ingridients")
public class IngridientEntity extends BaseEntity<Integer>{
    @Column
    private int product_id;
    private int weight_gr;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dish_id")
    private DishEntity dish;
}
