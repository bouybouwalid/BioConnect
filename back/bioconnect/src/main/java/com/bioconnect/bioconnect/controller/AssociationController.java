package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.service.AssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/associations")
public class AssociationController {

    @Autowired
    private AssociationService associationService;

    // Toutes les méthodes existantes conservées
    @GetMapping
    public List<Association> getAllAssociations() {
        return associationService.getAllAssociations();
    }
    
    @GetMapping("/{id}")
    public Association getAssociationById(@PathVariable Long id) {
        return associationService.getAssociationById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Association> getAssociationsByUser(@PathVariable Long userId) {
        return associationService.getAssociationsByCreateur(userId);
    }

    // Méthode modifiée pour inclure les coordonnées
    @PostMapping(value = "/create/{userId}", consumes = "application/json", produces = "application/json")
    public Association createAssociation(
            @PathVariable Long userId,
            @RequestBody AssociationRequest request) {
        return associationService.createAssociation(
                userId,
                request.getNom(),
                request.getLieu(),
                request.getDescription(),
                request.getLatitude(),
                request.getLongitude()
        );
    }

    // Méthode update modifiée
    @PutMapping("/{id}")
    public Association updateAssociation(
            @PathVariable Long id,
            @RequestBody AssociationRequest request) {
        return associationService.updateAssociation(
                id,
                request.getNom(),
                request.getLieu(),
                request.getDescription(),
                request.getLatitude(),
                request.getLongitude()
        );
    }

    @DeleteMapping("/{id}")
    public void deleteAssociation(@PathVariable Long id) {
        associationService.deleteAssociation(id);
    }

    // Classe DTO interne
    private static class AssociationRequest {
        private String nom;
        private String lieu;
        private String description;
        private BigDecimal latitude;
        private BigDecimal longitude;

        // Getters/Setters
        public String getNom() { return nom; }
        public void setNom(String nom) { this.nom = nom; }
        public String getLieu() { return lieu; }
        public void setLieu(String lieu) { this.lieu = lieu; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public BigDecimal getLatitude() { return latitude; }
        public void setLatitude(BigDecimal latitude) { this.latitude = latitude; }
        public BigDecimal getLongitude() { return longitude; }
        public void setLongitude(BigDecimal longitude) { this.longitude = longitude; }
    }
}