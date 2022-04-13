package com.valdeslav.recipe.entities;

import java.util.List;

public class Dish {
    private String name;
    private List<Ingridient> ingridients;

    public Dish(String name, List<Ingridient> ingridients) {
        this.name = name;
        this.ingridients = ingridients;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ingridient> getIngridients() {
        return ingridients;
    }

    public void setIngridients(List<Ingridient> ingridients) {
        this.ingridients = ingridients;
    }
}
