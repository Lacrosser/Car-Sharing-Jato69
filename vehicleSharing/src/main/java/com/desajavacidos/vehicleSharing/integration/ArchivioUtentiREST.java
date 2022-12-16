package com.desajavacidos.vehicleSharing.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.service.ArchivioUtenteServiceImpl;

@RestController
@RequestMapping("api")
public class ArchivioUtentiREST {
	@Autowired
	private ArchivioUtenteServiceImpl service;
	
	@GetMapping("utenti")
	public List<ArchivioUtenti> getAll(){
		return service.getAll();
	}

}
