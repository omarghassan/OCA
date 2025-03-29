-- Step 1: Database Design

-- 1/ Create the following tables with appropriate data types and relationships:
--   Students: student_id, first_name, last_name, email, date_of_birth, gender, major, enrollment_year
--   Courses: course_id, course_name, course_code, credits, department
--   Instructors: instructor_id, first_name, last_name, email, hire_date, department
--   Enrollments: enrollment_id, student_id, course_id, grade
--   Course Assignments: assignment_id, instructor_id, course_id, semester, year

CREATE DATABASE university;

-- Students Table
CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    major VARCHAR(50) NOT NULL,
    enrollment_year YEAR NOT NULL
);

-- Courses Table
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(10) UNIQUE NOT NULL,
    credits INT NOT NULL,
    department VARCHAR(50) NOT NULL
);

-- Instructors Table
CREATE TABLE Instructors (
    instructor_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hire_date DATE NOT NULL,
    department VARCHAR(50) NOT NULL
);

-- Enrollments Table
CREATE TABLE Enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade CHAR(2),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Course Assignments Table
CREATE TABLE CourseAssignments (
    assignment_id INT AUTO_INCREMENT PRIMARY KEY,
    instructor_id INT NOT NULL,
    course_id INT NOT NULL,
    semester ENUM('Spring', 'Summer', 'Fall', 'Winter') NOT NULL,
    year YEAR NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Step 2: Insert Data
-- 2/ Insert at least 10 students, 5 instructors, and 5 courses. Make sure courses are assigned to instructors, and
-- students are enrolled in at least 2 courses each.

INSERT INTO Students (first_name, last_name, email, date_of_birth, gender, major, enrollment_year)
VALUES 
('Omar', 'Abu Deyak', 'omar@example.com', '2000-01-15', 'Male', 'Computer Science', 2019),
('Luma', 'Shriedeh', 'luma@example.com', '1999-02-20', 'Female', 'Computer Science', 2019),
('Layan', 'Alem', 'layan@example.com', '2001-03-25', 'Female', 'Mathematics', 2023),
('Osama', 'Khazali', 'osama@example.com', '2000-04-10', 'Male', 'Physics', 2022),
('Alaa', 'Hassain', 'alaa@example.com', '1998-05-30', 'Male', 'Chemistry', 2020),
('Ahmad', 'Al-Heresh', 'ahamd@example.com', '2002-06-18', 'Male', 'Engineering', 2024),
('Lana', 'Asaad', 'lana@example.com', '1999-07-22', 'Female', 'Computer Science', 2021),
('Maha', 'Al-Maha', 'maha@example.com', '2001-08-12', 'Female', 'Biology', 2023),
('Ibraheem', 'Al-Saleh', 'ibraheem@example.com', '2000-09-05', 'Male', 'Mathematics', 2022),
('Sara', 'Ahmad', 'sara@example.com', '1998-10-14', 'Female', 'Physics', 2020);

INSERT INTO Instructors (first_name, last_name, email, hire_date, department)
VALUES
('Ayham', 'Zaid', 'ayham@example.com', '2015-08-01', 'Computer Science'),
('Alaa', 'Mohammad', 'alaa@example.com', '2017-09-15', 'Biology'),
('Mohammad', 'Shweiki', 'mohammad@example.com', '2018-01-20', 'Mathematics'),
('Salameh', 'Yaseen', 'salameh@example.com', '2016-03-10', 'Physics'),
('Kamal', 'Kalaldeh', 'kamal@example.com', '2019-06-25', 'Chemistry');

INSERT INTO Courses (course_name, course_code, credits, department)
VALUES
('Introduction to Programming', 'CS101', 3, 'Computer Science'),
('General Biology', 'BIO101', 4, 'Biology'),
('Calculus I', 'MATH101', 4, 'Mathematics'),
('Physics I', 'PHYS101', 3, 'Physics'),
('Organic Chemistry', 'CHEM101', 4, 'Chemistry');

INSERT INTO CourseAssignments (instructor_id, course_id, semester, year)
VALUES
(1, 1, 'Fall', 2024),
(2, 2, 'Spring', 2024),
(3, 3, 'Fall', 2024),
(4, 4, 'Spring', 2024),
(5, 5, 'Fall', 2024);

INSERT INTO Enrollments (student_id, course_id, grade)
VALUES
(1, 1, 'A'), (1, 3, 'B'),
(2, 2, 'A'), (2, 4, 'B'),
(3, 1, 'A'), (3, 5, 'A'),
(4, 3, 'C'), (4, 5, 'B'),
(5, 2, 'B'), (5, 4, 'B'),
(6, 1, 'A'), (6, 3, 'A'),
(7, 2, 'B'), (7, 5, 'C'),
(8, 1, 'A'), (8, 4, 'B'),
(9, 3, 'B'), (9, 5, 'A'),
(10, 2, 'A'), (10, 4, 'C');

-- Step 3: Queries
-- Basic Queries:
-- 1. List all students along with their details.
SELECT * FROM Students;

-- 2. Find the total number of courses offered by the university.
SELECT COUNT(*) AS total_courses FROM Courses;

-- 3. Show the names of all students enrolled in a specific course.
SELECT Students.first_name, Students.last_name
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
WHERE Enrollments.course_id = 1;

-- 4. Retrieve the email addresses of all instructors in a department
SELECT email
FROM Instructors
WHERE department = 'Computer Science';

-- Intermediate Queries
-- 5. List all courses along with the number of students enrolled.
SELECT Courses.course_name, Courses.course_code, COUNT(Enrollments.student_id) AS num_of_students
FROM Courses
LEFT JOIN Enrollments ON Courses.course_id = Enrollments.course_id
GROUP BY Courses.course_id;

-- 6. Find the students who were enrolled in a course with a grade of 'A'.
SELECT Students.first_name, Students.last_name
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
WHERE Enrollments.grade = 'A' AND Enrollments.course_id = 2;

-- 7. Retrieve the courses and the instructors assigned for a specific semester.
SELECT Courses.course_name, Courses.course_code, Instructors.first_name, Instructors.last_name
FROM CourseAssignments
JOIN Courses ON CourseAssignments.course_id = Courses.course_id
JOIN Instructors ON CourseAssignments.instructor_id = Instructors.instructor_id
WHERE CourseAssignments.semester = 'Fall' AND CourseAssignments.year = 2024;

-- 8. Find the average grade for a particular course.
SELECT AVG(CAST((
  CASE 
    WHEN grade = 'A' THEN 4.0
    WHEN grade = 'B' THEN 3.0
    WHEN grade = 'C' THEN 2.0
    WHEN grade = 'D' THEN 1.0
    WHEN grade = 'F' THEN 0.0
  END) AS DECIMAL(3, 2))) AS avg_grade
FROM Enrollments
WHERE course_id = 1;

-- Advanced Queries:
-- 9. List students taking more than 3 courses in the current semester.
SELECT Students.first_name, Students.last_name, COUNT(Enrollments.course_id) AS num_of_courses
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
JOIN CourseAssignments ON Enrollments.course_id = CourseAssignments.course_id
WHERE CourseAssignments.semester = 'Fall' AND CourseAssignments.year = 2024
GROUP BY Students.student_id
HAVING num_of_courses > 3;

-- 10. Generate a report of students with incomplete grades.
SELECT Students.first_name, Students.last_name, Courses.course_name, Enrollments.grade
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
JOIN Courses ON Enrollments.course_id = Courses.course_id
WHERE Enrollments.grade IS NULL OR Enrollments.grade = '';

-- 11. Show the student with the highest average grade across courses.
SELECT Students.first_name, Students.last_name, AVG(CAST((
  CASE 
    WHEN grade = 'A' THEN 4.0
    WHEN grade = 'B' THEN 3.0
    WHEN grade = 'C' THEN 2.0
    WHEN grade = 'D' THEN 1.0
    WHEN grade = 'F' THEN 0.0
  END) AS DECIMAL(3, 2))) AS avg_grade
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
GROUP BY Students.student_id
ORDER BY avg_grade DESC
LIMIT 1;

-- 12. Find the department with the most courses taught this year.
SELECT Courses.department, COUNT(Courses.course_id) AS num_of_courses
FROM Courses
JOIN CourseAssignments ON Courses.course_id = CourseAssignments.course_id
WHERE CourseAssignments.year = 2024
GROUP BY Courses.department
ORDER BY num_of_courses DESC
LIMIT 1;

-- 13. List courses with no student enrollments.
SELECT Courses.course_name, Courses.course_code
FROM Courses
LEFT JOIN Enrollments ON Courses.course_id = Enrollments.course_id
WHERE Enrollments.course_id IS NULL;

-- Step 4: Functions and Aggregates
-- 1. Create a function to calculate a student's age based on date_of_birth.
DELIMITER //

CREATE FUNCTION calculate_age(date_of_birth DATE)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE age INT;
    SET age = TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE());
    RETURN age;
