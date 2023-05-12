const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get("/:id", (req, res) => {
res.
});
router.post("/", (req, res) => { });

router.put("/", (req, res) => { });

router.patch("/:id", (req, res) => { });

router.delete("/:id", (req, res) => {});
module.exports = router