import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async (number) => {
  let parsedArr = [];
  try {
    const arrContacts = await fs.readFile(PATH_DB);
    parsedArr = arrContacts && JSON.parse(arrContacts);
    for (let i = 0; i < number; i++) {
      const user = createFakeContact();
      parsedArr.push(user);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsedArr));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
