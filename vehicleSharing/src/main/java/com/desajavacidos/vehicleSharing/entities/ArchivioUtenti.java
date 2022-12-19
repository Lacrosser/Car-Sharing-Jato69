package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Set;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


@Entity
@Table(name = "archivioutenti")
public class ArchivioUtenti {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	
	
	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ultima_modifica")
	private LocalDateTime ultimaModifica;
	
	@Column(name="user_id", length = 16,nullable = false,unique = false)
	private String userId;
	
	@Column(name="password",length = 50,nullable = false,unique = false)
	private String password;
	
	@Column(name="firma",nullable = true,unique = false)
	private String firma;
	
	@Column(name="tipo",length = 1,nullable = false,unique = false)
	private String tipo;
	
	@Column(name="nome",length = 40,nullable = true,unique = false)
	private String nome;
	
	@Column(name="cognome",length = 40,nullable = true,unique = false)
	private String cognome;
	
	@Column(name="nascita",length = 10,nullable = true,unique = false)
	private String nascita;
	
	@Column(name="email",length = 40,nullable = false,unique = false)
	private String email;
	
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name ="data_iscrizione")
	private LocalDateTime dataIscrizione;
	
//	@CreationTimestamp
//	@Temporal(TemporalType.TIMESTAMP)
//	@Column(name = "create_date")
//	private Date createDate;
//
//	@UpdateTimestamp
//	@Temporal(TemporalType.TIMESTAMP)
//	@Column(name = "modify_date")
//	private Date modifyDate;
	
	
	//relazione con l'altra tabella
	
	 @OneToMany(mappedBy = "archivioutenti", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	    Set<Prenotazione> tazione;
	
	
	
	public ArchivioUtenti() {
		// TODO Auto-generated constructor stub
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public LocalDateTime getUltimaModifica() {
		return ultimaModifica;
	}



	public void setUltimaModifica(LocalDateTime ultimaModifica) {
		this.ultimaModifica = ultimaModifica;
	}



	public String getUserId() {
		return userId;
	}



	public void setUserId(String userId) {
		this.userId = userId;
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



	public LocalDateTime getDataIscrizione() {
		return dataIscrizione;
	}



	public void setDataIscrizione(LocalDateTime dataIscrizione) {
		this.dataIscrizione = dataIscrizione;
	}



	public Set<Prenotazione> getTazione() {
		return tazione;
	}



	public void setTazione(Set<Prenotazione> tazione) {
		this.tazione = tazione;
	}



	

}