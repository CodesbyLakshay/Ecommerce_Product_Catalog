package com.ecom.productcatalog.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String imgUrl;
    private Double price;

    @ManyToOne
    @JoinColumn(name = "category_id" , nullable = false)
    @JsonBackReference
    private Category category;

}
