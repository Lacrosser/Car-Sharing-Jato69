package com.desajavacidos.vehicleSharing.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desajavacidos.vehicleSharing.entities.Prenotazione;

public interface PrenotazioneDao extends JpaRepository<Prenotazione, Integer> {

}
