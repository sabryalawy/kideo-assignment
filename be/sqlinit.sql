CREATE TABLE `kideo_assignment`.`contact_messages` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL,
  `name` VARCHAR(45) NULL,
  `message` TEXT NULL,
  `created_at` TIMESTAMP NULL default now(),
  `updated_at` TIMESTAMP NULL default now() on update now(),
  PRIMARY KEY (`id`));