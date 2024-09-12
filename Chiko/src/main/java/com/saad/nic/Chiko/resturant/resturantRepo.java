package com.saad.nic.Chiko.resturant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface resturantRepo extends JpaRepository<resturant,Long> {

    @Query("SELECT r FROM resturant r WHERE LOWER(r.resturantName) LIKE LOWER(CONCAT('%', :name, '%'))")
    Optional<List<resturant>> searchByResturantName(@Param("name") String name);

    @Query("SELECT r FROM resturant r WHERE LOWER(r.resturantName) LIKE LOWER(CONCAT('%', :name, '%')) AND LOWER(r.type) = LOWER(:type)")
    List<resturant> searchByResturantNameAndType(@Param("name") String name, @Param("type") String type);
}
