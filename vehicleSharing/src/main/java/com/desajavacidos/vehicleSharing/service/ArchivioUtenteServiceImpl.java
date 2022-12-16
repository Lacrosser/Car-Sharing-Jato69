package com.desajavacidos.vehicleSharing.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.dal.ArchivioUtenteDAO;

public class ArchivioUtenteServiceImpl implements ArchivioUtenteService {

	@Autowired
	private ArchivioUtenteDAO repo;
	
	@Override
	public List<ArchivioUtente> getAll() {
		return repo.findAll();
	}
	
	@Override
	public ArchivioUtente getUtenteById(int id) {
		return repo.findById(id).get();
	}
	
	@Override
	public void addUtente(ArchivioUtente u) {
		return repo.save(u);
	};
	
	@Override
	public void deleteUtenteById(int id) {
		repo.deleteById(id);
	}
	
	@Override
	public void updateUtente(ArchivioUtente u) {
		repo.save(u);
	};

}
