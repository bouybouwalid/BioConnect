package com.bioconnect.bioconnect.controller;

import com.bioconnect.bioconnect.entity.Event;
import com.bioconnect.bioconnect.entity.Association;
import com.bioconnect.bioconnect.repository.EventRepository;
import com.bioconnect.bioconnect.repository.AssociationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private AssociationRepository associationRepository;

    // ✅ Créer un nouvel événement
    @PostMapping("/create/{associationId}")
    public Event createEvent(@PathVariable Long associationId, @RequestBody Event event) {
        Optional<Association> association = associationRepository.findById(associationId);
        if (association.isPresent()) {
            event.setAssociation(association.get());
            return eventRepository.save(event);
        } else {
            throw new RuntimeException("Association not found with id " + associationId);
        }
    }

    // ✅ Récupérer tous les événements
    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // ✅ Récupérer un événement par ID
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id " + id));
    }

    // ✅ Récupérer les événements d'une association spécifique
    @GetMapping("/association/{associationId}")
    public List<Event> getEventsByAssociation(@PathVariable Long associationId) {
        return eventRepository.findByAssociationId(associationId);
    }

    // ✅ Mettre à jour un événement
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id " + id));

        existingEvent.setTitle(eventDetails.getTitle());
        existingEvent.setDescription(eventDetails.getDescription());
        existingEvent.setDate(eventDetails.getDate());
        existingEvent.setAddress(eventDetails.getAddress());

        return eventRepository.save(existingEvent);
    }

    // ✅ Supprimer un événement
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {
        eventRepository.deleteById(id);
        return "Event with id " + id + " has been deleted!";
    }
}
