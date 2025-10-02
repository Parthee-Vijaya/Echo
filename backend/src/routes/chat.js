import express from 'express';
import { sendChatMessage, getChatHistory } from '../controllers/chatController.js';

const router = express.Router();

/**
 * POST /api/chat/message
 * Send a message to the AI assistant
 *
 * Body: { message: string, userId?: string }
 * Response: { reply: string, confidence: number, sources?: array }
 */
router.post('/message', sendChatMessage);

/**
 * GET /api/chat/history/:userId
 * Get chat history for a user
 *
 * Response: { messages: array }
 */
router.get('/history/:userId', getChatHistory);

export default router;
