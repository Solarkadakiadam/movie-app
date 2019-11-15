const express = require("express");
const expressGraphQL = require("express-graphql");

const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

app.use(cors());

//db
const db = require("./helpers/db.js")();

//dotenv bu
//require("dotenv").config();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.listen(5000, () => {
  console.log("server is runnin");
});
