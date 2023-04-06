const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes")
const userRouter = require("./routes/productRoutes")
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan("dev"));

}

app.use(express.json());
app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});
//middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Route
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
