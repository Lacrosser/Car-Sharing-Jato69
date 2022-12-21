package com.desajavacidos.vehicleSharing.integration;

import java.sql.Timestamp;
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
import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;

@RestController
@RequestMapping("api/prenotazione")
public class PrenotazioneREST {

	@Autowired
	private PrenotazioneService service;

	@GetMapping
	List<Prenotazione> getall() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public Prenotazione getPrenotazione(@PathVariable("id") int id) {

		if (id <= service.getAll().size()) {

			return service.getPrenotazioneById(id);

		} else {
			return null;

		}
	}

	@GetMapping("/utenti/{id}")
	public List<ArchivioUtenti> getUtentiById(@PathVariable("id") int id) {

		return service.getUtentiById(id);
	}

	@GetMapping("/veicoli/{id}")
	public List<Veicoli> getVeicoli(@PathVariable("id") int id) {

		if (id <= service.getAll().size()) {

			return service.getVeicoliById(id);
		} else {
			return null;
		}
	}

	@PostMapping("/utente/{idUtente}/veicolo/{idVeicolo}")
	public void addprenotazione(@PathVariable int idUtente, @PathVariable int idVeicolo) {

		if (idUtente <= service.getAll().size())
			if (idUtente <= service.getAll().size()) {
		
		service.addPrenotazione(idUtente, idVeicolo);
	}
	}

	///// da finire

	@PutMapping("/{id}")
	public void modificaPrenotazione(@PathVariable int id, @RequestBody Prenotazione p) {
		Prenotazione prenotazioneById = service.getPrenotazioneById(id);

		prenotazioneById.setVeicoli(p.getVeicoli());
		prenotazioneById.setArchivioUtenti(p.getArchivioUtenti());
		prenotazioneById.setTimestamp(p.getTimestamp());

		if (id <= service.getAll().size()) {

			service.updatePrenotazione(prenotazioneById);
		}

	}

	@PostMapping
	public void addprenotazioneSingola(@RequestBody Prenotazione i) {
		service.addPrenotazione(i);
	}

	@PutMapping
	public void updateprenotazione(@RequestBody Prenotazione u) {
		service.updatePrenotazione(u);
	}

	// da controllare

	@DeleteMapping("/{id}")
	public void deletePrenotazioen(@PathVariable("id") int id) {

		if (id <= service.getAll().size()) {

			service.deletePrenotazioneById(id);
		}
	}

}
