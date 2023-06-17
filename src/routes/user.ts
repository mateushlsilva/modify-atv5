import { Router } from "express";
import { UserController } from "../controllers";

const routes = Router()

routes.get('/one/:uuid', UserController.getOne)
routes.get('/all', UserController.getAll)

export default routes