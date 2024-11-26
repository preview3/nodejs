const express = require("express");

const router = express.Router();
const StudentController = require("../controllers/students.controller");

router.post("/students", StudentController.createStudent);
router.get("/students", StudentController.getAllStudents);
router.get("/students/:id", StudentController.getStudentById);
router.put("/students/:id", StudentController.updateStudent);
router.delete("/students/:id", StudentController.deleteStudent);

module.exports = router;
