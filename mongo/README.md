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

### Running the Application

To start the application, run the following command:

```sh
    npm run dev
````
