# Node.js Express Application

This is a simple Node.js application using Express, Body-Parser, and Dotenv.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:preview3/nodejs.git
   cd nodejs
   ```

2. Install the dependencies:

   ```sh
   npm install express mongoose dotenv -D nodemon
   ```

3. Create a `.env` file in the root directory and add the following content:
   ```sh
   PORT=3000
   DB_URI=mongodb://localhost:27017/
   ```
4. Create a main.js file in the root directory and add the following

   ```js
   // main.js
   require("dotenv").config();
   require("./config/db");
   const express = require("express");

   const studentsRoutes = require("./routes/students.route");

   const app = express();

   const port = process.env.PORT || 3000;
   app.use(express.json());

   app.use("/api", studentsRoutes);

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

5. Create a studet.model.js file in the root model/student.model.js and add the following

```js
const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
  branch: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
```

6. Create a db.js file in the root config/db.js and add the following

```js
const mongoose = require("mongoose");
const ENV_VAR = require("../utils/Env.js");

(() => {
  const { DB_URI } = ENV_VAR;
  if (DB_URI) {
    mongoose
      .connect(DB_URI)
      .then(() => console.log("Server connected to database"))
      .catch((error) => console.log("Connection Error: ", error));
  } else {
    console.log("DB_URI is empty");
  }
})();
```

6. Create a Env.js file in the root utils/env.js and add the following

```js
require("dotenv").config();

const ENV_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
};

module.exports = ENV_VAR;
```

7, in package.js add there scripts

````
"start": "node main.js",
"dev": "nodemon main.js"
```
8. Create a student.route.js file in the root routes/student.route.js and add the following

```js
   const express = require("express");
   const router = express.Router();
   const StudentController = require("../controllers/students.controller");

   router.post("/students", StudentController.createStudent);
   router.get("/students", StudentController.getAllStudents);
   router.get("/students/:id", StudentController.getStudentById);
   router.put("/students/:id", StudentController.updateStudent);
   router.delete("/students/:id", StudentController.deleteStudent);

   module.exports = router;
```

9. Create a student.controller.js file in the root controller/student.controller.js and add the following

```js
   const Student = require("../models/students.model");

   const getAllStudents = async (req, res) => {
   try {
      const students = await Student.find({});
      res.status(200).json(students);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
   };

   const getStudentById = async (req, res) => {
   try {
      const student = await Student.findById(req.params.id);
      if (!student) {
         return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(student);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
   };

   const createStudent = async (req, res) => {
   try {
      const newStudent = new Student(req.body);
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
   };

   const updateStudent = async (req, res) => {
   try {
      const updatedStudent = await Student.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      );
      if (!updatedStudent) {
         return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(updatedStudent);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
   };

   const deleteStudent = async (req, res) => {
   try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (!deletedStudent) {
         return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json({ message: "Student deleted successfully" });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
   };

   module.exports = {
   getAllStudents,
   getStudentById,
   createStudent,
   updateStudent,
   deleteStudent,
   };


```

### Running the Application

To start the application, run the following command:

```sh
    npm run dev
````
