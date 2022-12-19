package com.desajavacidos.vehicleSharing.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desajavacidos.vehicleSharing.entities.Veicoli;

public interface VeicoliDao extends JpaRepository<Veicoli, Integer> {

}
