package com.desajavacidos.vehicleSharing.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.repo.PrenotazioneDao;
import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;

@Service
public class PrenotazioneServiceImpl implements PrenotazioneService {

	@Autowired
	private PrenotazioneDao dao;

	@Autowired
	private VeicoliServiceImpl veirepo;

	@Autowired
	private ArchivioUtentiServiceImpl archivioprepo;

	@Override
	public List<Prenotazione> getAll() {
		return dao.findAll();
	}

	@Override
	public Prenotazione getPrenotazioneById(int id) {
		return dao.findById(id).get();
	}

	@Override
	public void addPrenotazione(Prenotazione u) {
		dao.save(u);
	}

	@Override
	public void deletePrenotazioneById(int id) {
		
		Prenotazione p=getPrenotazioneById(id);
		p.getVeicoli().setDisponibilita(true);
		dao.deleteById(id);
	}

	@Override
	public void updatePrenotazione(Prenotazione u) {

		dao.save(u);
	}

	@Override
	public boolean addPrenotazione(int idUtente, int idVeicolo) {

		Veicoli veicoloId = veirepo.getVeicoliById(idVeicolo);
		ArchivioUtenti archivioId = archivioprepo.getUtenteById(idUtente);

		if (idUtente != 0 && idVeicolo != 0) {
			Prenotazione p = new Prenotazione();
			p.setArchivioUtenti(archivioId);

			if (veicoloId.getDisponibilita()) {
				p.setVeicoli(veicoloId);
				dao.save(p);
				System.out.println("salvie");
				return true;
			} else {
				return false;
			}

		}

		// autowired per le 2 repository
		// cambiare in boolean
		// find by id
		// find by veicolo
		// check per per id utente
		// check per id veicolo
		return false;

	}

	@Override
	public boolean putPrenotazione(int idUtente, int veicolo, int id) {

		ArchivioUtenti archivioUtenti = archivioprepo.getUtenteById(idUtente);
		Veicoli veicolizzati = veirepo.getVeicoliById(veicolo);
		Prenotazione a = getPrenotazioneById(id);

		a.setArchivioUtenti(archivioUtenti);
		a.setVeicoli(veicolizzati);

		dao.save(a);
		return true;

	}

	@Override
	public List<ArchivioUtenti> getUtentiById(int idUtente) {
		// ArchivioUtenti a=archivioprepo.getUtenteById(idUtente);
		List<Prenotazione> gino = dao.findByArchivioutenti(idUtente);

		List<ArchivioUtenti> franca = gino.stream().map(g -> g.getArchivioUtenti()).toList();

		return franca;
	}

	@Override
	public List<Veicoli> getVeicoliById(int idVeicolo) {

		List<Prenotazione> gino = dao.findByVeicoli(idVeicolo);

		List<Veicoli> franca = gino.stream().map(g -> g.getVeicoli()).toList();

		return franca;

		// TODO Auto-generated method stub

	}
	/*
	 * check per controllare se il veicolo era già disponibile (usando il boolean
	 * falso? prendo get disponibilità del veiocolo? wtf)
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 */

}
