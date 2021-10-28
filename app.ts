import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {truckRouter} from "./routes/truck";
import  {locationRouter} from "./routes/location";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/truck", truckRouter);
app.use("/location", locationRouter);

app.listen(process.env.PORT, () => {
    console.log(`Node server started on port ${process.env.PORT}`);
});
