HackerLand University has the following grading policy:

Every student receives a in the inclusive range from 0 to 100.
Any less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples
grade = 84 round to 85 (85 - 84 is less than 3)
grade = 29 do not round to 30 (result is less than 40)
grade is 57 do not round to 60 (60 - 57 is 3 or higher)
Given the initial value of for each of Sam's students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer, , the number of students.
Each line of the subsequent lines contains a single integer, .

Constraints

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33
Explanation 0

image

Student received a , and the next multiple of from is . Since , the student's grade is rounded to .
Student received a , and the next multiple of from is . Since , the grade will not be modified and the student's final grade is .
Student received a , and the next multiple of from is . Since , the student's grade will be rounded to .
Student received a grade below , so the grade will not be modified and the student's final grade is .
