drop database users;

create database users;

use users;

create table user (
  id int not null auto_increment,
  full_name varchar(200),
  email varchar(200),
  pass varchar(200),
  primary key (id)
);

