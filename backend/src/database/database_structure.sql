CREATE DATABASE contratos;

use contratos;

CREATE TABLE `informacao` (
  `numCont` bigint(20) NOT NULL,
  `dataPub` date NOT NULL,
  `tipoCont` text NOT NULL,
  `tipoProc` text NOT NULL,
  `descr` text NOT NULL,
  `fund` text NOT NULL,
  `fundNec` text NOT NULL,
  `adjudicante` text NOT NULL,
  `adjudicatario` text NOT NULL,
  `obj` text NOT NULL,
  `cpv` text NOT NULL,
  `dataCeleb` date NOT NULL,
  `pContr` decimal(19,2) NOT NULL,
  `prazoExe` bigint(20) NOT NULL,
  `localExe` text NOT NULL,
  `conc` text NOT NULL,
  `anuncio` varchar(255) NOT NULL,
  `inc15` varchar(255) NOT NULL,
  `docs` text NOT NULL,
  `obs` text NOT NULL,
  `dataFecho` date NOT NULL,
  `pTotalEf` decimal(19,2) NOT NULL,
  `causasPrazo` text NOT NULL,
  `causasPreco` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;