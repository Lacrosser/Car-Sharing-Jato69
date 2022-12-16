package com.desajavacidos.vehicleSharing.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.dal.ArchivioUtenteDAO;
import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;

public class ArchivioUtenteServiceImpl implements ArchivioUtenteService {

	@Autowired
	private ArchivioUtenteDAO repo;
	
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
	};

}
