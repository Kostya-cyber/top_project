package catalog.ingridients.CatalogIngridients.controller;


import catalog.ingridients.CatalogIngridients.controller.wrapper.AnswerWrapper;
import catalog.ingridients.CatalogIngridients.controller.wrapper.EmptyValue;
import catalog.ingridients.CatalogIngridients.entities.IngridientEntity;
import catalog.ingridients.CatalogIngridients.services.NotFoundException;
import catalog.ingridients.CatalogIngridients.services.ServiceException;
import catalog.ingridients.CatalogIngridients.services.impl.IngridientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.UnexpectedRollbackException;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/ingridients")
public class IngridientController {
    @Autowired
    private IngridientServiceImpl service;

    // метод упаковывающий в обертку
    private <T> AnswerWrapper<T> wrap(T value){
        return new AnswerWrapper<>(value);
    }

    @GetMapping("")
    public AnswerWrapper<Iterable<IngridientEntity>> getIngridients() {
        return wrap(service.findAll());
    }

    @GetMapping("/{id}")
    public AnswerWrapper<IngridientEntity> getIngridient(@PathVariable Integer id) throws NotFoundException {
        return wrap(service.findById(id));
    }

    @PostMapping("")
    public AnswerWrapper<EmptyValue> createIngridient(@RequestBody IngridientEntity ingridient) throws ServiceException {
        service.create(ingridient);
        return wrap(new EmptyValue());
    }

    @PutMapping("/{id}")
    public AnswerWrapper<EmptyValue> updateIngridient(@PathVariable Integer id, @RequestBody IngridientEntity ingridient) {
        IngridientEntity savedIngridient = service.findById(id);
        savedIngridient.setName(ingridient.getName());
        savedIngridient.setCalories(ingridient.getCalories());
        savedIngridient.setCarbs(ingridient.getCarbs());
        savedIngridient.setFats(ingridient.getFats());
        savedIngridient.setProtein(ingridient.getProtein());
        service.update(savedIngridient);
        return wrap(new EmptyValue());
    }

    @DeleteMapping("/{id}")
    public AnswerWrapper<EmptyValue> deleteIngridient(@PathVariable Integer id) {
        try {
            service.deleteById(id);
        } catch (UnexpectedRollbackException e){}
        return wrap(new EmptyValue());
    }

}
