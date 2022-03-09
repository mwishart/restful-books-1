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
    github_id: DataTypes.STRING,
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

module.exports = { Student };
