import { Router } from "express";

import { usersRoutes } from "./users.routes";

const appRouter = Router();

appRouter.use("/users", usersRoutes);

export { appRouter };
