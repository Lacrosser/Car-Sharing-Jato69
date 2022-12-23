package com.desajavacidos.vehicleSharing.integration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HtmlPagesController {
	
	@GetMapping("listaVeicoli")
	public String vediLista() {
		return "listaVeicoli";
	}
	
	@GetMapping("aboutUs")
	public String AboutUs() {
		return "aboutUs";
	}
	@GetMapping("login")
	public String login() {
		return "login";
	}
	@GetMapping("paginaVeicolo")
	public String paginaVeicolo() {
		return "paginaVeicolo";
	}
	
	@GetMapping("tariffe")
	public String tariffe() {
		return "tariffe";
	}
	@GetMapping("adminView")
	public String adminView() {
		return "adminView";
	}
	@GetMapping("adminPanel")
	public String adminPanel() {
		return "adminPanel";
	}
	
	@GetMapping("contattaci")
	public String contattaci() {
		return "contattaci";
	}
	
	@GetMapping("dashboard")
	public String dashboard() {
		return "dashboard";
	}
	@GetMapping("paginaIns")
	public String paginaIns() {
		return "paginaIns";
	}
	
	@GetMapping("partner")
	public String partner() {
		return "partner";
	}
	
	@GetMapping("istruzioni")
	public String istruzioni() {
		return "istruzioni";
	}
	
	@GetMapping("signup")
	public String registrati() {
		return "signup";
	}










}
