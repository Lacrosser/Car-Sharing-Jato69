package com.desajavacidos.vehicleSharing.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="descrizione")
public class Descrizione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	
	@Column(name="modello",length = 30,nullable = false,unique = false)
	private String modello;
	
	@Column(name="colore",length = 30,nullable = false,unique = false)
	private String colore;
	
	@Column(name="cilindrata",length = 10,nullable = false,unique = false)
	private String cilindrata;
	
	// relazione 1 a 1 
	@OneToOne(mappedBy = "descrizione")
	private Veicoli veicoli;
	
	 
	
	public Descrizione() {
		// TODO Auto-generated constructor stub
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getModello() {
		return modello;
	}



	public void setModello(String modello) {
		this.modello = modello;
	}



	public String getColore() {
		return colore;
	}



	public void setColore(String colore) {
		this.colore = colore;
	}



	public String getCilindrata() {
		return cilindrata;
	}



	public void setCilindrata(String cilindrata) {
		this.cilindrata = cilindrata;
	}



	public Veicoli getVeicoli() {
		return veicoli;
	}



	public void setVeicoli(Veicoli veicoli) {
		this.veicoli = veicoli;
	}



	
	
}
