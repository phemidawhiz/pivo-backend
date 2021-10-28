export interface BasicLocation {
    id: number,
}

export interface Location extends BasicLocation {
    truckId: number,
    longitude: string,
    latitude: string,
    datetime: string | Date, //date created
}
