drop schema if exists demos;

create schema demos;

use demos;

create table demos.students (
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(200),
  github_id varchar(100),
  location varchar(10) not null,
  id int not null auto_increment,
  primary key(id)
);