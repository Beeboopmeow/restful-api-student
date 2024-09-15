const express = require('express');
const students = require('./studentRoutes.js');
const courses = require('./courseRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        students,
        courses
    );
};