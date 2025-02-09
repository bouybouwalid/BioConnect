package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.User;
import com.bioconnect.bioconnect.service.JwtService;
import com.bioconnect.bioconnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

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
    public ResponseEntity<Map<String, Object>> connexion(@RequestBody UserConnexionRequest request) {
        User user = userService.trouverParEmail(request.getEmail());
        if (user != null && passwordEncoder.matches(request.getMotDePasse(), user.getMotDePasse())) {
            String token = jwtService.generateToken(user);
            
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("user", Map.of(
                "id", user.getId(),
                "nom", user.getNom(),
                "prenom", user.getPrenom(),
                "email", user.getEmail(),
                "telephone", user.getTelephone() // Ajouter le téléphone dans la réponse
            ));
            
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.badRequest().build();
    }
}