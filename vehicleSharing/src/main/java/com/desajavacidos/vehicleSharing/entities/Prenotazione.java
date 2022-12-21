package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import org.hibernate.annotations.CreationTimestamp;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
	@ManyToOne(optional = false)
    @JoinColumn(name = "veicoli_id")
    private Veicoli veicoliId;
		
	@JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(name = "archivioutenti_id")
    private ArchivioUtenti archivioutentiId;
    
    @Column(name="ora_prenotazione")
    @CreationTimestamp
    private Timestamp oraPrenotazione;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	@JsonIgnore
	public Veicoli getVeicoli() {
		return veicoliId;
	}

	public void setVeicoli(Veicoli veicoli) {
		this.veicoliId = veicoli;
	}
	@JsonIgnore
	public ArchivioUtenti getArchivioUtenti() {
		return archivioutentiId;
	}

	public void setArchivioUtenti(ArchivioUtenti archivioUtenti) {
		this.archivioutentiId = archivioUtenti;
	}

	public Timestamp getTimestamp() {
		return oraPrenotazione;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.oraPrenotazione = timestamp;
	}

}