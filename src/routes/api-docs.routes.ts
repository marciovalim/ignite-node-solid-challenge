import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../../public/docs/swagger.json';

const apiDocsRouter = Router();

apiDocsRouter.use('/', swaggerUi.serve);
apiDocsRouter.get('/', swaggerUi.setup(swaggerDocument));

export { apiDocsRouter };
