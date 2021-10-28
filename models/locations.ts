import {db, pageLimit} from "../db";
import {OkPacket, QueryError, ResultSetHeader, RowDataPacket} from "mysql2";
import {Location} from "../types/location";

export const findAll = (truckId: number, pageNo: number, callback: Function) => { // get all locations of a particular truck id
    const queryString = `
    SELECT 
      *
    FROM 
    trucklocations
    WHERE truck_id=?
    LIMIT ?, ?
    `

    db.query(queryString, [truckId, ((pageNo - 1) * pageLimit), pageLimit], (
        err: QueryError | null,
        result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
    ) => {
        if (err) {callback(err)}

        const rows = <RowDataPacket[]> result;
        const locations: Location[] = [];

        rows.forEach(row => {
            const location: Location =  {
                id: row.id,
                truckId: row.truckId,
                longitude: row.longitude,
                latitude: row.latitude,
                datetime: row.datetime
            }
            locations.push(location);
        });
        callback(null, locations);
    });
}
