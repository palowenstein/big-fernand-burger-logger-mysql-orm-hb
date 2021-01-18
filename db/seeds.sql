-- Requires the bigFernand database (schema).
USE bigFernand_db;

-- Insert 6 burger choices from Big Fernand in the Burgers table: 1) burger_name, 2) eaten_burger (boolean - default false, only included if true)
INSERT INTO burgers (burger_name) VALUES ('LE BIG FERNAND');
INSERT INTO burgers (burger_name) VALUES ('LE BARTHOLOMÉ');
INSERT INTO burgers (burger_name) VALUES ('LE BASILE');
INSERT INTO burgers (burger_name) VALUES ('LE PAULIN');
INSERT INTO burgers (burger_name) VALUES ('LE VICTOR');
INSERT INTO burgers (burger_name, eaten_burger) VALUES ('LE LUCIEN (VÉGÉTARIEN)', true);

-- #### DB Setup
-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.