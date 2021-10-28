import {BasicTruck, Truck} from "../types/truck";
import {db} from "../db";
import {OkPacket, QueryError, ResultSetHeader, RowDataPacket} from "mysql2";

export const create = (truck: Truck, callback: Function) => { // create truck
    const queryString = "INSERT INTO trucks (name, description, imageurl) VALUES (?, ?, ?)"

    db.query(
        queryString,
        [truck.name, truck.description, truck.imageurl],
        (
            err: QueryError | null,
            result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
        ) => {
            if (err) {
                callback(
                    null,
                    {
                        status: false,
                        info: err
                    }
                )
            };

            const insertId = (<OkPacket> result).insertId;
            callback(
                null,
                {
                    status: true,
                    message: "Truck created successfully",
                    id: insertId
                }
            );
        }
    );
};

export const findOne = (truckId: number, callback: Function) => { // get a truck with truck Id

    const queryString = `
    SELECT 
      *
    FROM trucks 
    WHERE id=?`

    db.query(queryString, truckId, (
        err: QueryError | null,
        result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
    ) => {
        if (err) {callback(err)}

        const row = (<RowDataPacket> result)[0];
        const truck: Truck =  {
            name: row.name,
            id: row.id,
            description: row.description,
            datetime: row.datetime,
            imageurl: row.imageurl
        }
        callback(null, truck);
    });
}

export const update = (truck: Truck, id: number, callback: Function) => { // edit truck details
    const queryString = `UPDATE trucks SET name=?, description=? WHERE id=?`;

    db.query(
        queryString,
        [truck.name, truck.description, id],
        (
            err: QueryError | null,
            result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
        ) => {
            if (err) {
                callback(
                    null,
                    {
                        status: false,
                        info: err
                    }
                )
            };

            callback(
                null,
                {
                    status: true,
                    message: "Truck updated successfully",
                    id: (<OkPacket> result).insertId
                }
            );
        }
    );
}
