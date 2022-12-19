package com.desajavacidos.vehicleSharing;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;
import com.desajavacidos.vehicleSharing.services.iServices.DescrizioneService;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@SpringBootTest
class VehicleSharingApplicationTests {

	@Autowired
	ArchivioUtentiService utente;
	@Autowired
	DescrizioneService descrizione;
	@Autowired
	PrenotazioneService prenotazione;
	@Autowired
	VeicoliService veicolo;
	
	@Test
	void contextLoads() {
		
		ArchivioUtenti u = new ArchivioUtenti();
		u.setCognome("Rossi");
		u.setNome("Mario");
		u.setEmail("mario.rossi@gmail.com");
		u.setPassword("mariorossi");
		u.setTipo("A");
		u.setUserId("MARIOROSSI");
		
		System.out.println("Non Aggiunto");
		utente.addUtente(u);
		System.out.println("Aggiunto");
	}

}
