async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(400).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}
module.exports = 