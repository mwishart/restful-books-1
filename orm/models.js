const {DataTypes} = require('sequelize');
const connection = require('./demos-connection');


const Teams = connection.define('Teams',{
    team_name: {type: DataTypes.STRING, allowNull: false},
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }

},
{underscored: true,
    timestamps: false}); 
const Student = connection.define('Student', {
    first_name: { type: DataTypes.STRING, allowNull: false},
    last_name: { type: DataTypes.STRING, allowNull: false},
    cohort: DataTypes.INTEGER,
    grad_date: DataTypes.DATE,
    email: DataTypes.STRING,
    github_id: DataTypes.STRING,
    country: { type: DataTypes.STRING, allowNull: false},
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
},
{underscored: true,
timestamps: false});

module.exports = {Student, Teams};