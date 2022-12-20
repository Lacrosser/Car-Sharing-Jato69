package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.Prenotazione;

public interface PrenotazioneService {

	List<Prenotazione> getAll();

	Prenotazione getPrenotazioneById(int id);

	void addPresentazione(Prenotazione u);
	
	boolean addPrenotazione(int idUtente, int idVeicolo);

	void deletePresentazioneById(int id);

	void updatePresentazione(Prenotazione u);
}
