const {DataTypes} = require('sequelize');
const connection = require('./demos-connection');



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
    timestamps: false}
);

const Team = connection.define(
  'Team',
  {
    teamId: {
      field: 'team_id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    teamName: {
      field: 'team_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'teams', timestamps: false }
);

module.exports = { Student, Team };
