package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="prenotazione")
public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY, optional = false,cascade = CascadeType.ALL)
    @JoinColumn(name = "veicoli_id")
    private Veicoli veicoli;
		
    @ManyToOne(fetch = FetchType.LAZY, optional = false,cascade = CascadeType.ALL)
    @JoinColumn(name = "archivioutenti_id")
    @JsonIgnore
    private ArchivioUtenti archivioutenti;
    
    @Column(name="ora_prenotazione")
    private Timestamp oraPrenotazione;

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
	@JsonIgnore
	public ArchivioUtenti getArchivioUtenti() {
		return archivioutenti;
	}

	public void setArchivioUtenti(ArchivioUtenti archivioUtenti) {
		this.archivioutenti = archivioUtenti;
	}

	public Timestamp getTimestamp() {
		return oraPrenotazione;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.oraPrenotazione = timestamp;
	}

}