const { Student, Team } = require('./models');

// Immediately invoked function expression IIFE (iffy)
(async function () {
  try {
    let students = await Student.findAll();
    for (let student of students) {
      console.log(`${student.first_name} ${student.last_name}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }

  try {
    let teams = await Team.findAll();
    for (let team of teams) {
      console.log(`${team.teamId} ${team.teamName}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }
})();


