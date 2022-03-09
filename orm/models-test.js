const { Student } = require('./models');

// Immediately invoked function expression IIFE (iffy)
(async function () {
  try {
    let students = await Student.findAll();
    for (let student of students) {
      console.log(`${student.firstName} ${student.lastName}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }
})();
