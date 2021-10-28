import express, {Request, Response} from "express";
import * as trucksModel from "../models/trucks";
import { Truck } from "../types/truck";
const trucksRouter = express.Router();

trucksRouter.get("/:page", async (req: Request, res: Response) => {
    const pageNo: number = Number(req.params.page);
    trucksModel.findAll(pageNo, (err: Error, trucks: Truck[]) => {
        if (err) {
            return res.status(500).json({"errorMessage": err.message});
        }
        res.status(200).json({"data": trucks});
    });
});

export {trucksRouter};
