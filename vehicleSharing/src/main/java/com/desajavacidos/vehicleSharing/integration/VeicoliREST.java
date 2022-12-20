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

import com.desajavacidos.vehicleSharing.entities.Descrizione;
import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.services.iServices.DescrizioneService;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@RestController
@RequestMapping("/api/veicoli")
public class VeicoliREST {

	@Autowired
	private VeicoliService service;
	
	@Autowired
	private DescrizioneService descservice;
	
//	@Autowired
//	private DescrizioneService deservice;


	@GetMapping
	public List<Veicoli> getall() {
//		for (Veicoli veicoli : service.getAll()) {
//			
//			service.getVeicoliById(0)
//			
//		}
//		Descrizione desc=  deservice.getAll()
//				//carica oggetto descrizione carichi la macchina e poi tiri fuori la macchina
//				//ad ogni oggetto abbina una descrione
		
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
//			List<Veicoli> veicoliByDisp= new ArrayList<>();
//			for (Veicoli veicoli : service.getAll()) {
//				
//				if(veicoli.isDisponibilita()==disponibilita) {
//					
//					veicoliByDisp.add(service.getVeicoliById(veicoli.getId()));
//				}
//					 
//			}
//			return veicoliByDisp;

	}

	@PostMapping({ "/{id}" })
	public void addVeicoli(@PathVariable(required = false) Integer id, @RequestBody Veicoli u) {
		
		Descrizione desc=new Descrizione();
		u.setDescrizione(desc);
		
		service.addVeicoli(u);
	}

	@PutMapping
	public void updateVeicoli(@RequestBody Veicoli u) {
		service.updateVeicoli(u);
	}

	@DeleteMapping("/{id}")
	public void deleteUtente(@PathVariable("id") int id) {
		service.deleteVeicoliByID(id);
	}

}