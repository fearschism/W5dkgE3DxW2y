package com.saad.nic.Chiko.menu;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import com.saad.nic.Chiko.resturant.resturant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "menu")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class menu {

    @Id
    @SequenceGenerator(name = "menu_seq", allocationSize = 1,sequenceName = "menu_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "menu_seq")
    @Column(name = "menu_id")
    private long id;

    @Column(nullable = false,name = "m_name")
    private String name;
    private String description;
    @Column(nullable = false)
    private double price;
    private String imgUrl;
    @Column(nullable = false)
    private Integer calories;
    @Column(nullable = false)
    private String category;



    @ManyToOne
    @JoinColumn(name="fk_res_id", nullable=false,referencedColumnName = "res_id")
    private resturant resturant;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public Integer getCalories() {
        return calories;
    }

    public String getCategory() {
        return category;
    }



    @JsonIgnore
    public resturant getResturant() {
        return resturant;
    }

    @JsonIgnore
    public void setResturant(resturant resturant) {
        this.resturant = resturant;
    }
}
