"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = require("./routes/auth");
const preferences_1 = require("./routes/preferences");
const properties_1 = require("./routes/properties");
const requirements_1 = require("./routes/requirements");
const listings_1 = require("./routes/listings");
const teamRequests_1 = __importDefault(require("./routes/teamRequests"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/health', (_req, res) => {
    res.json({ ok: true });
});
app.use('/api/auth', auth_1.router);
app.use('/api/preferences', preferences_1.router);
app.use('/api/properties', properties_1.router);
app.use('/api/requirements', requirements_1.router);
app.use('/api/listings', listings_1.router);
app.use('/api/team-requests', teamRequests_1.default);
const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map