import express from 'express';
import { getAllNews, getNewsByType } from '../controllers/newsController.js';

const router = express.Router();

/**
 * GET /api/news
 * Get all news items
 *
 * Query params: limit, offset
 * Response: { news: array, total: number }
 */
router.get('/', getAllNews);

/**
 * GET /api/news/:type
 * Get news by type (beslutning, dagsorden, nyhed)
 *
 * Response: { news: array }
 */
router.get('/:type', getNewsByType);

export default router;
