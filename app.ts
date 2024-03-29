import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {truckRouter} from "./routes/truck";
import {locationRouter} from "./routes/location";
import {trucksRouter} from "./routes/trucks";
import {locationsRouter} from "./routes/locations";
import cors from 'cors';

const app = express();
dotenv.config();

const allowedOrigins = ['http://localhost:3110'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

app.use(bodyParser.json());
app.use("/truck", truckRouter);
app.use("/trucks", trucksRouter);
app.use("/location", locationRouter);
app.use("/locations", locationsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Node server started on port ${process.env.PORT}`);
});
