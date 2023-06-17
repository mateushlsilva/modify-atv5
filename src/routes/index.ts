import { Request, Response, Router } from "express"
import user from './user'
const routes = Router()

routes.use("/user",user)

routes.use((req: Request, res: Response) => res.status(404).json({ error: "Requisição desconhecida" }));

export default routes