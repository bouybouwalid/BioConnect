package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Commande;
import com.bioconnect.bioconnect.entity.Produit;
import com.bioconnect.bioconnect.entity.User;
import com.bioconnect.bioconnect.repository.CommandeRepository;
import com.bioconnect.bioconnect.repository.UserRepository;
import com.bioconnect.bioconnect.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CommandeService {
    @Autowired
    private CommandeRepository commandeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProduitRepository produitRepository;

    public Commande passerCommande(Long userId, List<Long> produitIds, double montantTotal) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isPresent()) {
            List<Produit> produits = produitRepository.findAllById(produitIds);
            Commande commande = new Commande(userOpt.get(), montantTotal, produits);
            return commandeRepository.save(commande);
        } else {
            throw new RuntimeException("Utilisateur non trouvé");
        }
    }
}
