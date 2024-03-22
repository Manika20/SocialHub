const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./assets"));
app.use(expressLayouts);
//extract link (style) and script from sub pages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//use express router
app.use("/", require("./routes/index"));
//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(port, async (err) => {
  if (err) {
    console.log(`error while connecting server ${err}`);
    return;
  }
  console.log("Server is running on port", port);
});
