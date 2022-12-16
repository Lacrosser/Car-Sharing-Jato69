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

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.service.iService.ArchivioUtentiService;

@RestController
@RequestMapping("api")
public class ArchivioUtentiREST {

	@Autowired
	private ArchivioUtentiService service;
	
	@GetMapping("archivioutenti")
	public List<ArchivioUtenti> getAll(){
		return service.getAll();
	}
	
	@GetMapping("archivioutenti/{id}")
	public ArchivioUtenti getUtente(@PathVariable("id") int id) {
		return service.getUtenteById(id);
	}
	
	@PostMapping("archivioutenti")
	public void addUtente(@RequestBody ArchivioUtenti u) {
		service.addUtente(u);
	}
	
	@PutMapping("archivioutenti")
	public void updateUtente(@RequestBody ArchivioUtenti u) {
		service.updateUtente(u);
	}
	
	@DeleteMapping("archivioutenti/{id}")
	public void deleteUtente(@PathVariable("id") int id) {
		service.deleteUtenteById(id);
	}
	
	
}
