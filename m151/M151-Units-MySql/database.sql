-- Falls DB nicht bereits existiert:
-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema movie-db
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema movie-db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movie-db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `movie-db` ;
-- -----------------------------------------------------
-- Table `movie-db`.`Movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-db`.`Movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `year` INT NULL DEFAULT NULL,
  `user` INT NULL DEFAULT NULL,
  `public` INT NULL DEFAULT NULL,
  `ownerId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `movie-db`.`Ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-db`.`Ratings` (
  `user` INT NULL DEFAULT NULL,
  `movie` INT NULL DEFAULT NULL,
  `rating` INT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `movie-db`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-db`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NULL DEFAULT NULL,
  `lastname` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;