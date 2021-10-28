import express, {Request, Response} from "express";
import * as locationModel from "../models/location";
import { Location } from "../types/location";
const locationRouter = express.Router();

locationRouter.post("/", async (req: Request, res: Response) => {
    const newLocation: Location = req.body;
    locationModel.create(newLocation, (err: Error, locationId: number) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }

        res.status(200).json({"locationId": locationId});
    });
});

locationRouter.get("/:id", async (req: Request, res: Response) => {
    const locationId: number = Number(req.params.id);
    locationModel.findOne(locationId, (err: Error, order: Location) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }
        res.status(200).json({"data": order});
    })
});


export {locationRouter};
