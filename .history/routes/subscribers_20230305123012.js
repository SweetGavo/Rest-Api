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

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/",  async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
    
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
});



router.put("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => { });


const getSubscriber = async (req, res, next => {
    const subscriber
    try {
        subscriber = await Subscriber.find(req.params.id)
        if(subscriber == null) return res.status(400)
    } catch (error) {
        
    }

})

module.exports = router;
