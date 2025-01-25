package com.bioconnect.bioconnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.bioconnect.bioconnect.entity.User;
import com.bioconnect.bioconnect.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User creerUtilisateur(String nom, String prenom, String email, String telephone, String motDePasse) {
        // Vérifier si l'email existe déjà
        if (userRepository.findByEmail(email) != null) {
            throw new RuntimeException("L'email est déjà utilisé.");
        }
        // Créer l'utilisateur et encoder le mot de passe
        User user = new User();
        user.setNom(nom);
        user.setPrenom(prenom);
        user.setEmail(email);
        user.setTelephone(telephone);
        user.setMotDePasse(passwordEncoder.encode(motDePasse));

        return userRepository.save(user);
    }

    public User trouverParEmail(String email) {
        return userRepository.findByEmail(email);
    }
}