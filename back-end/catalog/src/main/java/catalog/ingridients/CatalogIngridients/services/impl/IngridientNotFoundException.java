package catalog.ingridients.CatalogIngridients.services.impl;

import catalog.ingridients.CatalogIngridients.services.NotFoundException;

public class IngridientNotFoundException extends NotFoundException {
    public IngridientNotFoundException(Integer id) {
        super("Could not find ingridient " + id);
    }
}

