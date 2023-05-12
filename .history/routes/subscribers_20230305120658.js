const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

router.get("/", async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
    res.send(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/",  async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json
    } catch (error) {
        
    }
});

router.put("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});
module.exports = router;
