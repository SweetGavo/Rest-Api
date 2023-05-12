const express = require("express");
const router = express.Router();
const Subscriber = require("./models/subscriber");

router.get("/", async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
  } catch (error) {
      res.json
  }
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
router.post("/", (req, res) => {});

router.put("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});
module.exports = router;
