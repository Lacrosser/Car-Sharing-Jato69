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
INSERT INTO `archivioutenti` VALUES (1,'Paperino','2005-12-31 22:00:00.000000','paono.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministrator'),(2,'Paperino','2005-12-31 22:00:00.000000','paolino.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministratore'),(3,'Paperino','2005-12-31 22:00:00.000000','paolina.paperino@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente1','B',NULL,'Utente1'),(4,'Rossi','2005-12-31 22:00:00.000000','paalino.rossi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente2','B',NULL,'Utente2'),(5,'Verdi','2005-12-31 22:00:00.000000','pawlino.verdi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente3','B',NULL,'Utente3'),(6,'Bianchi','2005-12-31 22:00:00.000000','paelino.bianchi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente4','B',NULL,'Utente4'),(7,'Neri','2005-12-31 22:00:00.000000','plino.neri@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente5','B',NULL,'Utente5');
/*!40000 ALTER TABLE `archivioutenti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `prenotazione`
--

LOCK TABLES `prenotazione` WRITE;
/*!40000 ALTER TABLE `prenotazione` DISABLE KEYS */;
INSERT INTO `prenotazione` VALUES (1,NULL,2,1),(2,NULL,3,2),(3,NULL,4,3),(4,NULL,5,4),(5,NULL,6,5);
/*!40000 ALTER TABLE `prenotazione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `veicoli`
--

LOCK TABLES `veicoli` WRITE;
/*!40000 ALTER TABLE `veicoli` DISABLE KEYS */;
INSERT INTO `veicoli` VALUES (1,'elettrica','45Cv','Bianca',NULL,_binary '',NULL,'VOLVO',NULL,_binary '','AUTO'),(2,'ibrida','95Cv','Nera',NULL,_binary '\0',NULL,'Volvo',NULL,_binary '\0','BICICLETTA'),(3,'elettrica','50Cv','Verdi',NULL,_binary '\0',NULL,'Mercerdes',NULL,_binary '','MONOPATTINO'),(4,'elettrica','5Cv','ROSA',NULL,_binary '',NULL,'Volvo',NULL,_binary '\0','MONOPATTINO'),(5,'Ibrida','415Cv','Fuxia',NULL,_binary '',NULL,'Volvo',NULL,_binary '','AUTO');
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

-- Dump completed on 2022-12-22 18:25:39
