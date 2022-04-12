package com.valdeslav.recipe.services.impl;

import com.valdeslav.recipe.services.NotFoundException;

public class DishNotFoundException extends NotFoundException {
    public DishNotFoundException(Integer id) {
        super("Could not find dish " + id);
    }
}
