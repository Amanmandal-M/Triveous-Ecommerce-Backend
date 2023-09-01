const express = require("express");
const cors = require("cors");
const colors = require("colors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;



// --------------->>>>>>>> Locations <<<<<<<<-------------------
// Configs Location
const { connectToDatabase } = require("./configs/db");


// Routers Location
const userRouter = require("./routes/userRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");


// Middleware Location



// Middlewares
app.use(express.json());
app.use(cors());

// Set the view engine to EJS
app.set("view engine", "ejs");


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
app.use('/auth', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
// app.use('/carts', cartRouter);
// app.use('/orders', orderRouter);


// Server Listening
(async () => {
  try {
    await connectToDatabase();

    // Start Server
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`.blue);
    });
  } catch (error) {
    console.error(colors.red(`Database connection error:`, error.message));
  }
})();
