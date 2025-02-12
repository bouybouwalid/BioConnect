package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.entity.User;
import com.bioconnect.bioconnect.repository.AssociationRepository;
import com.bioconnect.bioconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class AssociationService {

    @Autowired
    private AssociationRepository associationRepository;

    @Autowired
    private UserRepository userRepository;

    // Méthode existante modifiée
    public Association createAssociation(
            Long userId,
            String nom,
            String lieu,
            String description,
            BigDecimal latitude,
            BigDecimal longitude) {
        
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("Utilisateur non trouvé");
        }

        Association association = new Association();
        association.setNom(nom);
        association.setLieu(lieu);
        association.setDescription(description);
        association.setLatitude(latitude);
        association.setLongitude(longitude);
        association.setCreateur(userOptional.get());

        return associationRepository.save(association);
    }

    // Méthode update modifiée
    public Association updateAssociation(
            Long id,
            String nom,
            String lieu,
            String description,
            BigDecimal latitude,
            BigDecimal longitude) {
        
        return associationRepository.findById(id)
                .map(existing -> {
                    existing.setNom(nom);
                    existing.setLieu(lieu);
                    existing.setDescription(description);
                    existing.setLatitude(latitude);
                    existing.setLongitude(longitude);
                    return associationRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Association non trouvée"));
    }

    // Les autres méthodes restent inchangées
    public List<Association> getAllAssociations() {
        return associationRepository.findAll();
    }

    public List<Association> getAssociationsByCreateur(Long userId) {
        return associationRepository.findByCreateurId(userId);
    }

    public Association getAssociationById(Long id) {
        return associationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Association non trouvée"));
    }

    public void deleteAssociation(Long id) {
        associationRepository.deleteById(id);
    }
}