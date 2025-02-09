package com.bioconnect.bioconnect.controller;

public class UserConnexionRequest {
    private String email;
    private String motDePasse;

    public UserConnexionRequest() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }
}