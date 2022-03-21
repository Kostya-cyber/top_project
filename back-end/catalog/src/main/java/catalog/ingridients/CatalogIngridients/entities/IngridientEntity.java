package catalog.ingridients.CatalogIngridients.entities;

import javax.persistence.*;

@Entity(name="ingridient")
@Table(name="ingridient")
public class IngridientEntity extends BaseEntity<Integer>{
    @Column
    private String name;
    private int calories;
    private int protein;
    private int fats;
    private int carbs;

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
}
