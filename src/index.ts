import cors from 'cors';
import express from 'express';
import { config } from '~/config';
import { HistoryController } from '~/resources/history/history.controller';
import { ExceptionsHandler } from '~/middlewares/exceptions.handler';
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler';
import { BookmarkController } from './resources/bookmark/bookmark.controller';

const app = express();

/**
 * Parse the body of the request
 */
app.use(express.json());

/**
 * CORS configuration
 */
app.use(cors(config.CORS_OPTIONS));

/**
 * Routes definition
 */
app.use('/history', HistoryController);
app.use('/bookmarks', BookmarkController);

/**
 * All other routes are not handled by the server
 */
app.all('*', UnknownRoutesHandler);

/**
 * Error handling
 */
app.use(ExceptionsHandler);

/**
 * Start the server
 */
app.listen(config.API_PORT, () => console.log(`Sever listening on port ${config.API_PORT}`));
