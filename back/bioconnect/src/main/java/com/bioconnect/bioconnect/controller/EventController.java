package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Event;
import com.bioconnect.bioconnect.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    // Créer un nouvel événement (Create)
    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    // Récupérer tous les événements (Retrieve - GET All)
    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Récupérer un événement par ID (Retrieve - GET One)
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id " + id));
    }

    // Mettre à jour un événement par ID (Update)
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id " + id));
        
        existingEvent.setTitle(eventDetails.getTitle());
        existingEvent.setDetail(eventDetails.getDetail());
        existingEvent.setDate(eventDetails.getDate());

        return eventRepository.save(existingEvent);
    }

    // Supprimer un événement par ID (Delete)
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {
        eventRepository.deleteById(id);
        return "Event with id " + id + " has been deleted!";
    }
}