package com.saad.nic.Chiko.resturant;

import com.saad.nic.Chiko.menu.menu;
import com.saad.nic.Chiko.menu.menuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/v1/cheko/resturant")
public class resturantController {

    private final resturantService service;
    private final menuService menuService_service;

    @Autowired
    public resturantController(resturantService service,menuService menuService_service) {
        this.service = service;
        this.menuService_service = menuService_service;
    }


    @GetMapping
    public List<resturant> getAllResturants() {
        return service.getAllResturants();
    }

    @GetMapping("/{id}")
    public @ResponseBody List<resturant> getAllResturantsbyID(@PathVariable String id) {
        List<resturant> list = service.getAllResturantsbyID(Long.parseLong(id));
        if(list.isEmpty()){
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Resturant not found"
        );}
        return list;
    }

    @PostMapping("/save")
    public boolean saveResturant(@RequestBody resturant res) {
        try {
            service.saveResturant(res);
        } catch (Exception e) {
            return false;
        }
        return  true;
    }

    @PostMapping("/{id}/save-menu")
    public void saveMenuToResturant(@PathVariable String id, @RequestBody menu m) {
        menuService_service.saveMenu(Long.parseLong(id),m);
    }

    @GetMapping("/{id}/menu")
    public List<menu> getMenubyResturantID(@PathVariable String id) {
        List<menu> menuList = menuService_service.getMenubyID(Long.parseLong(id));
        if(menuList.isEmpty()){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Menu is Empty"
            );}
        return  menuList;
    }
}