END //

DELIMITER ;

DELIMITER //

-- 2. Create a stored procedure to enroll a student in a course.
CREATE PROCEDURE enroll_student(IN student_id INT, IN course_id INT, IN grade CHAR(2))
BEGIN
    DECLARE student_exists INT;
    DECLARE course_exists INT;

    -- Check if the student exists
    SELECT COUNT(*) INTO student_exists FROM Students WHERE student_id = student_id;

    -- Check if the course exists
    SELECT COUNT(*) INTO course_exists FROM Courses WHERE course_id = course_id;

    -- If both student and course exist, enroll the student
    IF student_exists > 0 AND course_exists > 0 THEN
        INSERT INTO Enrollments (student_id, course_id, grade)
        VALUES (student_id, course_id, grade);
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Student or Course does not exist';
    END IF;
END //

DELIMITER ;

-- 3. Use aggregate functions to show average grades by department.
SELECT Courses.department, AVG(CAST((
  CASE 
    WHEN Enrollments.grade = 'A' THEN 4.0
    WHEN Enrollments.grade = 'B' THEN 3.0
    WHEN Enrollments.grade = 'C' THEN 2.0
    WHEN Enrollments.grade = 'D' THEN 1.0
    WHEN Enrollments.grade = 'F' THEN 0.0
  END) AS DECIMAL(3, 2))) AS avg_grade
