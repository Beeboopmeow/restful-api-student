const express = require('express');
const StudentController = require('../controllers/StudentController.js');
const validation = require('../../validations.js');

const router = express.Router();

// router.get('/', (req, res) => { 
//     res.send('Hello World!');
// });
const studentController = new StudentController();

router.post('/students', validation.validate(validation.studentSchema), (req, res, next) => studentController.create(req, res, next));
router.get('/students/:id', (req, res, next) => studentController.getOneById(req, res, next));
router.get('/students', (req, res, next) => studentController.getAll(req, res, next));
router.put('/students/:id', (req, res, next) => studentController.update(req, res, next));
router.delete('/students/:id', (req, res, next) => studentController.erase(req, res, next));

module.exports = router;