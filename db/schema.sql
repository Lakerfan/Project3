DROP DATABASE IF EXISTS city_life_db;

CREATE DATABASE city_life_db;

USE city_life_db;

CREATE TABLE user_info 
(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
apt_id INT NOT NULL,
PRIMARY KEY(id)
constraint apt_id foreign key (apt_id))
    REFERENCES apt_search(id)
);

CREATE TABLE apt_search 
(
id INT NOT NULL AUTO_INCREMENT,
address VARCHAR(255) NOT NULL,
home_type VARCHAR(255) NOT NULL,
rooms VARCHAR(255) NOT NULL,
price MONEY
description VARCHAR(255) NOT NULL
PRIMARY KEY(id)
)