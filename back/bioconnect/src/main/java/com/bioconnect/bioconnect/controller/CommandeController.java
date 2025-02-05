package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Commande;
import com.bioconnect.bioconnect.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/commandes")
public class CommandeController {
    @Autowired
    private CommandeService commandeService;

    @PostMapping("/passer")
    public Commande passerCommande(@RequestParam Long userId, @RequestBody List<Long> produitIds, @RequestParam double montantTotal) {
        return commandeService.passerCommande(userId, produitIds, montantTotal);
    }
}
