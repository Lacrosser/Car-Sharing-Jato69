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
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@RestController
@RequestMapping("api")
public class VeicoliREST {

	@Autowired
	private VeicoliService service;
	
	
	@GetMapping("veicoli")
	public List<Veicoli>getall(){
		return service.getAll();
	}
		
		@GetMapping("veicoli/{id}")
		public Veicoli getVeicoli(@PathVariable("id") int id) {
			return service.getVeicoliById(id);
		}
		
		@GetMapping("veicoli/{disponibilita}")
		public List<Veicoli> getVeicoliDisponibili(@PathVariable("disponibilita")boolean disponibilita) {
			
			
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
//		}
		}
		
		@PostMapping("veicoli")
		public void addVeicoli(@RequestBody Veicoli u) {
			service.addVeicoli(u);
		}
		
		@PutMapping("veicoli")
		public void updateVeicoli(@RequestBody Veicoli u) {
			service.updateVeicoli(u);
		}
		
		@DeleteMapping("veicoli/{id}")
		public void deleteUtente(@PathVariable("id") int id) {
			service.deleteVeicoliByID(id);
		}
	
		
		
}