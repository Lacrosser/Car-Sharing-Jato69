package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.repo.VeicoliDao;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@Service
public class VeicoliServiceImpl implements VeicoliService {
	
	@Autowired
	private VeicoliDao repo;
	
	@Override
	public List<Veicoli> getAll() {
		return repo.findAll();
	}

	@Override
	public Veicoli getVeicoliById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void addVeicoli(Veicoli v) {
		repo.save(v);
		
	}

	

	@Override
	public void updateVeicoli(Veicoli v) {
		repo.save(v);
	}

	@Override
	public void deleteVeicoliByID(int id) {
		repo.deleteById(id);
	}

}
