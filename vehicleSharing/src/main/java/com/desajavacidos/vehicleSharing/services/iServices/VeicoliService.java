package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.Veicoli;

public interface VeicoliService {
	
	List<Veicoli> getAll();
	Veicoli getVeicoliById(int id);
	
	void addVeicoli(Veicoli v);
	void deleteVeicoliByID(int id);
	void updateVeicoli(Veicoli v);
}
