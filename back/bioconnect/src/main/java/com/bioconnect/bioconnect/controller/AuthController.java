package com.bioconnect.bioconnect.controller;
import com.bioconnect.bioconnect.service.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bioconnect.bioconnect.service.UserService;
import com.bioconnect.bioconnect.entity.User;
@CrossOrigin(origins = "http://localhost:4200")
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
    @Autowired
    private JwtService jwtService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
@PostMapping("/connexion")
public ResponseEntity<Map<String, String>> connexion(@RequestBody UserConnexionRequest request) {
    User user = userService.trouverParEmail(request.getEmail());
    if (user != null && passwordEncoder.matches(request.getMotDePasse(), user.getMotDePasse())) {
        String token = jwtService.generateToken(user);
        
        // Créer un JSON avec le token
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        
        return ResponseEntity.ok(response); // ✅ Retourne un JSON { "token": "eyJhbGciOi..." }
    }
    
    // Retourner une réponse JSON en cas d'échec
    Map<String, String> errorResponse = new HashMap<>();
    errorResponse.put("error", "Échec de la connexion : email ou mot de passe invalide.");
    
    return ResponseEntity.badRequest().body(errorResponse);
}

    
} 