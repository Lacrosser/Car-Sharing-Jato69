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

import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;

@RestController
@RequestMapping("api/prenotazione")
public class PrenotazioneREST {
	
	@Autowired
	private PrenotazioneService service;
	
	@GetMapping
	List<Prenotazione>getall(){
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public Prenotazione getPrenotazione(@PathVariable("id")int id) {
		return service.getPrenotazioneById(id);
	}
	@PostMapping("/utente{idUtente}/veicolo{idVeicolo}")
	public void addprenotazione(@PathVariable(required = false) int idUtente, @RequestBody Prenotazione prenotazioni, @PathVariable(required = false) int idVeicolo) {
		
		service.addPrenotazione(idUtente, idVeicolo);
	}
	
	
	
	@PutMapping
	public void updateprenotazione(@RequestBody Prenotazione u) {
		service.updatePresentazione(u);
	}
	@DeleteMapping("/{id}")
	public void deletePrenotazioen(@PathVariable("id")int id) {
		service.deletePresentazioneById(id);
	}

}
