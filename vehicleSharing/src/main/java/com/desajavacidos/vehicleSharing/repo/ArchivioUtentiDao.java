package com.desajavacidos.vehicleSharing.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;

public interface ArchivioUtentiDao extends JpaRepository<ArchivioUtenti, Integer> {
	
	ArchivioUtenti findByUserIdIgnoreCase(String userId);
	ArchivioUtenti findByPasswordIgnoreCase(String password);

}
