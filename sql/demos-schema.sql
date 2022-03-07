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

INSERT INTO students(first_name, last_name, cohort, start_date, email, github_id, country)  VALUES ('Chris', 'Zarba', 5 , '2022-01-24',"Christopher_Zarba@tjx.com", 'chriszarbatjx', 'USA');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ('Maria', 'Ringes', 5, '2022-01-24', 'maria_ringes@tjx.com', 'mariaringes', 'USA');
INSERT INTO students(first_name, last_name, cohort, start_date, email, github_id, country)  VALUES ('Steven', 'Portillo', 5 , '2022-01-24',"steven_portillo@tjx.com", 'stevona', 'USA');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ('Jun Hao', 'Chia', 5, '2022-01-24', 'JunHao_chia@tjxeurope.com', 'Chiaration', 'UK');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ("Charlie", "Nathan",5,'2022-01-24',"charlie_nathan@tjxeurope.com","charlieNathan2","UK");
INSERT INTO students SET first_name = 'Peter', last_name = 'Baker', cohort = 5, start_date = '2022-01-24', email = 'peter_baker@tjx.com', github_id = '55109380', country = 'USA';
INSERT INTO students (first_name, last_name, cohort, start_date,email,github_id, country) VALUES ('Callum', 'Ogle', 5,'2022-01-24','callum_ogle@tjxeurope.com','CallumOgle98','UK');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) values ('Daniel', 'Kotlinski', 5, '2022-01-24','daniel_kotlinski@tjx.com','danieltrying', 'USA');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ('Baltej', 'Toor', 5, '2022-01-24', 'baltej_toor@tjxcanada.ca', 'BaltejToorTJX', 'Canada');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ("Caroline", "Manghan", 5,'2022-01-24', "Caroline_Manghan@tjx.com", "carolinemanghan", "USA");
insert into students (first_name, last_name, country, github_id, cohort, start_date, email ) values ("Ambioris", "Lora", "US", "Siroibma", 5, NOW(), "superemail@gmail.com");
insert into students (first_name, last_name, cohort, start_date, email, github_id, country) values ('Adam', 'Audet', 5, '2022-01-24', 'adam_audet@tjx.com', 'A313A206', 'US');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ("Joe", "Travers", 5, '2022-01-24' ,"joseph_travers@tjx.com","JoeTravers","USA");
INSERT INTO students (first_name, last_name, cohort, email, start_date, github_id, country) VALUES("Mary", "Wishart", 5, "mary_wishart@tjx.com", "2022-01-24", "mwishart", "USA");
insert into students (first_name, last_name, country, cohort, email, start_date, github_id) values ('Rahul' , 'Whig', 'UK', 5 ,'rahul_whig@tjxeurope.com','2022-01-24' , 'RahulWhigTJX' );
INSERT INTO students (first_name,last_name,cohort,start_date,email,github_id, country)VALUES('Katrina','Wallace',5,'2022-01-24','katrina_wallace@tjx.com','katrina-wallace','USA');
insert into students (first_name, last_name, cohort,start_date, email, github_id, country) values ('Abdulahad', 'Qureshi', 5, '2022-01-24', 'abdulahad_qureshi@tjxcanada.ca', 'AbdulahadQ99', 'Canada');
insert into students (first_name, last_name, country, cohort, start_date, email, github_id) values ('Wiktoria', 'Fiolek', 'UK', 5, '2022-01-24', 'wiktoria_fiolek@tjxeurope.com', 'WiktoriaFiolek');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ("Phillip", "K", 5, '2022-01-24',"pk@email.com","12345","USA");
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ('Jacob', 'Whiteman', 5, '2022-01-24', 'jacob_whiteman@tjx.com', 'jacobwhiteman', 'USA');
INSERT INTO students (first_name, last_name, cohort, start_date, email, github_id, country) VALUES ('Katie', 'Mullins', 5, '2022-01-24','kaitlin_mullins@tjx.com','katie1200','USA');
insert into students (first_name, last_name, cohort, start_date, email, github_id, country) values ('Alex', 'Mazzarese', 5, '2022-01-24', 'alex_mazzarese@tjx.com', 'alexmazzTJX', 'USA');
INSERT INTO students (first_name, last_name, cohort, start_date, email, country) VALUES ('Chris', 'Gritter', 5, '2022-01-24', 'chris_gritter@tjxcanada.ca', 'Canada');
INSERT INTO students (first_name, last_name, cohort, start_date, email, country) VALUES ('Brianna', 'Fahrenkopf', 5, '2022-01-24', 'brianna_fahrenkopf@tjx.com', 'US');
INSERT INTO students (first_name,last_name,cohort,start_date,email,github_id,country)VALUES('Seena','Mathew',5,'2024-01-24','seena_mathew@tjxcanada.ca','SeenaRMathew','Canada');

UPDATE students set country = 'USA' where country = 'US';