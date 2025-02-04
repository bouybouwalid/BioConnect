package com.bioconnect.bioconnect.repository;

import com.bioconnect.bioconnect.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByAuteur(String auteur);
}
