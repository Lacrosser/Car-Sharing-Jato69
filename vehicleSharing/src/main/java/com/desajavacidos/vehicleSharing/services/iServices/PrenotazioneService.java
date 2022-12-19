package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.Prenotazione;

public interface PrenotazioneService {

	List<Prenotazione> getAll();

	Prenotazione getDescrizioneById(int id);

	void addPresentazione(Prenotazione u);

	void deletePresentazioneById(int id);

	void updatePresentazione(Prenotazione u);
}
