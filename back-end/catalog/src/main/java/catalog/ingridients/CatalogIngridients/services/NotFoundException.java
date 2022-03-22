package catalog.ingridients.CatalogIngridients.services;

public class NotFoundException extends RuntimeException{
    public NotFoundException(Integer id) {
        super("could not find entity " + id);
    }

    public NotFoundException(String message) {
        super(message);
    }
}
