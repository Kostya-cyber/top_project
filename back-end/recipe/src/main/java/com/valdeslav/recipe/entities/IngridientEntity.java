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

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getWeight_gr() {
        return weight_gr;
    }

    public void setWeight_gr(int weight_gr) {
        this.weight_gr = weight_gr;
    }

    public DishEntity getDish() {
        return dish;
    }

    public void setDish(DishEntity dish) {
        this.dish = dish;
    }
}
