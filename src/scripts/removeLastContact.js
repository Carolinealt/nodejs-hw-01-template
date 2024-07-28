import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  let parsedArr = [];
  try {
    const arrContacts = await fs.readFile(PATH_DB);
    parsedArr = arrContacts && JSON.parse(arrContacts);
    parsedArr.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(parsedArr));
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
