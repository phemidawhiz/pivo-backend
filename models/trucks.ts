import {Truck} from "../types/truck";
import {db, pageLimit} from "../db";
import {OkPacket, QueryError, ResultSetHeader, RowDataPacket} from "mysql2";

export const findAll = (pageNo: number, callback: Function) => { // get all trucks
    const queryString = `
    SELECT 
      *
    FROM 
    trucks
    LIMIT ?, ?
    `

    db.query(queryString, [((pageNo - 1) * pageLimit), pageLimit], (
        err: QueryError | null,
        result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
    ) => {
        if (err) {callback(err)}

        const rows = <RowDataPacket[]> result;
        const trucks: Truck[] = [];

        rows.forEach(row => {
            const truck: Truck =  {
                name: row.name,
                id: row.id,
                description: row.description,
                datetime: row.datetime,
                imageurl: row.imageurl
            }
            trucks.push(truck);
        });
        callback(null, trucks);
    });
}
