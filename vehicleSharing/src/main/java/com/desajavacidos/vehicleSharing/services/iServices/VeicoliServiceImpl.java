package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.repo.VeicoliDao;

public class VeicoliServiceImpl implements VeicoliService {
	
	@Autowired
	private VeicoliDao repo;
	
	@Override
	public List<Veicoli> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Veicoli getVeicoliById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public void addVeicoli(Veicoli v) {
		// TODO Auto-generated method stub
		repo.save(v);
		
	}

	@Override
	public void deleteVeicoli(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateVeicoli(Veicoli v) {
		// TODO Auto-generated method stub
		repo.save(v);
	}

}
