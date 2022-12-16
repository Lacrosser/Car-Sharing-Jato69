package com.desajavacidos.vehicleSharing.service;

import java.util.List;

public interface ArchivioUtenteService {

	List<ArchivioUtente> getAll();
	ArchivioUtente getUtenteById(int id);
	
	void addUtente(ArchivioUtente u);
	void deleteUtenteById(int id);
	void updateUtente(ArchivioUtente u);
}
