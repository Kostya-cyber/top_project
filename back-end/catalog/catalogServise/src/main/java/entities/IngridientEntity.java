package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity(name="ingredient")
@Table(name="ingredient")
public class IngridientEntity extends BaseEntity<Integer>{
    @Column
    private String name;
    private int calories;
    private int protein;
    private int fats;
    private int carbs;

}
