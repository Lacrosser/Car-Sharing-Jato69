package com.desajavacidos.vehicleSharing.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.repo.ArchivioUtentiDao;
import com.desajavacidos.vehicleSharing.service.iService.ArchivioUtentiService;

public class ArchivioUtenteServiceImpl implements ArchivioUtentiService {

	@Autowired
	private ArchivioUtentiDao repo;
	
	@Override
	public List<ArchivioUtenti> getAll() {
		return repo.findAll();
	}
	
	@Override
	public ArchivioUtenti getUtenteById(int id) {
		return repo.findById(id).get();
	}
	
	@Override
	public void addUtente(ArchivioUtenti u) {
		 repo.save(u);
	};
	
	@Override
	public void deleteUtenteById(int id) {
		repo.deleteById(id);
	}
	
	@Override
	public void updateUtente(ArchivioUtenti u) {
		repo.save(u);
	}

	

}
