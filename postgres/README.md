
Project Initialization
Step 1: Initialize Node.js Project

Open a terminal and create a new directory for the project, then navigate to it:

mkdir my-sequelize-api
cd my-sequelize-api

Run npm init -y to initialize a new Node.js project:

`sh
npm init -y
`

This will create a package.json file with the default settings.
Install Dependencies
Step 2: Install Required Packages

You need to install the following dependencies:

    Sequelize: ORM for interacting with databases.
    pg: PostgreSQL client for Node.js.
    Express: Web framework for building the API.
    dotenv: To manage environment variables.
    body-parser: To parse incoming JSON request bodies.

Run the following command to install these dependencies:

`sh
npm install sequelize pg express dotenv body-parser
`
For development, you can install nodemon to automatically restart the server on code changes:

`sh
npm install --save-dev nodemon
`
Create Database and Sequelize Models
Step 3: Set Up .env File for Database Configuration

Create a .env file in the root directory to store your PostgreSQL credentials:

`sh
.env

DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase
DB_DIALECT=postgres`

Make sure to replace the values with your actual PostgreSQL credentials.
Step 4: Configure Sequelize

In the config folder, create a file named config.js to configure Sequelize and use the environment variables from the .env file.

config/config.js

`sh
import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
`

Step 5: Create Sequelize Models

In the models folder, create an index.js file to define your User model and configure the Sequelize connection.

models/index.js

`sh
import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(config.development);

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Error syncing database:', err);
});

export { sequelize, User };

`

Set Up Express Routes
Step 6: Create the Express Server

In the root directory, create a file named app.js for setting up the Express server and routes.

app.js

`sh
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize, User } from './models/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

`

## Using cURL to Interact with the API

### Step 7: Use cURL to Make API Requests

Once the server is running, you can use cURL to interact with the API.

#### 1. Create a User (POST Request)

To create a new user, use the following cURL command:

`sh
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "johndoe@example.com"}'
`

#### 2. Get All Users (GET Request)

To retrieve all users, use this cURL command:

`sh
curl -X GET http://localhost:3000/api/users
`

## Project Structure

Here’s the overall structure of the project:

`sh
my-sequelize-api/
│
├── .env              # Environment variables for DB configuration
├── app.js            # Express server and routes
├── config/
│   └── config.js     # Sequelize configuration
├── models/
│   └── index.js     # Sequelize models and database setup
├── package.json      # Project metadata and dependencies
├── nodemon.json      # Configuration file for nodemon (optional)
├── node_modules/     # Node.js dependencies
└── README.md         # Project documentation
`

