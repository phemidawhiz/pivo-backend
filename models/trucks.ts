import {BasicTruck, Truck} from "../types/truck";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (truck: Truck, callback: Function) => { // create truck
    const queryString = "INSERT INTO trucks (name, description) VALUES (?, ?)"

    db.query(
        queryString,
        [truck.name, truck.description],
        (err, result) => {
            if (err) {callback(err)};

            const insertId = (<OkPacket> result).insertId;
            callback(null, insertId);
        }
    );
};

export const findOne = (truckId: number, callback: Function) => { // get a truck with truck Id

    const queryString = `
    SELECT 
      id,
      name, 
      description, 
      datetime
    FROM trucks 
    WHERE id=?`

    db.query(queryString, truckId, (err, result) => {
        if (err) {callback(err)}

        const row = (<RowDataPacket> result)[0];
        const truck: Truck =  {
            name: row.name,
            id: row.id,
            description: row.description,
            datetime: row.datetime
        }
        callback(null, truck);
    });
}

export const findAll = (callback: Function) => { // get all trucks
    const queryString = `
    SELECT 
      *
    FROM 
    trucks
    `

    db.query(queryString, (err, result) => {
        if (err) {callback(err)}

        const rows = <RowDataPacket[]> result;
        const trucks: Truck[] = [];

        rows.forEach(row => {
            const truck: Truck =  {
                name: row.name,
                id: row.id,
                description: row.description,
                datetime: row.datetime
            }
            trucks.push(truck);
        });
        callback(null, trucks);
    });
}

export const update = (truck: Truck, callback: Function) => { // edit truck details
    const queryString = `UPDATE trucks SET name=?, description=? WHERE id=?`;

    db.query(
        queryString,
        [truck.id, truck.name, truck.description],
        (err, result) => {
            if (err) {callback(err)}
            callback(null);
        }
    );
}
