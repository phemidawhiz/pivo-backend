import {Location} from "../types/location";
import {db} from "../db";
import {OkPacket, QueryError, ResultSetHeader, RowDataPacket} from "mysql2";

export const create = (location: Location, callback: Function) => { // create location
    const queryString = "INSERT INTO trucklocations (truck_id, longitude, latitude) VALUES (?, ?, ?)"

    db.query(
        queryString,
        [location.truckId, location.longitude, location.latitude],
        (
            err: QueryError | null,
            result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
        ) => {
            if (err) {callback(err)};

            const insertId = (<OkPacket> result).insertId;
            callback(
                null,
                {
                    status: true,
                    message: "location created successfully",
                    info: insertId
                }
        );
        }
    );
};

export const findOne = (locationId: number, callback: Function) => { // get a location with location Id

    const queryString = `
    SELECT 
      *
    FROM trucklocations 
    WHERE location_id=?`

    db.query(queryString, locationId, (
        err: QueryError | null,
        result:  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
    ) => {
        if (err) {callback(err)}

        const row = (<RowDataPacket> result)[0];
        const location: Location =  {
            id: row.id,
            truckId: row.truckId,
            longitude: row.longitude,
            latitude: row.latitude,
            datetime: row.datetime
        }
        callback(null, location);
    });
}
