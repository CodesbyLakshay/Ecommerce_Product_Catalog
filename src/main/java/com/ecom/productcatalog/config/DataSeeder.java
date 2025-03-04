package com.ecom.productcatalog.config;


import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repostiory.CategoryRepository;
import com.ecom.productcatalog.repostiory.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    private final CategoryRepository categoryRepository;
    @Override
    public void run(String... args) throws Exception {
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        // Create Categories
        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category home  = new Category();
        home.setName("Home and Kitchen");

        categoryRepository.saveAll(Arrays.asList(electronics,clothing,home));


        // Create Products

        Product phone = new Product();
        phone.setName("Smart Phone");
        phone.setDescription("Latest Model Smart Phone with Amazing Features");
        phone.setImgUrl("https://placehold.co/600x400");
        phone.setPrice(69.69);
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("Laptop");
        laptop.setDescription("High-End performance Laptop");
        laptop.setImgUrl("https://placehold.co/600x400");
        laptop.setPrice(999.99);
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Warm and Cozy Jacket for Winter");
        jacket.setImgUrl("https://placehold.co/600x400");
        jacket.setPrice(129.69);
        jacket.setCategory(clothing);


        Product blender = new Product();
        blender.setName("blender");
        blender.setDescription("Hight Speed Blender for Smoothies and more..");
        blender.setImgUrl("https://placehold.co/600x400");
        blender.setPrice(89.69);
        blender.setCategory(home);

        productRepository.saveAll(Arrays.asList(phone,laptop,jacket,blender));
    }
}
