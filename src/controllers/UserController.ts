import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";

class UserController{

    public getOne(req: Request, res: Response){
        const uuid:any = req.params.uuid
        const rep = AppDataSource.getRepository(User)
        const user = rep.findOneBy({id: uuid})
        return res.status(200).json(user)
    }

}

export default UserController;