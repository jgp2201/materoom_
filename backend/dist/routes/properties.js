"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const prisma_1 = require("../config/prisma");
exports.router = (0, express_1.Router)();
exports.router.get('/', async (_req, res) => {
    const items = await prisma_1.prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(items);
});
exports.router.get('/:id', async (req, res) => {
    const prop = await prisma_1.prisma.property.findUnique({ where: { id: req.params.id } });
    if (!prop)
        return res.status(404).json({ error: 'Not found' });
    res.json(prop);
});
//# sourceMappingURL=properties.js.map