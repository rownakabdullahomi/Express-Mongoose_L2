import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import mangoRoutes from "../modules/mango/mango.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/mango", mangoRoutes);

export default routes;