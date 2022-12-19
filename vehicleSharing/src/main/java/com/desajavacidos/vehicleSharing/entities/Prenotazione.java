package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


@Entity
@Table(name="prenotazione")
public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "veicoli_id")
    private Veicoli veicoli;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "archivioutenti_id")
    private ArchivioUtenti archivioutenti;
    
    
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "ora_prenotazione")
    private LocalDateTime oraPrenotazione;

    public Prenotazione() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Veicoli getVeicoli() {
		return veicoli;
	}

	public void setVeicoli(Veicoli veicoli) {
		this.veicoli = veicoli;
	}

	public ArchivioUtenti getArchivioutenti() {
		return archivioutenti;
	}

	public void setArchivioutenti(ArchivioUtenti archivioutenti) {
		this.archivioutenti = archivioutenti;
	}

	public LocalDateTime getOraPrenotazione() {
		return oraPrenotazione;
	}

	public void setOraPrenotazione(LocalDateTime oraPrenotazione) {
		this.oraPrenotazione = oraPrenotazione;
	}

	
	

}
