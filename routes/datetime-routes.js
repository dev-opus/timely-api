const express = require('express');
const router = express.Router();

const {
  unixToDateObj,
  emptyToDateObj,
} = require('../controllers/datetime-controller');

// with "/:unixcode" parameter
router.get('/:unixcode', unixToDateObj);

// without "/:unixcode" parameter
router.get('/', emptyToDateObj);

module.exports = router;
