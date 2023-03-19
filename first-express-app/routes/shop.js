const express = require('express');

const router = express.Router();

router.get('/product', (req, res) => {
    res.send('Product 1!')
});

module.exports = router;