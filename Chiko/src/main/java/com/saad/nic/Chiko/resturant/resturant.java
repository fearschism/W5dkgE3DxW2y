package com.saad.nic.Chiko.resturant;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.saad.nic.Chiko.menu.menu;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.List;

@Entity
@Table(name = "resturant")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class resturant {

    @Id
    @SequenceGenerator(name = "res_seq", allocationSize = 1,sequenceName = "res_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "res_seq")
    @Column(name = "res_id")
    private long id;

    @JsonProperty("res_name")
    private String resturantName;

    private String image;

    private String type;

    private double lon;
    private double lat;

    @OneToMany(mappedBy="resturant",cascade = CascadeType.ALL)
    private List<menu> Menu;

    public String getImage() {
        return image;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public String getResturantName() {
        return resturantName;
    }

    public double getLon() {
        return lon;
    }

    public double getLat() {
        return lat;
    }

    public List<menu> getMenu() {
        return Menu;
    }

    public void setMenu(List<menu> menu) {
        Menu = menu;
    }
}

