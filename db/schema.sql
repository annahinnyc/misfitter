CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE user (
  id int not null auto_increment,
  full_name varchar(200),
  email varchar(200),
  pass varchar(200),
  primary key (id)
);

