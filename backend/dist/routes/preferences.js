"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_1 = require("../config/prisma");
const auth_1 = require("../middleware/auth");
exports.router = (0, express_1.Router)();
const prefSchema = zod_1.z.object({
    budgetMin: zod_1.z.number().int().nonnegative().optional(),
    budgetMax: zod_1.z.number().int().nonnegative().optional(),
    preferredLocation: zod_1.z.string().optional(),
    preferenceLabels: zod_1.z.array(zod_1.z.string()).optional(),
    bedrooms: zod_1.z.number().int().nonnegative().optional(),
    bathrooms: zod_1.z.number().int().nonnegative().optional(),
});
exports.router.get('/', auth_1.requireAuth, async (req, res) => {
    const pref = await prisma_1.prisma.preference.findUnique({ where: { userId: req.userId } });
    return res.json(pref ?? {});
});
exports.router.post('/', auth_1.requireAuth, async (req, res) => {
    const parse = prefSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.flatten() });
    const data = parse.data;
    const existing = await prisma_1.prisma.preference.findUnique({ where: { userId: req.userId } });
    const pref = existing
        ? await prisma_1.prisma.preference.update({
            where: { userId: req.userId },
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
        : await prisma_1.prisma.preference.create({
            data: {
                ...data,
                preferenceLabels: data.preferenceLabels?.join(',') ?? null,
                budgetMin: data.budgetMin ?? null,
                budgetMax: data.budgetMax ?? null,
                preferredLocation: data.preferredLocation ?? null,
                bedrooms: data.bedrooms ?? null,
                bathrooms: data.bathrooms ?? null,
                userId: req.userId,
            },
        });
    return res.json(pref);
});
//# sourceMappingURL=preferences.js.map