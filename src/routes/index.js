import { Router } from 'express';
import db from '../database/db';

const router = Router();

/* Test Endpoint */
router.get('/test', (req, res) => {
  res.json({ title: 'NodeJs Club is awesome' });
});

/* Test Database Connection */
router.get('/connection', async (req, res) => {
  const query = 'SELECT * FROM current_catalog;';
  const queries = await db.query(query);
  res.json({
    databasename: queries.rows[0].current_catalog,
    command: queries.command,
    catalogname: queries.fields[0].name,
    format: queries.fields[0].format,
    message: 'Database was connected successfully',
  });
});

export default router;
