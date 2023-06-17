import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";

class UserController{

    public async getOne(req: Request, res: Response){
        try{
            const uuid:any = req.params.uuid
            const rep =  AppDataSource.getRepository(User)
            const user = await rep.findOneBy({id: uuid})
            return res.status(200).json(user)
        }catch(err){
            return res.status(400).json({erro: true, menssagem: "Erro ao pegar o usuario!"})
        }
    }

    public async getAll(req: Request, res: Response){
        try{
            const rep = AppDataSource.getRepository(User)
            const all = await rep.find()
            return res.status(200).json(all)
        }catch(err){
            return res.status(400).json({erro: true, menssagem: "Erro ao pegar os usuarios!"})
        }
    }

}

export default new UserController();