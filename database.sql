CREATE DATABASE genremusicchoice;

USE genremusicchoice;

CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE criteria (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type ENUM('benefit', 'cost') NOT NULL,
    weight DECIMAL(5, 2) NOT NULL
);

CREATE TABLE alternatives (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE scores (
    id INT PRIMARY KEY,
    alternative_id INT,
    criterion_id INT,
    score DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (alternative_id) REFERENCES alternatives(id),
    FOREIGN KEY (criterion_id) REFERENCES criteria(id)
);
