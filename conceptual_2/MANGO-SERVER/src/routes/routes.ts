import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import mangoRoutes from "../modules/mango/mango.routes";
import orderRoute from "../modules/order/order.route";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/mango", mangoRoutes);
routes.use("/order", orderRoute)

export default routes;