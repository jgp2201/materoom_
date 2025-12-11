"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_1 = require("../config/prisma");
const auth_1 = require("../middleware/auth");
exports.router = (0, express_1.Router)();
const createSchema = zod_1.z.object({
    location: zod_1.z.string().min(1),
    approxRent: zod_1.z.number().int().nonnegative(),
    lookingFor: zod_1.z.enum(['Male', 'Female', 'Any']),
    occupancy: zod_1.z.enum(['Single', 'Shared', 'Any']),
    highlights: zod_1.z.array(zod_1.z.string()).optional(),
    interestedInPg: zod_1.z.boolean(),
    phoneVisibility: zod_1.z.enum(['public', 'private']),
    interestedInTeams: zod_1.z.boolean(),
    description: zod_1.z.string().min(1),
});
exports.router.post('/', auth_1.requireAuth, async (req, res) => {
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.flatten() });
    const data = parsed.data;
    const record = await prisma_1.prisma.requirement.create({
        data: {
            userId: req.userId,
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
exports.router.get('/', async (_req, res) => {
    try {
        const items = await prisma_1.prisma.requirement.findMany({
            orderBy: { createdAt: 'desc' },
            include: { user: { select: { id: true, name: true, email: true } } },
        });
        const userIds = Array.from(new Set(items.map((i) => i.userId)));
        const prefs = await prisma_1.prisma.preference.findMany({
            where: { userId: { in: userIds } },
            select: { userId: true, preferenceLabels: true },
        });
        const prefByUser = {};
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
    }
    catch (err) {
        res.status(500).json({ error: err?.message || 'Internal error' });
    }
});
exports.router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await prisma_1.prisma.requirement.findUnique({ where: { id } });
        if (!item)
            return res.status(404).json({ error: 'Not found' });
        const user = await prisma_1.prisma.user.findUnique({ where: { id: item.userId } });
        const pref = await prisma_1.prisma.preference.findUnique({ where: { userId: item.userId } });
        res.json({
            ...item,
            user: { id: user?.id, name: user?.name ?? (user?.email ? user.email.split('@')[0] : ''), email: user?.email },
            preferenceLabels: pref?.preferenceLabels?.split(',').filter(Boolean) ?? [],
            highlights: item.highlights?.split(',').filter(Boolean) ?? [],
        });
    }
    catch (err) {
        res.status(500).json({ error: err?.message || 'Internal error' });
    }
});
// Update requirement (owner only)
exports.router.put('/:id', auth_1.requireAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const existing = await prisma_1.prisma.requirement.findUnique({ where: { id } });
        if (!existing)
            return res.status(404).json({ error: 'Not found' });
        if (existing.userId !== req.userId)
            return res.status(403).json({ error: 'Forbidden' });
        const parsed = createSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error.flatten() });
        const data = parsed.data;
        const updated = await prisma_1.prisma.requirement.update({
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
    }
    catch (err) {
        return res.status(500).json({ error: err?.message || 'Internal error' });
    }
});
// Delete requirement (owner only)
exports.router.delete('/:id', auth_1.requireAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const existing = await prisma_1.prisma.requirement.findUnique({ where: { id } });
        if (!existing)
            return res.status(404).json({ error: 'Not found' });
        if (existing.userId !== req.userId)
            return res.status(403).json({ error: 'Forbidden' });
        await prisma_1.prisma.requirement.delete({ where: { id } });
        return res.json({ success: true });
    }
    catch (err) {
        return res.status(500).json({ error: err?.message || 'Internal error' });
    }
});
//# sourceMappingURL=requirements.js.map