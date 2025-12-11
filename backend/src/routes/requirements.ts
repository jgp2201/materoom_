import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { requireAuth, AuthenticatedRequest } from '../middleware/auth';

export const router = Router();

const createSchema = z.object({
  location: z.string().min(1),
  approxRent: z.number().int().nonnegative(),
  lookingFor: z.enum(['Male', 'Female', 'Any']),
  occupancy: z.enum(['Single', 'Shared', 'Any']),
  highlights: z.array(z.string()).optional(),
  interestedInPg: z.boolean(),
  phoneVisibility: z.enum(['public', 'private']),
  interestedInTeams: z.boolean(),
  description: z.string().min(1),
});

router.post('/', requireAuth, async (req: AuthenticatedRequest, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const data = parsed.data;
  const record = await prisma.requirement.create({
    data: {
      userId: req.userId!,
      location: data.location,
      approxRent: data.approxRent,
      lookingFor: data.lookingFor,
      occupancy: data.occupancy,
      highlights: data.highlights?.join(',') ?? null,
      interestedInPg: data.interestedInPg,
      phoneVisibility: data.phoneVisibility,
      interestedInTeams: data.interestedInTeams,
      description: data.description,
    },
  });
  res.status(201).json(record);
});

router.get('/', async (_req, res) => {
  try {
    const items = await prisma.requirement.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    const userIds = Array.from(new Set(items.map((i) => i.userId)));
    const prefs = await prisma.preference.findMany({
      where: { userId: { in: userIds } },
      select: { userId: true, preferenceLabels: true },
    });
    const prefByUser: Record<string, string[] | undefined> = {};
    for (const p of prefs) {
      prefByUser[p.userId] = p.preferenceLabels?.split(',').filter(Boolean);
    }

    const enriched = items.map((item) => ({
      ...item,
      user: {
        id: item.user?.id,
        name: item.user?.name ?? (item.user?.email ? item.user.email.split('@')[0] : ''),
        email: item.user?.email,
      },
      preferenceLabels: prefByUser[item.userId] ?? [],
      highlights: item.highlights?.split(',').filter(Boolean) ?? [],
    }));

    res.json(enriched);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params as { id: string };
    const item = await prisma.requirement.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ error: 'Not found' });
    const user = await prisma.user.findUnique({ where: { id: item.userId } });
    const pref = await prisma.preference.findUnique({ where: { userId: item.userId } });
    res.json({
      ...item,
      user: { id: user?.id, name: user?.name ?? (user?.email ? user.email.split('@')[0] : ''), email: user?.email },
      preferenceLabels: pref?.preferenceLabels?.split(',').filter(Boolean) ?? [],
      highlights: item.highlights?.split(',').filter(Boolean) ?? [],
    });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

// Update requirement (owner only)
router.put('/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params as { id: string };
    const existing = await prisma.requirement.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Not found' });
    if (existing.userId !== req.userId) return res.status(403).json({ error: 'Forbidden' });

    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
    const data = parsed.data;

    const updated = await prisma.requirement.update({
      where: { id },
      data: {
        location: data.location,
        approxRent: data.approxRent,
        lookingFor: data.lookingFor,
        occupancy: data.occupancy,
        highlights: data.highlights?.join(',') ?? null,
        interestedInPg: data.interestedInPg,
        phoneVisibility: data.phoneVisibility,
        interestedInTeams: data.interestedInTeams,
        description: data.description,
      },
    });
    return res.json(updated);
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

// Delete requirement (owner only)
router.delete('/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params as { id: string };
    const existing = await prisma.requirement.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Not found' });
    if (existing.userId !== req.userId) return res.status(403).json({ error: 'Forbidden' });
    await prisma.requirement.delete({ where: { id } });
    return res.json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal error' });
  }
});


