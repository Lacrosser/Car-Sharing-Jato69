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
	private ArchivioUtentiDao dao;
	
//	public ArchivioUtentiServiceImpl(ArchivioUtentiDao dao) {
//		this.dao=dao;
//	}
	// dare un costruttore alla classe con dipendenza, implementi un interfaccia basata su 
	
	@Override
	public List<ArchivioUtenti> getAll() {
		return dao.findAll();
	}

	@Override
	public ArchivioUtenti getUtenteById(int id) {
		return dao.findById(id).get();
	}

	@Override
	public void addUtente(ArchivioUtenti u) {
		
		
		
		dao.save(u);
	}

	@Override
	public void deleteUtenteById(int id) {

		dao.deleteById(id);
	}

	@Override
	public void updateUtente(ArchivioUtenti u) {
		dao.save(u);
	}

	@Override
	public boolean userExists(String userId) {
		
		ArchivioUtenti s= this.dao.findByUserId(userId);
		
		if(s!=null) {
			return true;
		}
		return false;
	}

	@Override
	public boolean passwordExist(String password) {
		
		ArchivioUtenti s= this.dao.findByPassword(password);
		
		if(s!=null) {
			return true;
		}
		return false;
		
		
	}

	@Override
	public ArchivioUtenti findByUser(String user) {
		System.out.println(dao.findByUserId(user).getUserId());
		System.out.println("Username " + user);
		
		if(dao.findByUserId(user).getUserId().equals(user)) {
			System.out.println("Stringhe uguali");
			return dao.findByUserId(user);
		}
		else {
			System.out.println();
			return null;
		}
	}

	@Override
	public ArchivioUtenti findByPassword(String password) {
		
		if(dao.findByPassword(password).getPassword().equals(password))
		return dao.findByPassword(password);
		else
			return null;
	}

	

}
