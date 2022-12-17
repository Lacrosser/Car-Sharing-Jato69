package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.repo.ArchivioUtentiDao;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

public class ArchivioUtentiServiceImpl implements ArchivioUtentiService {
	
	@Autowired
	private ArchivioUtentiDao repo;
	
	@Override
	public List<ArchivioUtenti> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public ArchivioUtenti getUtenteById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public void addUtente(ArchivioUtenti u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

	@Override
	public void deleteUtenteById(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateUtente(ArchivioUtenti u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

}
