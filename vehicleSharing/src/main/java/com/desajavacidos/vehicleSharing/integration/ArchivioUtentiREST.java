package com.desajavacidos.vehicleSharing.integration;

import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("api/studenti")
public class ArchivioUtentiREST {

	@Autowired
	private ArchivioUtentiService service;

	// restituzione studenti
	@GetMapping
	public List<ArchivioUtenti> getall() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<ArchivioUtenti> getUtenteById(@PathVariable("id") int id) {

		// recupero lo studente tramite lo studente

		ArchivioUtenti s = this.service.getUtenteById(id);

		if (s != null) {
			
			
			// se esiste posso restituire 2 cose, il codice di stato delle richiesta, e l'oggetto desiderato
			
			return new ResponseEntity<ArchivioUtenti>(s, HttpStatus.OK);
		} else {

			return new ResponseEntity<ArchivioUtenti>(new ArchivioUtenti(), HttpStatus.BAD_REQUEST);
		}

	}

//	@PostMapping
//	public  ResponseEntity<ArchivioUtenti> addUtente(@RequestBody ArchivioUtenti u) {
//		
//		boolean emailExist=this.service.
//		service.addUtente(u);
//	}

	@PutMapping
	public void updateUtente(@RequestBody ArchivioUtenti u) {
		service.updateUtente(u);
	}

	@DeleteMapping("/{id}")
	public void deleteUtente(@PathVariable("id") int id) {
		service.deleteUtenteById(id);
	}

}
