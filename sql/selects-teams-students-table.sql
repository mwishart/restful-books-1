USE demos;

-- COUNT
SELECT COUNT(*) uk_students 
  FROM students s
  WHERE country = 'UK';

-- MAX
SELECT MAX(grad_date) latest_grad_date 
  FROM students s;

-- MIN
SELECT MIN(grad_date) earliest_grad_date 
  FROM students s;

-- MAX / MIN
SELECT MAX(grad_date) latest_grad_date, MIN(grad_date) earliest_grad_date 
  FROM students s;

-- GROUP BY
SELECT COUNT(*) student_count, country 
  FROM students s
  GROUP BY country;

-- GROUP BY, COUNT, aliases, math, has it all
SELECT count(*) as student_count, 
       count(s.github_id) as github_count, 
       count(*) - count(s.github_id) as difference,
       s.country 
FROM students s
GROUP BY country
having difference > 0;

-- Students per team
SELECT ts.team_id, count(distinct ts.student_id)
  FROM demos.teams_students ts
  GROUP BY ts.team_id;

-- Teams per student
SELECT ts.student_id, count(distinct ts.team_id)
  FROM demos.teams_students ts
  GROUP BY ts.student_id;

-- Join students and team ids
SELECT s.first_name, s.last_name, ts.week, ts.team_id
  FROM demos.students s 
  INNER JOIN demos.teams_students ts
       ON s.student_id = ts.student_id;

-- Join teams and student ids
SELECT t.team_name, ts.week, ts.student_id
  FROM demos.teams t
  INNER JOIN demos.teams_students ts
      ON t.team_id = ts.team_id;

-- Join EVERYTHING
SELECT ts.week, s.first_name, s.last_name, t.team_name
  FROM demos.teams_students ts
    INNER JOIN demos.students s
      ON s.student_id = ts.student_id
    INNER JOIN demos.teams t
      ON t.team_id = ts.team_id;

-- Join EVERYTHING distinct (i.e., what teams have students been on? )
SELECT distinct t.team_name, s.first_name, s.last_name
  FROM demos.teams_students ts
    INNER JOIN demos.students s
      ON s.student_id = ts.student_id
    INNER JOIN demos.teams t
      ON t.team_id = ts.team_id
  ORDER BY t.team_name, s.first_name, s.last_name;

-- Subquery: Teams you've been on (student 12)
SELECT t.team_id, t.team_name
  FROM demos.teams t
  WHERE t.team_id in (
    SELECT distinct ts.team_id
      FROM demos.teams_students ts
      WHERE student_id = 12
  );
    
-- Subquery: Teams you haven't been on (student 12)
SELECT t.team_id, t.team_name
  FROM demos.teams t
  WHERE t.team_id not in (
    SELECT distinct ts.team_id
      FROM demos.teams_students ts
      WHERE student_id = 12
  );

-- Subquery: People you've worked with (student 12)
SELECT ts_12.student_id, ts_outer.student_id 
  FROM demos.teams_students as ts_outer
    INNER JOIN (
      SELECT ts_inner.student_id, ts_inner.team_id, ts_inner.week
        FROM demos.teams_students ts_inner
        WHERE ts_inner.student_id = 12
    ) as ts_12
      ON ts_outer.team_id = ts_12.team_id
        AND ts_outer.week = ts_12.week
  WHERE ts_outer.student_id != 12;
  
-- People everyone's worked with
SELECT ts_inner.student_id as student, ts_outer.student_id as worked_with
  FROM demos.teams_students as ts_outer
    INNER JOIN (
      SELECT ts.student_id, ts.team_id, ts.week
        FROM demos.teams_students ts
    ) as ts_inner
      ON ts_outer.team_id = ts_inner.team_id
         AND ts_outer.week = ts_inner.week
  WHERE ts_outer.student_id != ts_inner.student_id
  ORDER BY student;

-- Count of people you've worked with
SELECT ts_inner.student_id as student, count(distinct ts_outer.student_id)
  FROM demos.teams_students as ts_outer
    INNER JOIN (
      SELECT ts.student_id, ts.team_id, ts.week
        FROM demos.teams_students ts
    ) as ts_inner
      ON ts_outer.team_id = ts_inner.team_id
        AND ts_outer.week = ts_inner.week
  WHERE ts_outer.student_id != ts_inner.student_id
  GROUP BY student
  ORDER BY student;

