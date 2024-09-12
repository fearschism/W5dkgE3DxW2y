package com.saad.nic.Chiko.menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface menuRepo extends JpaRepository<menu,Long> {
    @Query(value = "SELECT m.* FROM menu m JOIN resturant r ON m.fk_res_id = r.res_id WHERE r.res_id = :restaurantId AND m.category = :category", nativeQuery = true)
    Optional<List<menu>> findByRestaurantIdAndCategory(@Param("restaurantId") long restaurantId, @Param("category") String category);

    @Query(value = "SELECT m.* FROM menu m JOIN resturant r ON m.fk_res_id = r.res_id WHERE r.res_id = :restaurantId;", nativeQuery = true)
    Optional<List<menu>> findByRestaurantId(@Param("restaurantId") long restaurantId);
}
