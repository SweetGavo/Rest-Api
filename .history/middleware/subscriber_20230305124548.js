

const getSubscriber = async((req, res, next) => {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) return res.status(400).json({ message: 'Cannot find subscriber' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.subscriber = subscriber;
    next();
});

module.exports = getSubscriber;