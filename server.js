const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to database");
  });

// const testProduct=new TEST({
//   name: "test product",
//   cost: 100,
//   salePrice: 120,
//   quantity: 10,
// })
// testProduct.save().then(doc=>{
//   console.log(doc)
// }).catch(err=>{
//   console.log(err)
// })


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
