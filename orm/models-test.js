const connection = require('./demos-connection');
const {Student, Teams} = require('./models');

(async function() { 
    try{
        let students = await Student.findAll();
        for(let student of students){
            console.log(`${student.first_name} ${student.last_name}`);

        }      
}
    catch(error){
        console.error('Something went wrong with the database:', error);
    }
})();

(async function() { 
    try{
        let teams = await Teams.findAll();
        for(let team of teams){
            console.log(`${team.team_name}`);

        }      
}
    catch(error){
        console.error('Something went wrong with the database:', error);
    }
})(); 
