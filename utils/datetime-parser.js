import { writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function parseUnix(unixcode) {
  const utcString = new Date(+unixcode).toUTCString();

  await writeFile(
    path.resolve('.', 'logs/log.txt'),
    'INFO: Parsed UnixDate to UTCDate\n',
    { flag: 'a+' }
  );

  return {
    unix: unixcode,
    utc: utcString,
  };
}

export async function parseEmptyDate() {
  await writeFile(
    path.resolve('.', 'logs/log.txt'),
    'INFO: Parsed Empty Date to Unix and UTC Dates\n',
    { flag: 'a+' }
  );

  return {
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  };
}
