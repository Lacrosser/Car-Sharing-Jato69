package com.desajavacidos.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "archivioutenti")
public class archivioutenti {
	
	@Column(name = "UltimaModifica")
	private java.sql.Timestamp UltimaModifica;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userID;
	private String password;
	private String firma;
	private String tipo;
	private String nome;
	private String cognome;
	private String nascita;
	private String email;
	@Column(name = "DataIscrizione")
	private java.sql.Timestamp DataIscrizione;
	
	
	public int getUserID() {
		return userID;
	}
	
	public void setUserID(int userID) {
		this.userID = userID;
	}
	
	public String getPassword() {
		return password;
	}
	
	public java.sql.Timestamp getUltimaModifica() {
		return UltimaModifica;
	}

	public void setUltimaModifica(java.sql.Timestamp ultimaModifica) {
		UltimaModifica = ultimaModifica;
	}

	public java.sql.Timestamp getDataIscrizione() {
		return DataIscrizione;
	}

	public void setDataIscrizione(java.sql.Timestamp dataIscrizione) {
		DataIscrizione = dataIscrizione;
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
	
	
}
