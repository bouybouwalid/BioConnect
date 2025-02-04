package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
