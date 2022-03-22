package catalog.ingridients.CatalogIngridients.handlers;

import catalog.ingridients.CatalogIngridients.controller.wrapper.ErrorWrapper;
import catalog.ingridients.CatalogIngridients.services.impl.IngridientNotFoundException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class IngridientNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(IngridientNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    ErrorWrapper<ExceptionMessage> IngridientNotFoundHandler(IngridientNotFoundException e) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(e.getMessage());
        return new ErrorWrapper<>(exceptionMessage);
    }

}
