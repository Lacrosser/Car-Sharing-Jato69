package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desajavacidos.vehicleSharing.entities.Descrizione;
import com.desajavacidos.vehicleSharing.repo.DescrizioneDao;
import com.desajavacidos.vehicleSharing.services.iServices.DescrizioneService;

@Service
public class DescrizioneServiceImpl implements DescrizioneService {
	
	@Autowired
	private DescrizioneDao repo;
	
	@Override
	public List<Descrizione> getAll() {
		return repo.findAll();
	}

	@Override
	public Descrizione getDescrizioneById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void addDescrizione(Descrizione u) {
		repo.save(u);
	}

	@Override
	public void deleteDescrizioneById(int id) {
		repo.deleteById(id);
	}

	@Override
	public void updateDescrizione(Descrizione u) {
		repo.save(u);
	}

}
