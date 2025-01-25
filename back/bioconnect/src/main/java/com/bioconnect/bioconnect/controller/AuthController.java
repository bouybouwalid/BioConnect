package com.bioconnect.bioconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bioconnect.bioconnect.service.UserService;
import com.bioconnect.bioconnect.entity.User;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/inscription")
    public ResponseEntity<User> inscription(@RequestBody UserInscriptionRequest request) {
        User newUser = userService.creerUtilisateur(
                request.getNom(),
                request.getPrenom(),
                request.getEmail(),
                request.getTelephone(),
                request.getMotDePasse()
        );
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/connexion")
    public ResponseEntity<String> connexion(@RequestBody UserConnexionRequest request) {
        User user = userService.trouverParEmail(request.getEmail());
        if (user != null) {
            // Ici, vous pouvez comparer le mot de passe encodé avec la méthode passwordEncoder.matches()
            // Selon la logique, renvoyez un token ou un message quelconque
            return ResponseEntity.ok("Connexion réussie !");
        }
        return ResponseEntity.badRequest().body("Échec de la connexion : email ou mot de passe invalide.");
    }
}