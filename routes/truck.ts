import express, {Request, Response} from "express";
import * as truckModel from "../models/trucks";
import { Truck } from "../types/truck";
const truckRouter = express.Router();

truckRouter.get("/", async (req: Request, res: Response) => {
    truckModel.findAll((err: Error, orders: Truck[]) => {
        if (err) {
            return res.status(500).json({"errorMessage": err.message});
        }
        res.status(200).json({"data": orders});
    });
});

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
    truckModel.findOne(truckId, (err: Error, order: Truck) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }
        res.status(200).json({"data": order});
    })
});

truckRouter.put("/:id", async (req: Request, res: Response) => {
    const order: Truck = req.body;
    truckModel.update(order, (err: Error) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }

        res.status(200).send();
    })
});

export {truckRouter};
