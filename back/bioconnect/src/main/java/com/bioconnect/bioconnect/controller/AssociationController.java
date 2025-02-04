package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.service.AssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/associations")
public class AssociationController {

    @Autowired
    private AssociationService associationService;

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

    @PostMapping("/create/{userId}")
    public Association createAssociation(@PathVariable Long userId, @RequestBody Association association) {
        return associationService.createAssociation(userId, association);
    }

    @PutMapping("/{id}")
    public Association updateAssociation(@PathVariable Long id, @RequestBody Association association) {
        return associationService.updateAssociation(id, association);
    }

    @DeleteMapping("/{id}")
    public void deleteAssociation(@PathVariable Long id) {
        associationService.deleteAssociation(id);
    }
}
