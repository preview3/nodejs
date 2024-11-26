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
   npm install express body-parser dotenv
   ```

3. Create a `.env` file in the root directory and add the following content:
   ```sh
   PORT=3000
   ```
4. Create a main.js file in the root directory and add the following
   ```js
    // main.js
    const express = require('express');
    const bodyParser = require('body-parser');
    const dotenv = require('dotenv');

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000; 
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
    ```

### Running the Application

To start the application, run the following command:
```sh
    npm ruu dev
```