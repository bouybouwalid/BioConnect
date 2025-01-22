package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Vous pouvez ajouter ici des requêtes personnalisées si nécessaire
}