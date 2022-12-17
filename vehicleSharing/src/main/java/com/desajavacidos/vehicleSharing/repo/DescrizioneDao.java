package com.desajavacidos.vehicleSharing.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desajavacidos.vehicleSharing.entities.Descrizione;

public interface DescrizioneDao  extends JpaRepository<Descrizione, Integer> {

}
