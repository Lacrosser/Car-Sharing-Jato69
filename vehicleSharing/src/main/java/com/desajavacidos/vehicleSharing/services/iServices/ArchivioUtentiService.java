package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;


public interface ArchivioUtentiService {

	List<ArchivioUtenti>getAll();
	
	
	ArchivioUtenti getUtenteById(int id);
	
	void addUtente(ArchivioUtenti u);
	void deleteUtenteById(int id);
	void updateUtente(ArchivioUtenti u);
}