FROM Enrollments
JOIN Courses ON Enrollments.course_id = Courses.course_id
GROUP BY Courses.department;

-- Step 5: Constraints and Transactions
-- 1. Add a constraint to ensure unique student emails.
ALTER TABLE Students
ADD CONSTRAINT UNIQUE (email);

-- 2. Write a transaction to enroll a student if the course capacity isn't exceeded.
ALTER TABLE Courses
ADD capacity INT;

DELIMITER //

CREATE PROCEDURE enroll_student_to_course(IN student_id INT, IN course_id INT, IN grade CHAR(2))
BEGIN
    DECLARE current_enrollment INT;
    DECLARE course_capacity INT;

    -- Check current enrollment
    SELECT COUNT(*) INTO current_enrollment
    FROM Enrollments
    WHERE course_id = course_id;

    -- Check course capacity
    SELECT capacity INTO course_capacity
    FROM Courses
    WHERE course_id = course_id;

    -- If current enrollment is less than course capacity, enroll the student
    IF current_enrollment < course_capacity THEN
        INSERT INTO Enrollments (student_id, course_id, grade)
        VALUES (student_id, course_id, grade);
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Course capacity exceeded';
    END IF;
END //

DELIMITER ;

-- Step 6: Optimization and Indexes
-- 1. Create an index on the course_code to speed up searches.
CREATE INDEX idx_course_code ON Courses(course_code);

-- 2. Optimize a query using EXPLAIN to fetch students enrolled in a course.
SELECT Students.first_name, Students.last_name
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
WHERE Enrollments.course_id = 1;

EXPLAIN SELECT Students.first_name, Students.last_name
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
WHERE Enrollments.course_id = 1;

-- Step 7: Joins
-- 1. Write an inner join to fetch students and the courses they are enrolled in.
SELECT Students.first_name, Students.last_name, Courses.course_name, Courses.course_code
FROM Enrollments
JOIN Students ON Enrollments.student_id = Students.student_id
JOIN Courses ON Enrollments.course_id = Courses.course_id;

-- 2. Write a left join to show instructors and courses they teach.
SELECT Instructors.first_name, Instructors.last_name, Courses.course_name, Courses.course_code
FROM Instructors
LEFT JOIN CourseAssignments ON Instructors.instructor_id = CourseAssignments.instructor_id
LEFT JOIN Courses ON CourseAssignments.course_id = Courses.course_id;

-- 3. Write a query using union to list all students and instructors.
SELECT first_name, last_name, email, 'Student' AS role
FROM Students
UNION
SELECT first_name, last_name, email, 'Instructor' AS role
FROM Instructors;

-- Step 8: Final Challenge
-- Generate a report showing each student's name, email, major, courses enrolled, instructor, grades, and total credits.
SELECT 
    CONCAT(Students.first_name, ' ', Students.last_name) AS student_name,
    Students.email,
    Students.major,
    Courses.course_name,
    Courses.course_code,
    Courses.credits,
    CONCAT(Instructors.first_name, ' ', Instructors.last_name) AS instructor_name,
    Enrollments.grade
FROM 
    Students
JOIN 
    Enrollments ON Students.student_id = Enrollments.student_id
JOIN 
    Courses ON Enrollments.course_id = Courses.course_id
JOIN 
    CourseAssignments ON Courses.course_id = CourseAssignments.course_id
JOIN 
    Instructors ON CourseAssignments.instructor_id = Instructors.instructor_id
ORDER BY 
    Students.student_id, Courses.course_code;