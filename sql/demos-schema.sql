drop schema if exists demos;

create schema demos;

use demos;

create table students (
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  cohort int,
  start_date date,
  email varchar(200),
  github_id varchar(100),
  country varchar(10) not null,
  student_id int not null auto_increment,
  primary key(student_id)
);