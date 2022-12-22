package com.desajavacidos.vehicleSharing.integration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("listaveicoli")
public class VeicoliCTRL {
	
	@GetMapping
	public String vediLista() {
		return "listaVeicoli";
	}

}
