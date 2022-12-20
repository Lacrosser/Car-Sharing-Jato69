package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.repo.PrenotazioneDao;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;

@Service
public class PrenotazioneServiceImpl implements PrenotazioneService {
	
	@Autowired
	private PrenotazioneDao repo;
	
	@Override
	public List<Prenotazione> getAll() {
		return repo.findAll();
	}

	@Override
	public Prenotazione getDescrizioneById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void addPresentazione(Prenotazione u) {
		repo.save(u);
	}

	@Override
	public void deletePresentazioneById(int id) {
		repo.deleteById(id);
	}

	@Override
	public void updatePresentazione(Prenotazione u) {
		
		repo.save(u);
	}

	@Override
	public void addPresentazione(int idUtente, int idVeicolo) {
		// TODO Auto-generated method stub
		
		
		
		//autowired per le 2 repository
		//cambiare in boolean
		//find by id 
		//find by veicolo
		//check per per id utente
		//check per id veicolo
	}
	
	
}
