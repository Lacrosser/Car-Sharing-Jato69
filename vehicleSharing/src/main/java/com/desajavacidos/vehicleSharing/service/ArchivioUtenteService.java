package com.desajavacidos.vehicleSharing.service;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;

public interface ArchivioUtenteService {

	List<ArchivioUtenti> getAll();
	ArchivioUtenti getUtenteById(int id);
	
	void addUtente(ArchivioUtenti u);
	void deleteUtenteById(int id);
	void updateUtente(ArchivioUtenti u);
}
