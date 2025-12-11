"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const prisma_1 = require("../config/prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Create team request
const createTeamRequestSchema = zod_1.z.object({
    receiverId: zod_1.z.string(),
    message: zod_1.z.string().optional(),
});
router.post("/", auth_1.requireAuth, async (req, res) => {
    try {
        const { receiverId, message } = createTeamRequestSchema.parse(req.body);
        const senderId = req.userId;
        // Check if receiver exists
        const receiver = await prisma_1.prisma.user.findUnique({
            where: { id: receiverId },
        });
        if (!receiver) {
            return res.status(404).json({ error: "Receiver not found" });
        }
        // Check if request already exists
        const existingRequest = await prisma_1.prisma.teamRequest.findFirst({
            where: {
                senderId,
                receiverId,
                status: "pending",
            },
        });
        if (existingRequest) {
            return res.status(400).json({ error: "Request already sent" });
        }
        // Create team request
        const teamRequest = await prisma_1.prisma.teamRequest.create({
            data: {
                senderId,
                receiverId,
                message: message ?? null,
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
        res.json(teamRequest);
    }
    catch (error) {
        console.error("Error creating team request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Get sent requests
router.get("/sent", auth_1.requireAuth, async (req, res) => {
    try {
        const sentRequests = await prisma_1.prisma.teamRequest.findMany({
            where: {
                senderId: req.userId,
            },
            include: {
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json(sentRequests);
    }
    catch (error) {
        console.error("Error fetching sent requests:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Get received requests
router.get("/received", auth_1.requireAuth, async (req, res) => {
    try {
        const receivedRequests = await prisma_1.prisma.teamRequest.findMany({
            where: {
                receiverId: req.userId,
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json(receivedRequests);
    }
    catch (error) {
        console.error("Error fetching received requests:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Update request status (accept/reject)
const updateRequestSchema = zod_1.z.object({
    status: zod_1.z.enum(["accepted", "rejected"]),
});
router.put("/:id", auth_1.requireAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = updateRequestSchema.parse(req.body);
        // Check if request exists and user is the receiver
        const teamRequest = await prisma_1.prisma.teamRequest.findUnique({
            where: { id },
            include: {
                receiver: true,
            },
        });
        if (!teamRequest) {
            return res.status(404).json({ error: "Request not found" });
        }
        if (teamRequest.receiverId !== req.userId) {
            return res.status(403).json({ error: "Unauthorized" });
        }
        // Update request status
        const updatedRequest = await prisma_1.prisma.teamRequest.update({
            where: { id },
            data: { status },
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
        res.json(updatedRequest);
    }
    catch (error) {
        console.error("Error updating team request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Delete team request
router.delete("/:id", auth_1.requireAuth, async (req, res) => {
    try {
        const { id } = req.params;
        // Check if request exists and user is the sender
        const teamRequest = await prisma_1.prisma.teamRequest.findUnique({
            where: { id },
        });
        if (!teamRequest) {
            return res.status(404).json({ error: "Request not found" });
        }
        if (teamRequest.senderId !== req.userId) {
            return res.status(403).json({ error: "Unauthorized" });
        }
        // Delete request
        await prisma_1.prisma.teamRequest.delete({
            where: { id },
        });
        res.json({ message: "Request deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting team request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = router;
//# sourceMappingURL=teamRequests.js.map