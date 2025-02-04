package com.bioconnect.bioconnect.service;

import com.bioconnect.bioconnect.entity.Blog;
import com.bioconnect.bioconnect.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public List<Blog> getBlogsByAuteur(String auteur) {
        return blogRepository.findByAuteur(auteur);
    }

    public Blog getBlogById(Long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
    }

    public Blog createBlog(Blog blog) {
        blog.setDatePublication(new Date());
        return blogRepository.save(blog);
    }

    public Blog updateBlog(Long id, Blog newBlog) {
        return blogRepository.findById(id)
                .map(existingBlog -> {
                    existingBlog.setTitre(newBlog.getTitre());
                    existingBlog.setContenu(newBlog.getContenu());
                    existingBlog.setAuteur(newBlog.getAuteur());
                    return blogRepository.save(existingBlog);
                }).orElseThrow(() -> new RuntimeException("Article non trouvé"));
    }

    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }
}
