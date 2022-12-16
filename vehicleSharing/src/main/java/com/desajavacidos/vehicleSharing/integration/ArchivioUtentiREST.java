package com.desajavacidos.vehicleSharing.integration;

import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("api")
public class ArchivioUtentiREST {

	@Autowired
	private ArchivioUtentiService service;
	
	@GetMapping("utenti")
	public List<ArchivioUtenti>getall(){
		return service.getAll();
	}
		
		@GetMapping("utenti/{id}")
		public ArchivioUtenti getUtente(@PathVariable("id") int id) {
			return service.getUtenteById(id);
		}
		
		@PostMapping("utenti")
		public void addUtente(@RequestBody ArchivioUtenti u) {
			service.addUtente(u);
		}
		
		@PutMapping("utenti")
		public void updateUtente(@RequestBody ArchivioUtenti u) {
			service.updateUtente(u);
		}
		
		@DeleteMapping("utenti/{id}")
		public void deleteUtente(@PathVariable("id") int id) {
			service.deleteUtenteById(id);
		}
	
		
		
	}
	

