-- Drops the bigFernand database (schema) if it already exists --
DROP SCHEMA IF EXISTS bigFernand_db;

-- Creates the bigFernand database (schema) and greenlights it for use.
CREATE SCHEMA bigFernand_db;

USE bigFernand_db;

-- Creates the burgers table with 1) id, 2) burger_name, 3) eaten_burger.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  eaten_burger boolean DEFAULT false,
  PRIMARY KEY (id)
);

-- #### DB Setup
-- 1. Inside your `burger` directory, create a folder named `db`.
-- 2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:
--    * Create the `bigFernand_db`.
--    * Switch to or use the `bigFernand_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **eaten_burger**: a boolean (true/false).
-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.