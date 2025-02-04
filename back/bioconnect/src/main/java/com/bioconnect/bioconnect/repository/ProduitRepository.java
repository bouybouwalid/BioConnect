package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByAssociationId(Long associationId);
    List<Produit> findByCategorieId(Long categorieId);
}
