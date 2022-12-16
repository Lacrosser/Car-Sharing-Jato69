package com.desajavacidos.vehicleSharing.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;

@Repository
public interface ArchivioUtenteDAO extends JpaRepository<ArchivioUtenti, Integer>{

}
