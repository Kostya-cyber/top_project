package com.valdeslav.recipe.entities;

import javax.persistence.*;
import java.util.Set;

@Entity(name="dish")
@Table(name="dish")
public class DishEntity extends BaseEntity<Integer>{
    @Column
    private String name;
    private int calories;
    private int protein;
    private int fats;
    private int carbs;

    @ManyToMany
    @JoinTable( name="dish_ingridient",
            joinColumns = @JoinColumn(name="dish_id"),
            inverseJoinColumns = @JoinColumn(name="ingridient_id"))
    private Set<IngridientEntity> ingridients;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public int getFats() {
        return fats;
    }

    public void setFats(int fats) {
        this.fats = fats;
    }

    public int getCarbs() {
        return carbs;
    }

    public void setCarbs(int carbs) {
        this.carbs = carbs;
    }

    public Set<IngridientEntity> getIngridients() {
        return ingridients;
    }

    public void setIngridients(Set<IngridientEntity> ingridients) {
        this.ingridients = ingridients;
    }
}
