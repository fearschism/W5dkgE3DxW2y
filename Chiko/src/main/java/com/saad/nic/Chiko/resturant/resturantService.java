package com.saad.nic.Chiko.resturant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class resturantService {

    //Connecting Resturant Service to Resturant Repository.
    @Autowired
    private resturantRepo repo;

    public List<resturant> getAllResturants() {
        return repo.findAll();

    }

    public List<resturant> getAllResturantsbyID(long res)  {
        Optional<resturant> data = repo.findById(res);
        if(data.isPresent()) {
            return List.of(data.get());
        }
        else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Resturant not found"
            );
        }

    }

    public void saveResturant(resturant res) {
        repo.save(res);
    }


}
