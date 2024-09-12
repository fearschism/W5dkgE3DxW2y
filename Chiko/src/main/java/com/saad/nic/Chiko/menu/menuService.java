package com.saad.nic.Chiko.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.saad.nic.Chiko.resturant.resturantRepo;
import com.saad.nic.Chiko.resturant.resturant;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;


@Service
public class menuService {

    @Autowired
    private menuRepo repo;

    @Autowired
    private resturantRepo RP;

    public List<menu> getMenuByIDCategory(long id,String cat) {
        try {
            Optional<List<menu>> data = repo.findByRestaurantIdAndCategory(id, cat);
            return data.map(menus -> (List<menu>) menus).orElseGet(List::of);
        } catch (Exception e) {
            // Otherwise we return an empty List.
            return List.of();
        }
    }

    public List<menu> getMenubyID(long id) {
        return repo.findByRestaurantId(id).orElseGet(List::of);
    }

    public menu saveMenu(long id,menu m) {
       Optional<resturant> data = RP.findById(id);
       if(data.isEmpty()) {
           throw new ResponseStatusException(
                   HttpStatus.NOT_FOUND, "Resturant not found"
           );
       }
       else {

           resturant res = data.get();
           List<menu> menus_list = new ArrayList<>();
           m.setResturant(res);
           menu m1 = repo.save(m);
            menus_list.add(m1);
            res.setMenu(menus_list);

            return m1;
       }
    }


}
