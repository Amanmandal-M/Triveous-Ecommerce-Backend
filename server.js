const express = require("express");
const cors = require("cors");
const colors = require("colors");
const path = require('path');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;



// --------------->>>>>>>> Locations <<<<<<<<-------------------
// Configs Location


// Models Location


// Routers Location


// Middleware Location



// Middlewares
app.use(express.json());
app.use(cors());

// Set the view engine to EJS
app.set("view engine", "ejs");

// Configure static file serving
app.use(express.static(path.join(__dirname, 'public')));


// --------------->>>>>>>> Swagger <<<<<<<<-------------------
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Triveous Ecommerce Backend",
      version: "1.0.0",
      description:
        "This is Ecommerce App so user can register with valid credentials and login with valid credentials and after authentication user can see products and purchase any product with their category, if user wants to view the single product items etc. they can also view and if user wants to edit anything so they can also do this in the cart section.",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./docs/*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


// Home route
app.get("/", (req, res) => {
  res.render("home/home");
});


// Routes (API Endpoints)


// Server Listening
app.listen(PORT, async () => {
  try {
    console.log(colors.green(`Connected to Database`));
    console.log(colors.green(`Server Running on port ${process.env.PORT}`));
  } catch (error) {
    console.error(
      colors.red(`Error while listening or Database: `, error.message)
    );
  }
});