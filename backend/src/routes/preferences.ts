import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { requireAuth, AuthenticatedRequest } from '../middleware/auth';

export const router = Router();

const prefSchema = z.object({
  budgetMin: z.number().int().nonnegative().optional(),
  budgetMax: z.number().int().nonnegative().optional(),
  preferredLocation: z.string().optional(),
  preferenceLabels: z.array(z.string()).optional(),
  bedrooms: z.number().int().nonnegative().optional(),
  bathrooms: z.number().int().nonnegative().optional(),
});

router.get('/', requireAuth, async (req: AuthenticatedRequest, res) => {
  const pref = await prisma.preference.findUnique({ where: { userId: req.userId! } });
  return res.json(pref ?? {});
});

router.post('/', requireAuth, async (req: AuthenticatedRequest, res) => {
  const parse = prefSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });
  const data = parse.data;
  const existing = await prisma.preference.findUnique({ where: { userId: req.userId! } });
  const pref = existing
    ? await prisma.preference.update({
        where: { userId: req.userId! },
        data: {
          ...data,
          preferenceLabels: data.preferenceLabels?.join(',') ?? null,
          budgetMin: data.budgetMin ?? null,
          budgetMax: data.budgetMax ?? null,
          preferredLocation: data.preferredLocation ?? null,
          bedrooms: data.bedrooms ?? null,
          bathrooms: data.bathrooms ?? null,
        },
      })
    : await prisma.preference.create({
        data: {
          ...data,
          preferenceLabels: data.preferenceLabels?.join(',') ?? null,
          budgetMin: data.budgetMin ?? null,
          budgetMax: data.budgetMax ?? null,
          preferredLocation: data.preferredLocation ?? null,
          bedrooms: data.bedrooms ?? null,
          bathrooms: data.bathrooms ?? null,
          userId: req.userId!,
        },
      });
  return res.json(pref);
});


