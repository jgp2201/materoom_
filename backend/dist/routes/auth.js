"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const prisma_1 = require("../config/prisma");
const auth_1 = require("../middleware/auth");
exports.router = (0, express_1.Router)();
const signupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional(),
});
exports.router.post('/signup', async (req, res) => {
    const parse = signupSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.flatten() });
    const { email, password, name } = parse.data;
    const existing = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (existing)
        return res.status(409).json({ error: 'Email already in use' });
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const user = await prisma_1.prisma.user.create({ data: { email, passwordHash, name: name ?? null } });
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, process.env.JWT_SECRET || 'dev-secret-change', { expiresIn: '7d' });
    return res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });
});
const loginSchema = zod_1.z.object({ email: zod_1.z.string().email(), password: zod_1.z.string().min(6) });
exports.router.post('/login', async (req, res) => {
    const parse = loginSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.flatten() });
    const { email, password } = parse.data;
    const user = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (!user)
        return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!ok)
        return res.status(401).json({ error: 'Invalid credentials' });
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, process.env.JWT_SECRET || 'dev-secret-change', { expiresIn: '7d' });
    return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});
exports.router.get('/me', auth_1.requireAuth, async (req, res) => {
    const user = await prisma_1.prisma.user.findUnique({ where: { id: req.userId } });
    if (!user)
        return res.status(404).json({ error: 'Not found' });
    return res.json({ id: user.id, email: user.email, name: user.name });
});
//# sourceMappingURL=auth.js.map