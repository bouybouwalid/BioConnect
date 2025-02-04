package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Association;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AssociationRepository extends JpaRepository<Association, Long> {
    List<Association> findByCreateurId(Long createurId);
}
