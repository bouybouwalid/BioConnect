package com.bioconnect.bioconnect.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "commandes")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private User utilisateur;

    private LocalDate dateCommande;
    private double montantTotal;

    @Enumerated(EnumType.STRING)
    private EtatCommande etat;

    @ManyToMany
    @JoinTable(
        name = "commande_produits",
        joinColumns = @JoinColumn(name = "commande_id"),
        inverseJoinColumns = @JoinColumn(name = "produit_id")
    )
    private List<Produit> produits;

    public Commande() {
        this.dateCommande = LocalDate.now();
        this.etat = EtatCommande.EN_COURS_DE_PREPARATION;
    }

    public Commande(User utilisateur, double montantTotal, List<Produit> produits) {
        this.utilisateur = utilisateur;
        this.dateCommande = LocalDate.now();
        this.montantTotal = montantTotal;
        this.produits = produits;
        this.etat = EtatCommande.EN_COURS_DE_PREPARATION;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUtilisateur() { return utilisateur; }
    public void setUtilisateur(User utilisateur) { this.utilisateur = utilisateur; }

    public LocalDate getDateCommande() { return dateCommande; }

    public double getMontantTotal() { return montantTotal; }
    public void setMontantTotal(double montantTotal) { this.montantTotal = montantTotal; }

    public EtatCommande getEtat() { return etat; }
    public void setEtat(EtatCommande etat) { this.etat = etat; }

    public List<Produit> getProduits() { return produits; }
    public void setProduits(List<Produit> produits) { this.produits = produits; }
}
