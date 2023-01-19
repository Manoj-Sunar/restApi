const express = require("express");
const dotenv = require("dotenv");
const { urlencoded } = require("body-parser");
const modelSchema = require("./schema");
require("./DB");
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: false }));
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

app.post("/createapi", async (req, res) => {
  try {
    const userapi = new modelSchema(req.body);
    const restapi = await userapi.save();
    res.status(201).send(restapi);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getrestapi", async (req, res) => {
  try {
    const getdata = await modelSchema.find();
    res.send(getdata);
  } catch (err) {
    console.log(err);
  }
});

// For updating
app.patch("/updatedata/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await modelSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
  } catch (e) {
    res.status(404).send(data);
  }
});

//for deleting
app.delete("/deletedata/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteoperation = await modelSchema.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(404).send();
    } else {
      res.send(deleteoperation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
