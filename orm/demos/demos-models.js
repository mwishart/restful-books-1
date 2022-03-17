const { DataTypes } = require('sequelize');
const connection = require('./demos-connection');

const Student = connection.define(
  'Student',
  {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    cohort: DataTypes.INTEGER,
    gradDate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    githubId: DataTypes.STRING,
    country: { type: DataTypes.STRING, allowNull: false },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
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

const TeamsStudents = connection.define(
  'TeamsStudents',
  {
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: 'teamId',
      },
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Student,
        key: 'studentId',
      },
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamsStudentsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

Student.belongsToMany(Team, {
  through: { model: TeamsStudents },
  foreignKey: 'studentId',
});
Team.belongsToMany(Student, {
  through: { model: TeamsStudents },
  foreignKey: 'teamId',
});

module.exports = { Student, Team, TeamsStudents };
