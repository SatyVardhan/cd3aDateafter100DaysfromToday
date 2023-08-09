const express = require("express");
const dateTime = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const requiredDate = dateTime(
    new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
    100
  );
  response.send(
    `${requiredDate.getDate()}/${
      requiredDate.getMonth() + 1
    }/${requiredDate.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
