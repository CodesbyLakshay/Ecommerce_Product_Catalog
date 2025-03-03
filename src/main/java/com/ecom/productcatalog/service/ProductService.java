package com.ecom.productcatalog.service;

import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repostiory.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    private final ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public List<Product> getProductByCategory(Long categoryId){
        return productRepository.findByCategoryId(categoryId);
    }

}
