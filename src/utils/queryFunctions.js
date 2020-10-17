import { pool } from '../models/pool';
import {
  insertUrls,
  dropUrlsTable,
  createUrlTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropUrlsTable ]);
export const createTables = () => executeQueryArray([ createUrlTable ]);
export const insertIntoTables = () => executeQueryArray([ insertUrls ]);