package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.Descrizione;

public interface DescrizioneService {

	List<Descrizione> getAll();

	Descrizione getDescrizioneById(int id);

	void addDescrizione(Descrizione u);

	void deleteDescrizioneById(int id);

	void updateDescrizione(Descrizione u);

}
