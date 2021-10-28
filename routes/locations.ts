import express, {Request, Response} from "express";
import * as locationsModel from "../models/locations";
import { Location } from "../types/location";
const locationsRouter = express.Router();

locationsRouter.get("/:id/:page", async (req: Request, res: Response) => {
    const truckId: number = Number(req.params.id);
    const pageNo: number = Number(req.params.page);
    locationsModel.findAll(truckId, pageNo, (err: Error, locations: Location[]) => {
        if (err) {
            return res.status(500).json({"errorMessage": err.message});
        }
        res.status(200).json({"data": locations});
    });
});

export {locationsRouter};
