function parseUnix(unixcode) {
  const utcString = new Date(+unixcode).toUTCString();

  return {
    unix: unixcode,
    utc: utcString,
  };
}

function parseEmptyDate() {
  return {
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  };
}

module.exports = { parseUnix, parseEmptyDate };
