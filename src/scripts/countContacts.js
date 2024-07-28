import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  let parsedArr = [];
  try {
    const arr = await fs.readFile(PATH_DB);
    parsedArr = arr && JSON.parse(arr);
    return parsedArr.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
