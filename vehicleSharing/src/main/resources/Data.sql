-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: progettosharing
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `archivioutenti`
--

LOCK TABLES `archivioutenti` WRITE;
/*!40000 ALTER TABLE `archivioutenti` DISABLE KEYS */;
INSERT INTO `archivioutenti` VALUES (1,'Paperino','2005-12-31 22:00:00.000000','paolino.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministratore'),(2,'Paperino','2005-12-31 22:00:00.000000','paolino.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministratore'),(3,'Paperino','2005-12-31 22:00:00.000000','paolino.paperino@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente','B',NULL,'Utente'),(4,'Rossi','2005-12-31 22:00:00.000000','paolino.rossi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente','B',NULL,'Utente'),(5,'Verdi','2005-12-31 22:00:00.000000','paolino.verdi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente','B',NULL,'Utente'),(6,'Bianchi','2005-12-31 22:00:00.000000','paolino.bianchi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente','B',NULL,'Utente'),(7,'Neri','2005-12-31 22:00:00.000000','paolino.neri@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente','B',NULL,'Utente');
/*!40000 ALTER TABLE `archivioutenti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `descrizione`
--

LOCK TABLES `descrizione` WRITE;
/*!40000 ALTER TABLE `descrizione` DISABLE KEYS */;
INSERT INTO `descrizione` VALUES (1,'35cv','bianca',' vroom'),(2,'38cv','bianca',' vroom'),(3,'39cv','bianca',' vroom');
/*!40000 ALTER TABLE `descrizione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `prenotazione`
--

LOCK TABLES `prenotazione` WRITE;
/*!40000 ALTER TABLE `prenotazione` DISABLE KEYS */;
INSERT INTO `prenotazione` VALUES (1,NULL,2,1,NULL),(2,NULL,3,2,NULL),(3,NULL,4,3,NULL),(4,NULL,5,4,NULL),(5,NULL,6,5,NULL);
/*!40000 ALTER TABLE `prenotazione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `veicoli`
--

LOCK TABLES `veicoli` WRITE;
/*!40000 ALTER TABLE `veicoli` DISABLE KEYS */;
INSERT INTO `veicoli` VALUES (1,'elettrica',NULL,_binary '',NULL,'Roma',_binary '','AUTO',1),(2,'elettrica',NULL,_binary '',NULL,'Roma',_binary '','MONOPATTINO',2),(3,'elettrica',NULL,_binary '',NULL,'Roma',_binary '','BICICLETTA',2),(4,'elettrica',NULL,_binary '\0',NULL,'Roma',_binary '','AUTO',3),(5,'elettrica',NULL,_binary '\0',NULL,'Roma',_binary '','MONOPATTINO',1),(6,'elettrica',NULL,_binary '\0',NULL,'Roma',_binary '','BICICLETTA',2);
/*!40000 ALTER TABLE `veicoli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 22:12:01
