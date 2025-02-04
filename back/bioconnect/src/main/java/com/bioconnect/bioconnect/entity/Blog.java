package com.bioconnect.bioconnect.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(nullable = false, length = 5000)
    private String contenu;

    @Column(nullable = false)
    private String auteur;

    @Temporal(TemporalType.TIMESTAMP)
    private Date datePublication;

    public Blog() {
    }

    public Blog(String titre, String contenu, String auteur, Date datePublication) {
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
        this.datePublication = datePublication;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public Date getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(Date datePublication) {
        this.datePublication = datePublication;
    }
}
