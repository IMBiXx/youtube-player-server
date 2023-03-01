import { Router } from 'express';
import { HistoryService } from '~/resources/history/history.service';
/**
 * Create route
 */
const HistoryController = Router();

/**
 * Service instance
 */
const service = new HistoryService();

/**
 * Find all history
 */
HistoryController.get('/', (req, res) => {
  return res.status(200).json(service.findAll());
});

/**
 * Create an history
 */
HistoryController.post('/', (req, res) => {
  const createdVideo = service.create(req.body);

  return res.status(201).json(createdVideo);
});

export { HistoryController };
