package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Produit;
import com.bioconnect.bioconnect.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/association/{associationId}")
    public List<Produit> getProduitsByAssociation(@PathVariable Long associationId) {
        return produitService.getProduitsByAssociation(associationId);
    }

    @GetMapping("/categorie/{categorieId}")
    public List<Produit> getProduitsByCategorie(@PathVariable Long categorieId) {
        return produitService.getProduitsByCategorie(categorieId);
    }

    @PostMapping("/create/{associationId}/{categorieId}")
    public Produit createProduit(@PathVariable Long associationId, @PathVariable Long categorieId, @RequestBody Produit produit) {
        return produitService.createProduit(associationId, categorieId, produit);
    }

    @PutMapping("/{id}")
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        return produitService.updateProduit(id, produit);
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }
}
