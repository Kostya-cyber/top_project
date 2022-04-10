package catalog.ingridients.CatalogIngridients.services.impl;

import catalog.ingridients.CatalogIngridients.entities.IngridientEntity;
import catalog.ingridients.CatalogIngridients.services.IngridientService;
import catalog.ingridients.CatalogIngridients.services.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import catalog.ingridients.CatalogIngridients.repository.IngridientRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class IngridientServiceImpl implements IngridientService {
    @Autowired
    private IngridientRepository repository;

    @Override
    public void create(IngridientEntity ingridient) throws ServiceException {
            repository.save(ingridient);
    }

    @Override
    public void update(IngridientEntity ingridient) throws IngridientNotFoundException {
        Optional<IngridientEntity> savedIngridientOpt = repository.findById(ingridient.getId());
        if (savedIngridientOpt.isPresent()){
            IngridientEntity savedIngridient = savedIngridientOpt.get();
            savedIngridient.setName(ingridient.getName());
            savedIngridient.setCalories(ingridient.getCalories());
            savedIngridient.setCarbs(ingridient.getCarbs());
            savedIngridient.setFats(ingridient.getFats());
            savedIngridient.setProtein(ingridient.getProtein());
            savedIngridient.setCost(ingridient.getCost());
            savedIngridient.setQuantity(ingridient.getQuantity());
            repository.save(savedIngridient);
        } else {
            throw new IngridientNotFoundException(ingridient.getId());
        }
    }

    @Transactional
    public IngridientEntity findById(Integer id) throws IngridientNotFoundException {
        Optional<IngridientEntity> ingridientOptional = repository.findById(id);
        if (ingridientOptional.isPresent()) {
            return ingridientOptional.get();
        } else {
            throw new IngridientNotFoundException(id);
        }
    }

    @Transactional
    public Iterable<IngridientEntity> findAll() {
        return repository.findAll();
    }

    @Transactional
    public void deleteById(Integer id) {
        try {
            repository.deleteById(id);
        } catch (Exception e) {
            // Не уведомляем о том, что нечего удалять
        }
    }

    @Transactional
    public void delete(IngridientEntity ingridient) {
        repository.delete(ingridient);
    }
}
