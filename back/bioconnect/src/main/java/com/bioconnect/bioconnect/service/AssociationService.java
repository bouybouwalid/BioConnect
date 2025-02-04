package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.entity.User;
import com.bioconnect.bioconnect.repository.AssociationRepository;
import com.bioconnect.bioconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AssociationService {

    @Autowired
    private AssociationRepository associationRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Association> getAllAssociations() {
        return associationRepository.findAll();
    }

    public List<Association> getAssociationsByCreateur(Long userId) {
        return associationRepository.findByCreateurId(userId);
    }
    public Association getAssociationById(Long id) {
        return associationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Association non trouvée avec l'ID : " + id));
    }
    
    public Association createAssociation(Long userId, Association association) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            association.setCreateur(userOptional.get());
            return associationRepository.save(association);
        } else {
            throw new RuntimeException("Utilisateur non trouvé");
        }
    }

    public Association updateAssociation(Long id, Association newAssociation) {
        return associationRepository.findById(id)
                .map(existingAssociation -> {
                    existingAssociation.setNom(newAssociation.getNom());
                    existingAssociation.setLieu(newAssociation.getLieu());
                    existingAssociation.setDescription(newAssociation.getDescription());
                    return associationRepository.save(existingAssociation);
                }).orElseThrow(() -> new RuntimeException("Association non trouvée"));
    }

    public void deleteAssociation(Long id) {
        associationRepository.deleteById(id);
    }
}
