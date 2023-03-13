import { parseUnix, parseEmptyDate } from '../utils/datetime-parser.js';

async function unixToDateObj(req, res, next) {
  const { unixcode } = req.params;

  if (!unixcode) {
    return res.status(400).json({
      error: 'Invalid Date',
    });
  }

  const dateObj = await parseUnix(unixcode);

  if (dateObj.utc === 'Invalid Date') {
    return res.status(400).json({
      error: 'Invalid Date',
    });
  }

  res.status(200).json(dateObj);
}

async function emptyToDateObj(req, res, next) {
  const dateObj = await parseEmptyDate();

  res.status(200).json(dateObj);
}

export default { unixToDateObj, emptyToDateObj };
