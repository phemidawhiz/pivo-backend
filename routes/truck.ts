import express, {Request, Response} from "express";
import * as truckModel from "../models/truck";
import { Truck } from "../types/truck";
const truckRouter = express.Router();

truckRouter.post("/", async (req: Request, res: Response) => {
    const newTruck: Truck = req.body;
    truckModel.create(newTruck, (err: Error, truckId: number) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }

        res.status(200).json({"truckId": truckId});
    });
});

truckRouter.get("/:id", async (req: Request, res: Response) => {
    const truckId: number = Number(req.params.id);
    truckModel.findOne(truckId, (err: Error, truck: Truck) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }
        res.status(200).json({"data": truck});
    })
});

truckRouter.put("/:id", async (req: Request, res: Response) => {
    const truck: Truck = req.body;
    const truckId: number = Number(req.params.id);
    truckModel.update(truck, truckId, (err: Error) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }

        res.status(200).send();
    })
});

export {truckRouter};
