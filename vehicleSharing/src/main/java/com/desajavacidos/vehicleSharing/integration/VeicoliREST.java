package com.desajavacidos.vehicleSharing.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.entities.Veicoli.Veicolo;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@RestController
@RequestMapping("/api/veicoli")
public class VeicoliREST {

	@Autowired
	private VeicoliService service;

//	@Autowired
//	private DescrizioneService deservice;

	@GetMapping
	public List<Veicoli> getall() {

		return service.getAll();
	}

	@GetMapping("/{id}")
	public Veicoli getVeicoli(@PathVariable("id") int id) {

		if (id <= service.getAll().size()) {

			return service.getVeicoliById(id);
		} else {
			return null;
		}

	}

	@GetMapping("/status/{disponibilita}")
	public List<Veicoli> getVeicoliDisponibili(@PathVariable("disponibilita") boolean disponibilita) {

		return service.getVeicoliByDisp(disponibilita);

	}
	
	@GetMapping("/tipo/{tipo}")
	public List<Veicoli>getTipologiaVeicoli(@PathVariable("tipo")Veicolo veicolo){
		
		return service.getByTipologia(veicolo);
	}

	@PostMapping
	public void addVeicoli(@RequestBody Veicoli u) {

		service.addVeicoli(u);
	}

	@PutMapping("/{id}")
	public void updateVeicoli(@PathVariable("id")int id, @RequestBody Veicoli u) {
		Veicoli veicoliById = service.getVeicoliById(id);
		veicoliById.setVeicolo(u.getVeicolo());
		veicoliById.setAlimentazione(u.getAlimentazione());
		veicoliById.setDisponibilita(u.getDisponibilita());
		veicoliById.setDataPrenotazione(u.getDataPrenotazione());
		veicoliById.setPosizione(u.getPosizione());
		veicoliById.setProlungato(u.getProlungato());
		veicoliById.setDescrizione(u.getDescrizione());
		veicoliById.setImmagine(u.getImmagine());
		
			
		service.updateVeicoli(veicoliById);
		
	}

	@DeleteMapping("/{id}")
	public void deleteUtente(@PathVariable("id") int id) {
		service.deleteVeicoliByID(id);
	}

}