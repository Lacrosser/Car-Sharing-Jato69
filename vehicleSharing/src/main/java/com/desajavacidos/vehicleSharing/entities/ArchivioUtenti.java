package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ArchivioUtenti")
public class ArchivioUtenti {
	
	@Column(name = "UltimaModifica")
	private Timestamp UltimaModifica;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="password")
	private String password;
	
	@Column(name="firma")
	private String firma;
	
	@Column(name="tipo")
	private String tipo;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="cognome")
	private String cognome;
	
	@Column(name="nascita")
	private String nascita;
	
	@Column(name="email")
	private String email;
	
	@Column(name = "DataIscrizione")
	private Timestamp DataIscrizione;
	
	public ArchivioUtenti() {
		// TODO Auto-generated constructor stub
	}
	
	
	

	public Timestamp getUltimaModifica() {
		return UltimaModifica;
	}

	public void setUltimaModifica(Timestamp ultimaModifica) {
		UltimaModifica = ultimaModifica;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirma() {
		return firma;
	}

	public void setFirma(String firma) {
		this.firma = firma;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getNascita() {
		return nascita;
	}

	public void setNascita(String nascita) {
		this.nascita = nascita;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Timestamp getDataIscrizione() {
		return DataIscrizione;
	}

	public void setDataIscrizione(Timestamp dataIscrizione) {
		DataIscrizione = dataIscrizione;
	}
	
	
	
	
}
