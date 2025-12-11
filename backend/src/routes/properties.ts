import { Router } from 'express';
import { prisma } from '../config/prisma';

export const router = Router();

router.get('/', async (_req, res) => {
  const items = await prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const prop = await prisma.property.findUnique({ where: { id: req.params.id } });
  if (!prop) return res.status(404).json({ error: 'Not found' });
  res.json(prop);
});


