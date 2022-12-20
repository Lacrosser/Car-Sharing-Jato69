package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="veicoli")
public class Veicoli {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id",length = 40, nullable = false,unique = false)
	private int id;
	
	@Enumerated(EnumType.STRING)
	@Column(name="tipologia")
	private Veicolo veicolo;
	
	public enum Veicolo{
		AUTO,MONOPATTINO,BICICLETTA;
	}
	
	@Column(name="alimentazione",length = 40, nullable = false,unique = false)
	private String alimentazione;
	
	//descrizione come oggetto, creare relazione tra tabella
	
	
	@Column(name="noleggio_disponibilita",nullable = false,unique = false)
	private Boolean disponibilita;
	
	
	@Column(name="data_prenotazione")
	@CreationTimestamp
	private Timestamp dataPrenotazione;
	
	@Column(name="posizione",nullable = true,unique = false)
	private String posizione;
	@Column(name="noleggio_prolungato",nullable = true,unique = false)
	private Boolean prolungato;
	@Column(name="immagine",nullable = true,unique = false)
	private String immagine;
	
	
	@JsonIgnore
	@OneToOne( fetch = FetchType.LAZY, optional = false, cascade=CascadeType.ALL)
	@JoinColumn(name = "descrizione_id", nullable = false)
    private Descrizione descrizione;
	//User Id dell'utente che ha inserito l'informazione
	
	
	@OneToMany(mappedBy = "veicoli",fetch = FetchType.LAZY, cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Prenotazione> prenotazione= new HashSet<Prenotazione>();
	
	public Veicoli() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

	public String getAlimentazione() {
		return alimentazione;
	}

	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}

	public String getPosizione() {
		return posizione;
	}

	public void setPosizione(String posizione) {
		this.posizione = posizione;
	}

	public boolean isDisponibilita() {
		return disponibilita;
	}

	public void setDisponibilita(boolean disponibilita) {
		this.disponibilita = disponibilita;
	}

	public boolean isProlungato() {
		return prolungato;
	}

	public void setProlungato(boolean prolungato) {
		this.prolungato = prolungato;
	}

	public Timestamp getDataPrenotazione() {
		return dataPrenotazione;
	}

	public void setDataPrenotazione(Timestamp dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	
	public Descrizione getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(Descrizione descrizione) {
		this.descrizione = descrizione;
	}
	
	public Set<Prenotazione> getPreno() {
		return prenotazione;
	}

	public void setPreno(Set<Prenotazione> preno) {
		this.prenotazione = preno;
	}


	
	
}