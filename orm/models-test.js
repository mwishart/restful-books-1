const connection = require('./demos-connection');
const { Student, Team, TeamsStudents } = require('./models');

// Immediately invoked function expression IIFE (iffy)
(async function () {
  try {
    let students = await Student.findAll();
    for (let student of students) {
      console.log(`${student.firstName} ${student.lastName}`);
      let teams = await student.getTeams();
      let teamNames = teams.map((team) => team.teamName);
      console.log('\tTeams: ', teamNames);
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
  try {
    let ts = await TeamsStudents.findAll({
      limit: 10,
    });
    for (let rel of ts) {
      console.log(`${rel.teamId} ${rel.studentId}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }

  connection.close();
})();
