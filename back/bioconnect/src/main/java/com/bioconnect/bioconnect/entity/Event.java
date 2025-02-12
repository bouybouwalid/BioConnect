package com.bioconnect.bioconnect.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate date;
    private String address;

@ManyToOne
@JoinColumn(name = "association_id", nullable = false)
@JsonBackReference
private Association association;


    // Constructeurs
    public Event() {}

    public Event(String title, String description, LocalDate date, String address, Association association) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.address = address;
        this.association = association;
    }

    // Getters et Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public Association getAssociation() { return association; }
    public void setAssociation(Association association) { this.association = association; }
}
