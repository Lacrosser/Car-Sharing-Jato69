package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "archivioutenti")
public class ArchivioUtenti {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	
	@Column(name = "ultima_modifica")
	private Timestamp ultimaModifica;
	
	@Column(name="user_id")
	private String userId;
	
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
	
	@Column(name = "data_iscrizione")
	private Timestamp dataIscrizione;
	
	public ArchivioUtenti() {
		// TODO Auto-generated constructor stub
	}

	public Timestamp getUltimaModifica() {
		return ultimaModifica;
	}

	public void setUltimaModifica(Timestamp ultimaModifica) {
		this.ultimaModifica = ultimaModifica;
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
		return dataIscrizione;
	}

	public void setDataIscrizione(Timestamp dataIscrizione) {
		this.dataIscrizione = dataIscrizione;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
	
}
	

	