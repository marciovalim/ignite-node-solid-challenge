import { Router } from 'express';

import { apiDocsRouter } from './api-docs.routes';
import { usersRoutes } from './users.routes';

const appRouter = Router();

appRouter.use('/api-docs', apiDocsRouter);
appRouter.use('/users', usersRoutes);

export { appRouter };
