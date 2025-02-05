package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Commande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
}
