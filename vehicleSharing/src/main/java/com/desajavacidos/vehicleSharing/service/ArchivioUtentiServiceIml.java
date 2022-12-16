package com.desajavacidos.vehicleSharing.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.repo.ArchivioUtentiDao;
import com.desajavacidos.vehicleSharing.service.iService.ArchivioUtentiService;

public class ArchivioUtentiServiceIml implements ArchivioUtentiService {

	@Autowired
	private ArchivioUtentiDao repo;
	
	@Override
	public List<ArchivioUtenti> getAll() {
		
		return repo.findAll();
	}

}
