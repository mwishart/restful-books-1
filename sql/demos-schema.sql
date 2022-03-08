drop schema if exists demos;

create schema demos;

use demos;

create table teams (
  team_id int not null auto_increment,
  team_name varchar(25),
  constraint PK_team_id primary key(team_id)
);

-- Bulk insert style
INSERT INTO teams (team_id, team_name) 
  VALUES (1, 'Age of Empires'), 
         (2, 'Bloons'), 
         (3, 'Civilization'), 
         (4, 'Halo'), 
         (5, 'Kingdom Hearts');

-- Individual insert, use the above or this version
-- INSERT INTO teams (team_id, team_name) VALUES (1, 'Age of Empires');
-- INSERT INTO teams (team_id, team_name) VALUES (2, 'Bloons');
-- INSERT INTO teams (team_id, team_name) VALUES (3, 'Civilization');
-- INSERT INTO teams (team_id, team_name) VALUES (4, 'Halo');
-- INSERT INTO teams (team_id, team_name) VALUES (5, 'Kingdom Hearts');

create table students (
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  cohort int,
  grad_date date,
  email varchar(200),
  github_id varchar(100),
  country varchar(10) not null,
  student_id int not null auto_increment,
  constraint PK_students_student_id primary key(student_id)
  -- If added originally
  -- teams_team_id int,
  -- constraint FK_teams_team_id foreign key (teams_team_id) references teams (team_id)
);

INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country)  VALUES (1, 'Chris', 'Zarba', 5 , '2021-05-01',"Christopher_Zarba@tjx.com", 'chriszarbatjx', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (2, 'Maria', 'Ringes', 5, '2021-05-01', 'maria_ringes@tjx.com', 'mariaringes', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country)  VALUES (3, 'Steven', 'Portillo', 5 , '2021-12-01',"steven_portillo@tjx.com", 'stevona', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (4, 'Jun Hao', 'Chia', 5, '2021-07-01', 'JunHao_chia@tjxeurope.com', 'Chiaration', 'UK');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (5, "Charlie", "Nathan",5,'2021-07-01',"charlie_nathan@tjxeurope.com","charlieNathan2","UK");
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (6, 'Callum', 'Ogle', 5,'2021-07-01','callum_ogle@tjxeurope.com','CallumOgle98','UK');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (7, 'Daniel', 'Kotlinski', 5, '2021-05-01','daniel_kotlinski@tjx.com','danieltrying', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (8, 'Baltej', 'Toor', 5, '2019-06-01', 'baltej_toor@tjxcanada.ca', 'BaltejToorTJX', 'Canada');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (9, "Caroline", "Manghan", 5,'2021-05-01', "Caroline_Manghan@tjx.com", "carolinemanghan", "USA");
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (10, "Ambioris", "Lora", 5, '2021-12-01', "ambioris_lora@tjx.com", "Siroibma", "USA");
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (11, 'Adam', 'Audet', 5, NULL, 'adam_audet@tjx.com', 'A313A206', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (12, "Joseph", "Travers", 5, '2021-05-01' ,"joseph_travers@tjx.com","JoeTravers","USA");
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES(13, "Mary", "Wishart", 5, "2019-05-01", "mary_wishart@tjx.com", "mwishart", "USA");
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (14, 'Rahul' , 'Whig', 5 , '2021-07-01', 'rahul_whig@tjxeurope.com','RahulWhigTJX', 'UK');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country)VALUES(15, 'Katrina','Wallace',5,'2021-08-01','katrina_wallace@tjx.com','katrina-wallace','USA');
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (16, 'Abdulahad', 'Qureshi', 5, NULL, 'abdulahad_qureshi@tjxcanada.ca', 'AbdulahadQ99', 'Canada');
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (17, 'Wiktoria', 'Fiolek', 5, '2019-07-01', 'wiktoria_fiolek@tjxeurope.com', 'WiktoriaFiolek', 'UK');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (18, "Phillip", "Kopita", 5, '2022-05-01',"pk@email.com","12345","USA");
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (19, 'Jacob', 'Whiteman', 5, '2021-12-01', 'jacob_whiteman@tjx.com', 'jacobwhiteman', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (20, 'Katie', 'Mullins', 5, '2021-12-01','kaitlin_mullins@tjx.com','katie1200','USA');
insert into students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) values (21, 'Alex', 'Mazzarese', 5, NULL, 'alex_mazzarese@tjx.com', 'alexmazzTJX', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, country) VALUES (22, 'Chris', 'Gritter', 5, '2021-06-01', 'nevergonnagiveyouup@nevergonnaletyoudown.ca', 'Canada');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, country) VALUES (23, 'Brianna', 'Fahrenkopf', 5, '2021-05-01', 'brianna_fahrenkopf@tjx.com', 'USA');
INSERT INTO students (student_id, first_name, last_name, cohort, grad_date, email, github_id, country) VALUES (24, 'Seena', 'Mathew', 5, '2021-04-01', 'seena_mathew@tjxcanada.ca', 'SeenaRMathew', 'Canada');
INSERT INTO students SET student_id = 25, first_name = 'Peter', last_name = 'Baker', cohort = 5, grad_date = '2021-12-01', email = 'peter_baker@tjx.com', github_id = '55109380', country = 'USA';

-- As an alter table statement
ALTER TABLE students
  ADD teams_team_id int,
  ADD constraint FK_teams_team_id 
        FOREIGN KEY (teams_team_id) 
        REFERENCES teams (team_id);

-- Update students table to have team_ids
UPDATE students
  SET teams_team_id = 1
  WHERE student_id in (16, 9, 13, 2, 14);

UPDATE students
  SET teams_team_id = 2
  WHERE student_id in (4, 23, 1, 7, 24);

UPDATE students
  SET teams_team_id = 3
  WHERE student_id in (3, 8, 18, 19, 20);

UPDATE students
  SET teams_team_id = 4
  WHERE student_id in (11, 21, 6, 12, 17);

UPDATE students
  SET teams_team_id = 5
  WHERE student_id in (25, 22, 5, 15, 10);