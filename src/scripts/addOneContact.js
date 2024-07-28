import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  let parsedArr = [];
  try {
    const arrayContacts = await fs.readFile(PATH_DB);
    parsedArr = arrayContacts && JSON.parse(arrayContacts);
    const user = createFakeContact();
    parsedArr.push(user);
    await fs.writeFile(PATH_DB, JSON.stringify(parsedArr));
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
