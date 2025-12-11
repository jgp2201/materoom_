import { Router } from "express";
import { z } from "zod";
import { prisma } from "../config/prisma";
import { requireAuth, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

// Create team request
const createTeamRequestSchema = z.object({
  receiverId: z.string(),
  message: z.string().optional(),
});

router.post("/", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { receiverId, message } = createTeamRequestSchema.parse(req.body);
    const senderId = req.userId!;

    // Check if receiver exists
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      return res.status(404).json({ error: "Receiver not found" });
    }

    // Check if request already exists
    const existingRequest = await prisma.teamRequest.findFirst({
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
    const teamRequest = await prisma.teamRequest.create({
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
  } catch (error) {
    console.error("Error creating team request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get sent requests
router.get("/sent", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const sentRequests = await prisma.teamRequest.findMany({
      where: {
        senderId: req.userId!,
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
  } catch (error) {
    console.error("Error fetching sent requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get received requests
router.get("/received", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const receivedRequests = await prisma.teamRequest.findMany({
      where: {
        receiverId: req.userId!,
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
  } catch (error) {
    console.error("Error fetching received requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update request status (accept/reject)
const updateRequestSchema = z.object({
  status: z.enum(["accepted", "rejected"]),
});

router.put("/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params as { id: string };
    const { status } = updateRequestSchema.parse(req.body);

    // Check if request exists and user is the receiver
    const teamRequest = await prisma.teamRequest.findUnique({
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
    const updatedRequest = await prisma.teamRequest.update({
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
  } catch (error) {
    console.error("Error updating team request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete team request
router.delete("/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params as { id: string };

    // Check if request exists and user is the sender
    const teamRequest = await prisma.teamRequest.findUnique({
      where: { id },
    });

    if (!teamRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    if (teamRequest.senderId !== req.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Delete request
    await prisma.teamRequest.delete({
      where: { id },
    });

    res.json({ message: "Request deleted successfully" });
  } catch (error) {
    console.error("Error deleting team request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
