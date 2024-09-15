const express = require('express');
const CourseController = require('../controllers/CourseController.js');
const validation = require('../../validations.js');

const router = express.Router();

const courseController = new CourseController();

router.post('/courses', validation.validate(validation.courseSchema), (req, res, next) => courseController.create(req, res, next));
router.get('/courses/:id', (req, res, next) => courseController.getOneById(req, res, next));
router.get('/courses', (req, res, next) => courseController.getAll(req, res, next));
router.put('/courses/:id', (req, res, next) => courseController.update(req, res, next));
router.delete('/courses/:id', (req, res, next) => courseController.erase(req, res, next));

module.exports = router;