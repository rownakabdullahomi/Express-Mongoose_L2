import { Router } from "express";
import { mangoController } from "./mango.controller";


const mangoRoutes = Router();

mangoRoutes.post("/", mangoController.createMango);
mangoRoutes.get("/", mangoController.getMangoes);
mangoRoutes.get("/:id", mangoController.getMangoById);
mangoRoutes.patch("/:id", mangoController.updateMango);

export default mangoRoutes;