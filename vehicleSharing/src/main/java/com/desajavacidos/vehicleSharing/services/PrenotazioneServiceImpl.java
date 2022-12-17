package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.repo.PrenotazioneDao;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;

public class PrenotazioneServiceImpl implements PrenotazioneService {
	
	@Autowired
	private PrenotazioneDao repo;
	
	@Override
	public List<Prenotazione> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Prenotazione getDescrizioneById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public void addPresentazione(Prenotazione u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

	@Override
	public void deletePresentazioneById(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updatePresentazione(Prenotazione u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}
	
	
}
