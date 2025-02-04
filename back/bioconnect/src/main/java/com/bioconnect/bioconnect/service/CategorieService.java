package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Categorie;
import com.bioconnect.bioconnect.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieService {

    @Autowired
    private CategorieRepository categorieRepository;

    public List<Categorie> getAllCategories() {
        return categorieRepository.findAll();
    }

    public Categorie getCategorieById(Long id) {
        return categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
    }

    public Categorie getCategorieByNom(String nom) {
        return categorieRepository.findByNom(nom)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
    }

    public Categorie createCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public Categorie updateCategorie(Long id, Categorie newCategorie) {
        return categorieRepository.findById(id)
                .map(existingCategorie -> {
                    existingCategorie.setNom(newCategorie.getNom());
                    return categorieRepository.save(existingCategorie);
                }).orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
    }

    public void deleteCategorie(Long id) {
        categorieRepository.deleteById(id);
    }
}
