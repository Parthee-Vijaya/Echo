import express from 'express';
import {
  getAllDocuments,
  getDocumentById,
  searchDocuments,
  getRecentDocuments
} from '../controllers/documentController.js';

const router = express.Router();

/**
 * GET /api/documents
 * Get all documents with optional filtering
 *
 * Query params: category, type, search
 * Response: { documents: array, total: number }
 */
router.get('/', getAllDocuments);

/**
 * GET /api/documents/recent
 * Get recent documents
 *
 * Query params: limit (default: 5)
 * Response: { documents: array }
 */
router.get('/recent', getRecentDocuments);

/**
 * GET /api/documents/search
 * Search documents
 *
 * Query params: q (search query)
 * Response: { documents: array, total: number }
 */
router.get('/search', searchDocuments);

/**
 * GET /api/documents/:id
 * Get a specific document by ID
 *
 * Response: { document: object }
 */
router.get('/:id', getDocumentById);

export default router;
