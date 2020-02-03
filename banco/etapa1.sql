CREATE SCHEMA `etapa1` DEFAULT CHARACTER SET utf8 ;
CREATE TABLE `etapa1`.`cliente` (
  `id` INT NULL AUTO_INCREMENT,
  `nome` VARCHAR(70) NOT NULL,
  `endereco` VARCHAR(45) NULL,
  `numero` VARCHAR(10) NULL,
  `bairro` VARCHAR(30) NULL,
  `cidade` VARCHAR(45) NULL,
  `uf` CHAR(2) NULL,
  `cep` VARCHAR(9) NULL,
  `email` VARCHAR(70) NULL,
  `cpf` VARCHAR(14) NOT NULL,
  PRIMARY KEY (`id`));
