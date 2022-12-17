package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.Descrizione;
import com.desajavacidos.vehicleSharing.repo.DescrizioneDao;
import com.desajavacidos.vehicleSharing.services.iServices.DescrizioneService;

public class DescrizioneServiceImpl implements DescrizioneService {
	
	@Autowired
	private DescrizioneDao repo;
	
	@Override
	public List<Descrizione> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Descrizione getDescrizioneById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public void addDescrizione(Descrizione u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

	@Override
	public void deleteDescrizioneById(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateDescrizione(Descrizione u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

}
