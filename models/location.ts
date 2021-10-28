import {Location} from "../types/location";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (location: Location, callback: Function) => { // create location
    const queryString = "INSERT INTO trucklocations (truck_id, longitude, latitude) VALUES (?, ?, ?)"

    db.query(
        queryString,
        [location.truckId, location.longitude, location.latitude],
        (err, result) => {
            if (err) {callback(err)};

            const insertId = (<OkPacket> result).insertId;
            callback(null, insertId);
        }
    );
};

export const findOne = (locationId: number, callback: Function) => { // get a location with location Id

    const queryString = `
    SELECT 
      *
    FROM trucklocations 
    WHERE id=?`

    db.query(queryString, locationId, (err, result) => {
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

export const findAll = (truckId: number, callback: Function) => { // get all locations of a particular truck id
    const queryString = `
    SELECT 
      *
    FROM 
    trucklocations
    WHERE truck_id=?
    `

    db.query(queryString, truckId, (err, result) => {
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
