package com.desajavacidos.vehicleSharing.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.Descrizione;
import com.desajavacidos.vehicleSharing.services.iServices.DescrizioneService;

@RestController
@RequestMapping("api")
public class DescrizioneREST {
	
	@Autowired
	private DescrizioneService service;
	
	@GetMapping("descrizione")
	public List<Descrizione> getall() {
		return service.getAll();
	}
	@GetMapping("descrizione/{id}")
	public Descrizione getDescrizioneById(@PathVariable("id")int id) {
		return service.getDescrizioneById(id);
	}
	
	@PostMapping("descrizione")
	public void addDescrizione(@RequestBody Descrizione u) {
		service.addDescrizione(u);
	}
	
	@PutMapping("descrizione")
	public void updateDescrizione(@RequestBody Descrizione u) {
		service.updateDescrizione(u);
	}
	
	@DeleteMapping("descrizione/{id}")
	public void deleteDescrizione(@PathVariable("id")int id) {
		service.deleteDescrizioneById(id);
	}
	

}
