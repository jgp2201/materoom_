import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { requireAuth, AuthenticatedRequest } from '../middleware/auth';

export const router = Router();

const createSchema = z.object({
  location: z.string().min(1),
  approxRent: z.number().int().nonnegative(),
  occupancy: z.enum(['Single', 'Shared', 'Any']),
  highlights: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
  lookingFor: z.enum(['Male', 'Female', 'Any']).optional(),
  phoneVisibility: z.enum(['public', 'private']),
  description: z.string().min(1),
});

router.post('/', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    console.log('POST /api/listings body:', req.body);
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: 'Validation error', details: parsed.error.flatten() });
    const data = parsed.data;
    const listing = await prisma.roomListing.create({
      data: {
        userId: req.userId!,
        location: data.location,
        approxRent: data.approxRent,
        occupancy: data.occupancy,
        highlights: data.highlights?.join(',') ?? null,
        amenities: data.amenities?.join(',') ?? null,
        lookingFor: data.lookingFor ?? null,
        phoneVisibility: data.phoneVisibility,
        description: data.description,
      },
    });
    res.status(201).json(listing);
  } catch (err: any) {
    console.error('Create listing failed:', err);
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const items = await prisma.roomListing.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    // Fetch preferences for all unique users in one go
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
      amenities: item.amenities?.split(',').filter(Boolean) ?? [],
    }));

    res.json(enriched);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid id' });
    }
    const item = await prisma.roomListing.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ error: 'Not found' });
    const user = await prisma.user.findUnique({ where: { id: item.userId } });
    const pref = await prisma.preference.findUnique({ where: { userId: item.userId } });
    res.json({
      ...item,
      user: { id: user?.id, name: user?.name ?? (user?.email ? user.email.split('@')[0] : ''), email: user?.email },
      preferenceLabels: pref?.preferenceLabels?.split(',').filter(Boolean) ?? [],
      highlights: item.highlights?.split(',').filter(Boolean) ?? [],
      amenities: item.amenities?.split(',').filter(Boolean) ?? [],
    });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

// Update listing (owner only)
router.put('/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const id = req.params.id;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid id' });
    }
    const existing = await prisma.roomListing.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Not found' });
    if (existing.userId !== req.userId) return res.status(403).json({ error: 'Forbidden' });
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: 'Validation error', details: parsed.error.flatten() });
    const data = parsed.data;
    const updated = await prisma.roomListing.update({
      where: { id },
      data: {
        location: data.location,
        approxRent: data.approxRent,
        occupancy: data.occupancy,
        highlights: data.highlights?.join(',') ?? null,
        amenities: data.amenities?.join(',') ?? null,
        lookingFor: data.lookingFor ?? null,
        phoneVisibility: data.phoneVisibility,
        description: data.description,
      },
    });
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});

// Delete listing (owner only)
router.delete('/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const id = req.params.id;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid id' });
    }
    const existing = await prisma.roomListing.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Not found' });
    if (existing.userId !== req.userId) return res.status(403).json({ error: 'Forbidden' });
    await prisma.roomListing.delete({ where: { id } });
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Internal error' });
  }
});


