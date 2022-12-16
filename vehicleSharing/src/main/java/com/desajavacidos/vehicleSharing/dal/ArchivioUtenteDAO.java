package com.desajavacidos.vehicleSharing.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArchivioUtenteDAO extends JpaRepository<ArchivioUtente, Integer>{

}
