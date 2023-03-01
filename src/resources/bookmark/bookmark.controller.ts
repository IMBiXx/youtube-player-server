import { Router } from 'express';
import { BookmarkService } from '~/resources/bookmark/bookmark.service';
/**
 * Create route
 */
const BookmarkController = Router();

/**
 * Service instance
 */
const service = new BookmarkService();

/**
 * Find all bookmarks
 */
BookmarkController.get('/', (req, res) => {
  return res.status(200).json(service.findAll());
});

/**
 * Create an bookmark
 */
BookmarkController.post('/', (req, res) => {
  const createdVideo = service.create(req.body);

  return res.status(201).json(createdVideo);
});

export { BookmarkController };
