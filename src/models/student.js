'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    
    static associate(models) {
      Student.belongsToMany(models.Course, {
        through: 'Student_Course',
        foreignKey: 'student_id'
      });
    }
  }
  Student.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};