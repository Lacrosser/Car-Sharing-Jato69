package com.desajavacidos.vehicleSharing.integration;

import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
	public ResponseEntity<ArchivioUtenti> putOne(@RequestBody ArchivioUtenti u) {
		ArchivioUtenti archivioID = this.service.getUtenteById(u.getId());
		if(archivioID == null)
			return new ResponseEntity<ArchivioUtenti>(u, HttpStatus.BAD_REQUEST);
		ArchivioUtenti archivioUser = this.service.findByUser(u.getUserId());
		ArchivioUtenti archivioPassword = this.service.findByPassword(u.getPassword());
			if(archivioPassword != null && archivioUser.getId() != u.getId() && archivioPassword.getId() != u.getId() && archivioUser != null) {
				return new ResponseEntity<ArchivioUtenti>(u, HttpStatus.BAD_REQUEST);
			} else {
				service.updateUtente(u);
				return new ResponseEntity<ArchivioUtenti>(u, HttpStatus.OK);
			}
			

		
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ArchivioUtenti> delOne(@PathVariable("id") int id) {
		ArchivioUtenti archivioID = this.service.getUtenteById(id);
		if(archivioID == null)
			return ResponseEntity.badRequest().build();
		this.service.deleteUtenteById(id);
		return ResponseEntity.ok().build();
	}


}
