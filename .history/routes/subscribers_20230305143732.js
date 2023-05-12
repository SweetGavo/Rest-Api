const express = require("express");
const res = require("express/lib/response");
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

router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber);
});

router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



router.put("/", getSubscriber, (req, res) => {});

router.patch("/:id", getSubscriber, (req, res) => {});

router.delete("/:id", getSubscriber, async (req, res) => {
  try {
      await res.subscriber.
    res.status(201).json({ message: "Subscriber Successfully Deleted..." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
