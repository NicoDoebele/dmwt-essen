--
-- Tabellenstruktur für Tabelle `essen`
--

DROP TABLE IF EXISTS `essen`;

CREATE TABLE `essen` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL
);

ALTER TABLE `essen` ADD PRIMARY KEY(`id`);

ALTER TABLE `essen` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;