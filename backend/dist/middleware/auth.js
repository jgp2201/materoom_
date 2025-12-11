"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authHeader.slice('Bearer '.length);
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'dev-secret-change');
        req.userId = payload.sub;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
//# sourceMappingURL=auth.js.map