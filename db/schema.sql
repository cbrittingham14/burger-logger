DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burg VARCHAR(255) NOT NULL,
    devoured BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);