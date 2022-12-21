package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.repo.ArchivioUtentiDao;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

@Service
public class ArchivioUtentiServiceImpl implements ArchivioUtentiService {
	
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
	}

	@Override
	public void deleteUtenteById(int id) {

		repo.deleteById(id);
	}

	@Override
	public void updateUtente(ArchivioUtenti u) {
		repo.save(u);
	}

	@Override
	public boolean userExists(String userId) {
		
		ArchivioUtenti s= this.repo.findByUserIdIgnoreCase(userId);
		
		if(s!=null) {
			return true;
		}
		return false;
	}

	@Override
	public boolean passwordExist(String password) {
		
		ArchivioUtenti s= this.repo.findByPasswordIgnoreCase(password);
		
		if(s!=null) {
			return true;
		}
		return false;
		
		
	}

	@Override
	public ArchivioUtenti findByUser(String user) {
		
		return repo.findByUserIdIgnoreCase(user);
	}

	@Override
	public ArchivioUtenti findByPassword(String password) {
		
		return repo.findByPasswordIgnoreCase(password);
	}

	

}