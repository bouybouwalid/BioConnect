package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Produit;
import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.entity.Categorie;
import com.bioconnect.bioconnect.repository.ProduitRepository;
import com.bioconnect.bioconnect.repository.AssociationRepository;
import com.bioconnect.bioconnect.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Autowired
    private AssociationRepository associationRepository;

    @Autowired
    private CategorieRepository categorieRepository;

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public List<Produit> getProduitsByAssociation(Long associationId) {
        return produitRepository.findByAssociationId(associationId);
    }

    public List<Produit> getProduitsByCategorie(Long categorieId) {
        return produitRepository.findByCategorieId(categorieId);
    }

    public Produit createProduit(Long associationId, Long categorieId, Produit produit) {
        Optional<Association> associationOptional = associationRepository.findById(associationId);
        Optional<Categorie> categorieOptional = categorieRepository.findById(categorieId);

        if (associationOptional.isPresent() && categorieOptional.isPresent()) {
            produit.setAssociation(associationOptional.get());
            produit.setCategorie(categorieOptional.get());
            return produitRepository.save(produit);
        } else {
            throw new RuntimeException("Association ou catégorie non trouvée");
        }
    }

    public Produit updateProduit(Long id, Produit newProduit) {
        return produitRepository.findById(id)
                .map(existingProduit -> {
                    existingProduit.setNom(newProduit.getNom());
                    existingProduit.setPrix(newProduit.getPrix());
                    existingProduit.setDetails(newProduit.getDetails());
                    return produitRepository.save(existingProduit);
                }).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
    }

    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }
}
