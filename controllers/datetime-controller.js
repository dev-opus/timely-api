const { parseUnix, parseEmptyDate } = require('../utils/datetime-parser');

function unixToDateObj(req, res, next) {
  const { unixcode } = req.params;

  if (!unixcode) {
    return res.status(400).json({
      error: 'Invalid Date',
    });
  }

  const dateObj = parseUnix(unixcode);

  res.status(200).json(dateObj);
}

function emptyToDateObj(req, res, next) {
  const dateObj = parseEmptyDate();

  res.status(200).json(dateObj);
}

module.exports = { unixToDateObj, emptyToDateObj };
